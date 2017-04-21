'use strict';

const Moment = require('moment');
const MomentRange = require('moment-range');
const LocalDate = require('js-joda').LocalDate;
const Period = require('js-joda').Period;
const fnsEachDay = require('date-fns/each_day');
const fnsParse = require('date-fns/parse');

const moment = MomentRange.extendMoment(Moment);

const from = '2017-04-01';
const to = '2017-04-30';
let workingDays;

// moment
// by using the plugin 'moment-range'
const momentFrom = moment(from);
const momentTo = moment(to);
const momentRange = moment.range(momentFrom, momentTo);
workingDays = 0;

for (const day of momentRange.by('day')) {
  if (day.isoWeekday() !== 6 && day.isoWeekday() !== 7) {
    workingDays += 1;
  }
}

// js-joda
const jodaFrom = LocalDate.parse(from);
const jodaTo = LocalDate.parse(to);
const jodaPeriod = Period.between(jodaFrom, jodaTo);
workingDays = 0;

for (let i = 0; i < jodaPeriod.days() + 1; i++) {
  const day = jodaFrom.plusDays(i)
    .dayOfWeek()
    .value();

  if (day !== 6 && day !== 7) {
    workingDays += 1;
  }
}

// date-fns
const fnsFrom = fnsParse(from);
const fnsTo = fnsParse(to);
const fnsDays = fnsEachDay(fnsFrom, fnsTo);

for (const day of fnsDays) {
  console.log(day);
}
