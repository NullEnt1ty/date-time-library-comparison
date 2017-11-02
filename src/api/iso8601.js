'use strict';

const Moment = require('moment');
const MomentRange = require('moment-range');
const joda = require('js-joda').use(require('js-joda-extra'));
const fnsParse = require('date-fns/parse');

const moment = MomentRange.extendMoment(Moment);
const LocalDate = joda.LocalDate;
const LocalTime = joda.LocalTime;
const LocalDateTime = joda.LocalDateTime;
const ZonedDateTime = joda.ZonedDateTime;
const Duration = joda.Duration;
const Interval = joda.Interval;

// moment
moment('20080915'); // 2008-09-15T00:00:00.000
moment('155300322348'); // Not recognized; Deprecation warning
moment('155300+0500'); // Not recognized; Deprecation warning
moment('20080915T155300'); // 2008-09-15T15:53:00.000
moment('20080915T155300+0500'); // 2008-09-15T12:53:00.000
moment('2008-09-15'); // 2008-09-15T00:00:00.000
moment('15:53:00.322348'); // Not recognized; Deprecation warning
moment('15:53:00+05:00'); // Not recognized; Deprecation warning
moment('2008-09-15T15:53:00'); // 2008-09-15T15:53:00.000
moment('2008-09-15T15:53:00+05:00'); // 2008-09-15T12:53:00.000
moment.duration('P20080915T155300').toISOString(); // P0D
moment.duration('P2008-09-15T15:53:00').toISOString(); // P0D
moment.duration('P2y10m14dT20h13m45s').toISOString(); // P0D
moment.duration('P6w').toISOString(); // P0D
moment.duration('P3Y6M4DT12H30M5S').toISOString(); // P3Y6M4DT12H30M5S
moment.range('2007-03-01T13:00:00Z/2008-05-11T15:30:00Z').toString(); // 2007-03-01T14:00:00+01:00/2008-05-11T17:30:00+02:00
moment.range('2007-03-01T13:00:00Z/P1Y2M10DT2H30M'); // Not recognized; Deprecation warning
moment.range('R5/2008-03-01T13:00:00Z/P1Y2M10DT2H30M'); // Not recognized; Deprecation warning

// js-joda
LocalDate.parse('20080915'); // Exception
LocalTime.parse('155300322348'); // Exception
ZonedDateTime.parse('155300+0500'); // Exception
LocalDateTime.parse('20080915T155300'); // Exception
ZonedDateTime.parse('20080915T155300+0500'); // Exception
LocalDate.parse('2008-09-15').toString(); // 2008-09-15
LocalTime.parse('15:53:00.322348').toString(); // 15:53:00.322348
ZonedDateTime.parse('15:53:00+05:00'); // Exception
LocalDateTime.parse('2008-09-15T15:53:00').toString(); // 2008-09-15T15:53
ZonedDateTime.parse('2008-09-15T15:53:00+05:00').toString(); // 2008-09-15T15:53+05:00
Duration.parse('P20080915T155300'); // Exception
Duration.parse('P2008-09-15T15:53:00'); // Exception
Duration.parse('P2y10m14dT20h13m45s'); // Exception
Duration.parse('P6w'); // Exception
Duration.parse('P3Y6M4DT12H30M5S'); // Exception
Interval.parse('2007-03-01T13:00:00Z/2008-05-11T15:30:00Z').toString(); // 2007-03-01T13:00:00Z/2008-05-11T15:30:00Z
Interval.parse('2007-03-01T13:00:00Z/P1Y2M10DT2H30M'); // Exception
Interval.parse('R5/2008-03-01T13:00:00Z/P1Y2M10DT2H30M'); // Exception

// date-fns
fnsParse('20080915'); // 2008-09-14T22:00:00.000Z
fnsParse('155300322348'); // Invalid Date
fnsParse('155300+0500'); // Invalid Date
fnsParse('20080915T155300'); // 2008-09-15T13:53:00.000Z
fnsParse('20080915T155300+0500'); // 2008-09-15T10:53:00.000Z
fnsParse('2008-09-15'); // 2008-09-14T22:00:00.000Z
fnsParse('15:53:00.322348'); // Invalid Date
fnsParse('15:53:00+05:00'); // Invalid Date
fnsParse('2008-09-15T15:53:00'); // 2008-09-15T13:53:00.000Z
fnsParse('2008-09-15T15:53:00+05:00'); // 2008-09-15T10:53:00.000Z
fnsParse('P20080915T155300'); // Invalid Date
fnsParse('P2008-09-15T15:53:00'); // Invalid Date
fnsParse('P2y10m14dT20h13m45s'); // Invalid Date
fnsParse('P6w'); // Invalid Date
fnsParse('P3Y6M4DT12H30M5S'); // Invalid Date
fnsParse('2007-03-01T13:00:00Z/2008-05-11T15:30:00Z'); // 2007-03-01T13:00:00.000Z
fnsParse('2007-03-01T13:00:00Z/P1Y2M10DT2H30M'); // 2007-03-01T13:00:00.000Z
fnsParse('R5/2008-03-01T13:00:00Z/P1Y2M10DT2H30M'); // Invalid Date
