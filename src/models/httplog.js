"use strict";

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

let httplogSchema = new Schema({
  "apptag": {type: String, required: true},
  "url": {type: String, required: true},
  "method": {type: String, required: true},
  "status": {type: String, required: true},
  "request": {type: Mixed, default: null},
  "response": {type: Mixed, default: null},
  "ua": {type: String, default: null},
  "eventTime": {type: Number, required: true},
  "ip": {type: String, default: null},
  "location": {type: String, default: null},
  "token": {type: String, default: null},
  "serverTime": {type: Date, default: Date.now}
});

mongoose.model('httplog', httplogSchema);
