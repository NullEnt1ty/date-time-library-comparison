'use strict';

const moment = require('moment');
const fnsFormat = require('date-fns/format');

const date = '2017-04-21T11:04:49Z';

// moment
const momentDate = moment(date).format('DD.MM.YYYY HH:mm'); // 21.04.2017 13:04

// js-joda
// I couldn't find any method for formatting a date in the documentation

// date-fns
const fnsDate = fnsFormat(date, 'DD.MM.YYYY HH:mm'); // 21.04.2017 13:04
