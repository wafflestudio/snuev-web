/*
 * SignUpPage Messages
 *
 * This contains all the text for the SignUpPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.SignUpPage.header',
    defaultMessage: 'This is SignUpPage container !',
  },
  createAccount: '계정 만들기',
  usernameInputText: '서울대학교 이메일 인증이 필요합니다. 마이스누(mySNU) 계정명과 동일하게 입력해주세요.',
  input: {
    emailHint: '마이스누 계정',
    nicknameHint: '별명',
    passwordHint: '비밀번호',
    departmentHint: '학과명',
  },
  signup: '회원가입',
  login: {
    question: '이미 계정이 있나요?',
    message: '로그인하기',
  },
});
