/*
 * LecturePage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { numberWithCommas } from '../../utils/parse';

const messages = {
  evaluationsCount: (count) => `${numberWithCommas(count)}개의 강의평`,
  hitsCount: (count) => `${numberWithCommas(count)} 조회`,
  department: '개설학과',
  targetGrade: '학년',
  evaluation: {
    header: '강의평',
  },
  leaveReview: '강의평 남기기',
};

export default messages;
