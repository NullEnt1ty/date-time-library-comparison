'use strict';

const Benchmark = require('benchmark');
const moment = require('moment');
const ZonedDateTime = require('js-joda').ZonedDateTime;
const fnsParse = require('date-fns/parse');
const fnsAddDays = require('date-fns/add_days');

const suite = new Benchmark.Suite();
const date = '2017-04-21T11:04:49Z';
const momentDate = moment(date);
const jodaDate = ZonedDateTime.parse(date);
const fnsDate = fnsParse(date);

suite.add('moment', () => {
  momentDate.add(7, 'days');
})
.add('js-joda', () => {
  jodaDate.plusDays(7);
})
.add('fnsDate', () => {
  fnsAddDays(fnsDate, 7);
})
.on('cycle', (event) => {
  console.log(String(event.target));
})
.run({async: true});
