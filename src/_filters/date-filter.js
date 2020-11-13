var { DateTime } = require('luxon');

module.exports = value => {
  return DateTime.fromJSDate(value).setLocale("it").toLocaleString(DateTime.DATE_FULL);
};
