import { DateTime } from 'luxon';

export default value => {
  return DateTime.fromJSDate(value).setLocale("it").toLocaleString(DateTime.DATE_FULL);
};
