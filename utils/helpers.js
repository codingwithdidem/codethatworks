import { format, parseISO } from 'date-fns';

export const getFormattedDate = (date) => {
  const isoString = new Date(date).toISOString();
  return format(parseISO(isoString), 'MMMM dd, yyyy');
};
