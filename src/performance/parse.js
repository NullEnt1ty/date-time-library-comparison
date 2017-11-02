'use strict';

const Benchmark = require('benchmark');
const moment = require('moment');
const ZonedDateTime = require('js-joda').ZonedDateTime;
const fnsParse = require('date-fns/parse');

const suite = new Benchmark.Suite();
const date = '2017-04-21T11:04:49Z';

suite.add('moment', () => {
  const momentDate = moment.utc(date);
})
.add('js-joda', () => {
  const jodaDate = ZonedDateTime.parse(date);
})
.add('fnsDate', () => {
  const fnsDate = fnsParse(date);
})
.on('cycle', (event) => {
  console.log(String(event.target));
})
.run({async: true});
