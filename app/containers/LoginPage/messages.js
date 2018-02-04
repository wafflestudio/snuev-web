/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.LoginPage.header',
    defaultMessage: 'This is LoginPage container !',
  },
  welcome: '서울대학교 강의평가서비스에 오신 것을 환영합니다!',
  recoverPassword: '비밀번호를 잊어버렸어요',
  login: '로그인',
  input: {
    usernameHint: 'mysnu account',
    passwordHint: 'password',
  },
  signup: {
    question: '아직 계정이 없나요?',
    message: '회원가입',
  },
});
