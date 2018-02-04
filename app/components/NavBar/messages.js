/*
 * NavBar Messages
 *
 * This contains all the text for the NavBar component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.components.NavBar.title',
    defaultMessage: 'SNUEV',
  },
  navItems: {
    snutt: {
      id: 'app.components.NavBar.navItems.snutt',
      defaultMessage: 'SNUTT',
    },
    blog: {
      id: 'app.components.NavBar.navItems.blog',
      defaultMessage: '블로그',
    },
    profile: {
      id: 'app.components.NavBar.navItems.profile',
      defaultMessage: '내 정보',
    },
    logout: {
      id: 'app.components.NavBar.navItems.logout',
      defaultMessage: '로그아웃',
    },
  },
});
