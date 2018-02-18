import { format } from 'date-fns';

export const numberWithCommas = (number) =>
  parseInt(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const parseSemesterSeason = (season) => {
  switch (season) {
    case 'spring':
      return '봄 계절';
    case 'summer':
      return '여름 계절';
    case 'fall':
    case 'autumn':
      return '가을 계절';
    case 'winter':
      return '겨울 계절';
    default:
      return '';
  }
};

export const parseDate = (time) =>
  format(new Date(time), 'YYYY/MM/DD');
