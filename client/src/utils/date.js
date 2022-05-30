import dayjs from 'dayjs';

export function formatDate(date) {
  return dayjs(date).format('ddd MMM D, YYYY h:mm a');
}
