'use strict';

const moment = require('moment');
const LocalDate = require('js-joda').LocalDate;
const fnsParse = require('date-fns/parse');

const date = '2017-04-21';

// moment
const momentDate = moment(date); // moment("2017-04-21T00:00:00.000")

// js-joda
const jodaDate = LocalDate.parse(date); // LocalDate { _year: 2017, _month: 4, _day: 21 }

// date-fns
const fnsDate = fnsParse(date); // 2017-04-20T22:00:00.000Z
