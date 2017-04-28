'use strict';

const Benchmark = require('benchmark');
const moment = require('moment');
const ZonedDateTime = require('js-joda').ZonedDateTime;
const fnsParse = require('date-fns/parse');
const fnsIsEqual = require('date-fns/is_equal');

const suite = new Benchmark.Suite();
const date1 = '2017-04-21T11:04:49Z';
const date2 = '2018-02-17T14:37:54Z';

const momentDate1 = moment(date1);
const momentDate2 = moment(date2);

const jodaDate1 = ZonedDateTime.parse(date1);
const jodaDate2 = ZonedDateTime.parse(date2);

const fnsDate1 = fnsParse(date1);
const fnsDate2 = fnsParse(date2);

suite.add('moment', () => {
  momentDate1.isSame(momentDate2);
})
.add('js-joda', () => {
  jodaDate1.equals(jodaDate2);
})
.add('fnsDate', () => {
  fnsIsEqual(fnsDate1, fnsDate2);
})
.on('cycle', (event) => {
  console.log(String(event.target));
})
.run({async: true});
