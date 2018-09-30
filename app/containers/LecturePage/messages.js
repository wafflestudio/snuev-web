/*
 * LecturePage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { numberWithCommas } from '../../utils/parse';

const messages = {
  evaluationsCount: (count) => `${numberWithCommas(count)}개의 강의평`,
  hitsCount: (count) => `${numberWithCommas(count)} 조회`,
  professor: (name) => `${name} 교수`,
  score: '총점',
  easiness: '난이도 쉬움',
  grading: '학점 잘 줌',
  department: '개설학과',
  targetGrade: '학년',
  evaluation: {
    header: '강의평',
  },
  writeReview: '강의평 쓰기',
  leaveReview: '강의평 남기기',
  backToList: '리스트로 돌아가기',
  createEvaluationSuccess: '강의평 등록 완료!',
  updateEvaluationSuccess: '강의평 수정 완료!',
};

export default messages;
