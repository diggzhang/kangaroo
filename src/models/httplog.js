"use strict";

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

let httplogSchema = new Schema({
  "apptag": {type: String, required: true},
  "url": {type: String, required: true},
  "method": {type: String, required: true},
  "status": {type: String, required: true},
  "request": {type: Mixed},
  "response": {type: Mixed},
  "ua": String,
  "eventTime": {type: Number, required: true},
  "ip": String,
  "token": String
});

mongoose.model('httplog', httplogSchema);
