"use strict";

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

let httplogSchema = new Schema({
  "apptag": {type: String, default: null},
  "url": {type: String},
  "method": {type: String},
  "status": {type: String},
  "request": {type: Mixed, default: null},
  "response": {type: Mixed, default: null},
  "ua": {type: String, default: null},
  "eventTime": {type: Number},
  "device": {type: String},
  "ip": {type: String, default: null},
  "location": {type: String, default: null},
  "token": {type: String, default: null},
  "serverTime": {type: Date, default: Date.now},
  "reciveLogTime": {type: Number, default: null},
  "apiTime": {type: Number, default: null},
  "os": {type: String, default: null}
}, {"strict": false, "validateBeforeSave":false});

mongoose.model('v4_httplog', httplogSchema);
