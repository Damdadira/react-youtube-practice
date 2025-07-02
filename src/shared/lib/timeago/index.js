import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register('ko', koLocale);

export function formatAgo(data, lang = 'en') {
  return format(data, lang);
}