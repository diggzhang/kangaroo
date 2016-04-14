"use strict";

const router = require('koa-router')();

router.all('/', function *() {
  this.body = 'hi diggzhang';
});

module.exports = router;
