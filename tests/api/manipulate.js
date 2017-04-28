'use strict';

const moment = require('moment');
const ZonedDateTime = require('js-joda').ZonedDateTime;
const fnsParse = require('date-fns/parse');
const fnsAddDays = require('date-fns/add_days');
const fnsAddWeeks = require('date-fns/add_weeks');
const fnsAddMonths = require('date-fns/add_months');
const fnsSubHours = require('date-fns/sub_hours');

const date = '2017-04-21T11:04:49Z';

// moment
const momentDate = moment.utc(date); // 2017-04-21T11:04:49.000+00:00
momentDate.add(7, 'days'); // 2017-04-28T11:04:49.000+00:00
momentDate.subtract(12, 'hours'); // 2017-04-27T23:04:49.000+00:00
momentDate.add(1, 'months').add('2', 'weeks'); // 2017-06-10T23:04:49.000+00:00

// js-joda
let jodaDate = ZonedDateTime.parse(date); // 2017-04-21T11:04:49Z
jodaDate = jodaDate.plusDays(7); // 2017-04-28T11:04:49Z
jodaDate = jodaDate.minusHours(12); // 2017-04-27T23:04:49Z
jodaDate = jodaDate.plusMonths(1).plusWeeks(2); // 2017-06-10T23:04:49Z

// date-fns
let fnsDate = fnsParse(date); // 2017-04-21T11:04:49.000Z
fnsDate = fnsAddDays(fnsDate, 7); // 2017-04-28T11:04:49.000Z
fnsDate = fnsSubHours(fnsDate, 12); // 2017-04-27T23:04:49.000Z
fnsDate = fnsAddWeeks(fnsAddMonths(fnsDate, 1), 2); // 2017-06-10T23:04:49.000Z
