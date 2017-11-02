'use strict';

const Benchmark = require('benchmark');
const moment = require('moment');
const fnsParse = require('date-fns/parse');
const fnsStartOfYear = require('date-fns/start_of_year');

const suite = new Benchmark.Suite();
const date = '2017-04-21T11:04:49Z';
const momentDate = moment(date);
const fnsDate = fnsParse(date);

suite.add('moment', () => {
  momentDate.startOf('year');
})
.add('fnsDate', () => {
  fnsStartOfYear(fnsDate);
})
.on('cycle', (event) => {
  console.log(String(event.target));
})
.run({async: true});
