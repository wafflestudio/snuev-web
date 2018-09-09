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
  error: {
    usernameBlank: '마이스누 계정을 입력해주세요',
    usernameExists: '계정이 이미 존재합니다.',
    passwordBlank: '비밀번호를 입력해주세요',
    passwordValid: '비밀번호가 너무 짧아요.ㅠㅠ (최소 8자)',
    nicknameBlank: '별명을 입력해주세요',
    departmentBlank: '전공을 정해주세요',
  },
});
