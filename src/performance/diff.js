'use strict';

const Benchmark = require('benchmark');
const moment = require('moment');
const ZonedDateTime = require('js-joda').ZonedDateTime;
const ChronoUnit = require('js-joda').ChronoUnit;
const fnsParse = require('date-fns/parse');
const fnsDifferenceInDays = require('date-fns/difference_in_days');

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
  momentDate1.diff(momentDate2, 'days');
})
.add('js-joda', () => {
  jodaDate1.until(jodaDate2, ChronoUnit.DAYS);
})
.add('fnsDate', () => {
  fnsDifferenceInDays(fnsDate1, fnsDate2);
})
.on('cycle', (event) => {
  console.log(String(event.target));
})
.run({async: true});
