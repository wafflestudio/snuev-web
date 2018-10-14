/*
 * LecturePage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { defineMessages } from 'react-intl';
import { numberWithCommas } from '../../utils/parse';

export default defineMessages({
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
  emptyLecture: '강의평이 아직 없습니다.<br />첫 강의평을 작성해보세요!',
  needConfirmation: '스누메일 인증이 필요합니다.<br />인증절차를 완료해주세요.',
  unauthorized: '인증된 마이스누 계정으로 로그인하면<br />강의평을 조회할 수 있습니다.',
  login: '로그인하기',
  snuMail: '스누메일 가기',
});
