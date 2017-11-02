'use strict';

const moment = require('moment');
const ZonedDateTime = require('js-joda').ZonedDateTime;
const fnsIsEqual = require('date-fns/is_equal');
const fnsIsAfter = require('date-fns/is_after');
const fnsIsBefore = require('date-fns/is_before');

const date1 = '2017-04-21T11:04:49Z';
const date2 = '2018-02-17T14:37:54Z';

// moment
const momentDate1 = moment(date1);
momentDate1.isSame(date2); // false
momentDate1.isAfter(date2); // false
momentDate1.isBefore(date2); // true

// js-joda
const jodaDate1 = ZonedDateTime.parse(date1);
const jodaDate2 = ZonedDateTime.parse(date2);
jodaDate1.equals(jodaDate2); // false
jodaDate1.isAfter(jodaDate2); // false
jodaDate1.isBefore(jodaDate2); // true

// date-fns
fnsIsEqual(date1, date2); // false
fnsIsAfter(date1, date2); // false
fnsIsBefore(date1, date2); // true
