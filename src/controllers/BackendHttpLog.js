"use strict";

import mongoose from 'mongoose';
const httplog = mongoose.model('httplog');

class httplogController {
  constructor(attributes) {
    // this.attributes = clone(attributes || {})
  };

  static *save(httplogs) {
    yield httplog.create(httplogs);
  };
}

module.exports = httplogController;
