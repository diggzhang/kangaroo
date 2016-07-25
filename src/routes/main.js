"use strict";

const router = require('koa-router')();
const Httplog = require('BackendHttpLog');
import rp from 'request-promise';

router.all('/', function *() {
  this.body = 'hi diggzhang';
});

router.post('/v3_5/httplog', function *() {
  if (this.request.body.method != 'HEAD') {
    yield Httplog.save(this.request.body);

    this.header["accept"] = "*/*";
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

  }
  this.status = 204;
});

module.exports = router;
