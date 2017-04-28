'use strict';

const moment = require('moment');
const ZonedDateTime = require('js-joda').ZonedDateTime;
const fnsParse = require('date-fns/parse');
const fnsSubHours = require('date-fns/sub_hours');
const fnsDistanceInWordsToNow = require('date-fns/distance_in_words_to_now');
const fnsFormat = require('date-fns/format');
const deLocale = require('date-fns/locale/de');

// moment
moment.locale('de');
moment().fromNow(); // vor ein paar Sekunden
moment().subtract(3, 'hours').fromNow(); // vor 3 Stunden
moment('2017-05-03T14:30+02').format('LLLL'); // Mittwoch, 3. Mai 2017 14:30

// date-fns
const dateNow = new Date();
const dateAgo = fnsSubHours(dateNow, 3);
const date = fnsParse('2017-05-03T14:30+02');
const format = 'dddd, D. MMMM YYYY HH:mm';

fnsDistanceInWordsToNow(dateNow, {addSuffix: true, includeSeconds: true, locale: deLocale}); // vor weniger als 5 Sekunden
fnsDistanceInWordsToNow(dateAgo, {addSuffix: true, includeSeconds: true, locale: deLocale}); // vor etwa 3 Stunden
fnsFormat(date, format, {locale: deLocale}); // Mittwoch, 3. Mai 2017 14:30
