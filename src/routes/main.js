"use strict";

const router = require('koa-router')();
const Httplog = require('BackendHttpLog');

router.all('/', function *() {
  this.body = 'hi diggzhang';
});

router.post('/v3.5/httplog', function *() {
  yield Httplog.save(this.request.body);
  //console.log(this.request.body);
  this.status = 204;
});

module.exports = router;
