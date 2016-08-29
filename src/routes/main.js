"use strict";

const router = require('koa-router')();
const Httplog = require('BackendHttpLog');
const HttplogV4 = require('BackendHttpLogV4');
import rp from 'request-promise';

router.all('/', function *() {
  this.body = 'hi diggzhang';
});

router.post('/v3_5/httplog', function *() {
  yield Httplog.save(this.request.body);
  this.status = 204;
    /**
    this.header["accept"] = "*\/*";
    delete this.header["content-length"];
    this.header["content-type"] = "application/json";
    delete this.header["content-encoding"];

    let options = {
      uri: "http://10.47.108.72:8989/api/v3_5/httplog",
      method: "POST",
      body: this.request.body,
      headers: this.header,
      json: true
    };

    rp(options)
      .then(function (parsedBody) {
      })
      .catch(function (err) {
        if (err) console.error(err);
      });

     **/
});

router.post('/v4/httplog', function *() {
  yield HttplogV4.save(this.request.body);
  this.status = 204;
});

module.exports = router;
