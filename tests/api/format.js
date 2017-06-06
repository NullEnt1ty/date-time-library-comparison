'use strict';

const moment = require('moment');
const ZonedDateTime = require('js-joda').ZonedDateTime;
const DateTimeFormatter = require('js-joda').DateTimeFormatter;
const fnsFormat = require('date-fns/format');

const date = '2017-04-21T11:04:49Z';

// moment
const momentDate = moment(date).format('DD.MM.YYYY HH:mm'); // 21.04.2017 13:04

// js-joda
const formatter = DateTimeFormatter.ofPattern('dd.MM.yyyy HH:mm');
const jodaDate = formatter.format(ZonedDateTime.parse(date)); // 21.04.2017 11:04

// date-fns
const fnsDate = fnsFormat(date, 'DD.MM.YYYY HH:mm'); // 21.04.2017 13:04
