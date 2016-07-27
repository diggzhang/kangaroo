"use strict";

import mongoose from 'mongoose';
const httplog = mongoose.model('httplog');
const libqqwry = require('lib-qqwry');
const _ = require('lodash');
const qqwry = libqqwry.init();
qqwry.speed();

class httplogController {
  constructor(attributes) {
    // this.attributes = clone(attributes || {})
  };

  static *save(httplogs) {

    if (httplogs.method == 'POST'
          || httplogs.method == 'PUT'
          || httplogs.method == 'DELETE'
          || (httplogs.method == 'GET' && (_.endsWith(httplogs.url, '/me')))
    ) {

      httplogs['reciveLogTime'] = Date.now();
      try {
        httplogs['location'] = qqwry.searchIP(httplogs.ip).Country;
      } catch(e) {
        console.error(`invalid ip address ${httplogs.ip}`);
      }

      yield httplog.create(httplogs);

    }

  };
}

module.exports = httplogController;
