import { format } from 'date-fns';

export const numberWithCommas = (number) =>
  parseInt(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const parseSemesterSeason = (season) => {
  switch (season) {
    case 'spring':
      return '1학기';
    case 'summer':
      return '여름 계절';
    case 'autumn':
      return '2학기';
    case 'winter':
      return '겨울 계절';
    default:
      return '';
  }
};

export const parseDate = (time) =>
  format(new Date(time), 'YYYY/MM/DD');
