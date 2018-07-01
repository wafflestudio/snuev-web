import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.SignUpPage.header',
    defaultMessage: 'This is SignUpPage container !',
  },
  createAccount: '가입하기',
  usernameInputText: '서울대학교 이메일 인증이 필요하므로<br />마이스누 계정과 동일하게 입력해주세요.',
  input: {
    usernameHint: '마이스누 계정',
    passwordHint: '비밀번호',
    nicknameHint: '별명',
    departmentHint: '학과명',
  },
  signup: '가입',
  back: {
    text: '로그인하러 가기',
    hint: '계정이 이미 있다면?',
  },
  completeTitle: '메일 전송 완료',
  completeBody: '아래 마이스누 웹메일로 인증메일을 전송하였습니다.<br />메일을 확인해 인증링크를 클릭해 주세요.',
  completeBack: '돌아가기',
});
