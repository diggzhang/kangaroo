import koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import { server, mongo } from './config';
import requireDir from 'require-dir';
import Task from 'shell-task';

/**
 * Server configure
 */

const app = koa();
const port = server.port;
const env = server.env;

const proxyDistUrl = "http://10.47.108.72:8989/api/v3_5/httplog";
const gorScriptPath = __dirname + "/runGor.sh";
const gorBin = __dirname + "/gor";

/**
 * Connect to database
 */

mongoose.connect(mongo.url, mongo.opt);

mongoose.connection.on("error", err => {
  console.log(err)
});

mongoose.connection.on("connected", () => {
  console.log("Database connected to " + mongo.url);

  /**
   * Require models after database connected
   */

  requireDir('./models', {recurse: true});
  require('./config/middleware')(app);

  app.listen(server.port);

  new Task("sh " + gorScriptPath + " " + proxyDistUrl + " " + gorBin + " " + server.port ).run(function (err, next) {
    if (err) throw err;
    console.log("gor have been proxy stream now.");
    console.log(`proxy from ${server.port} to API: ${proxyDistUrl}`);
  });
  console.log(`Backend http log server listening on port ${port}`);
  console.log(`Environment: ${env}`);
});

/**
 * Connect MongoDB error
 */

mongoose.connection.on('error', err => {
  console.error(err);
  console.info('Mongo server connected error, exit process.');
  process.exit(1);
});

/**
 * Do something after MongoDB disconnected.
 */

mongoose.connection.on('disconnected', () => {
  console.error('Database disconnected.');
  console.info('Exit process.');
  process.exit(1);
});

/**
 * Stop the process with Ctrl+C
 */

process.on('SIGINT', () => {
  console.warn('App exit.');
  if (mongoose.connection.readyState === 1) {
    mongoose.connection.close();
  } else {
    process.exit(0);
  }
});

module.exports = app;
