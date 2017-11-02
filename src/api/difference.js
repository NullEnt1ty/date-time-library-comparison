'use strict';

const moment = require('moment');
const ZonedDateTime = require('js-joda').ZonedDateTime;
const ChronoUnit = require('js-joda').ChronoUnit;
const fnsParse = require('date-fns/parse');
const fnsDifferenceInDays = require('date-fns/difference_in_days');

const date1 = '2017-04-21T11:04:49Z';
const date2 = '2017-02-17T14:37:54Z';

// moment
moment(date1).diff(date2, 'days'); // 62

// js-joda
const jodaDate1 = ZonedDateTime.parse(date1);
const jodaDate2 = ZonedDateTime.parse(date2);
jodaDate1.until(jodaDate2, ChronoUnit.DAYS); // -62

// date-fns
fnsDifferenceInDays(date1, date2); // 62
