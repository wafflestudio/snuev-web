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
});
