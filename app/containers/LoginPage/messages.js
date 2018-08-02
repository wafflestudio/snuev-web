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
  welcome: '진짜가 돌아왔다<br />여기가 바로 그 리얼 서울대학교 강의평가 스누이브',
  permission: '서울대학교 메일로 인증받은 분들만 입장 가능',
  recoverPassword: '비밀번호 찾기',
  login: '로그인',
  input: {
    usernameHint: '마이스누 계정',
    passwordHint: '비밀번호',
  },
  signup: '가입하기',
  snuevTeam: '와플스튜디오 SNUEV 팀',
  snuevGithub: 'SNUEV Github',
  developer: '개발자 괴롭히기',
});
