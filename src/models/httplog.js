"use strict";

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

let httplogSchema = new Schema({
  "apptag": {type: String, default: null},
  "url": {type: String, default: null},
  "method": {type: String, default: null},
  "status": {type: String, default: null},
  "request": {type: Mixed, default: null},
  "response": {type: Mixed, default: null},
  "ua": {type: String, default: null},
  "eventTime": {type: Number},
  "ip": {type: String, default: null},
  "location": {type: String, default: null},
  "token": {type: String, default: null},
  "serverTime": {type: Date, default: Date.now}
});

mongoose.model('httplog', httplogSchema);
