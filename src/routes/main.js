"use strict";

const router = require('koa-router')();
const Httplog = require('BackendHttpLog');

router.all('/', function *() {
  this.body = 'hi diggzhang';
});

router.post('/v3_5/httplog', function *() {
  yield Httplog.save(this.request.body);
  this.status = 204;
});

module.exports = router;
