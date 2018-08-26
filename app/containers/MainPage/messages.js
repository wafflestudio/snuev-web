/*
 * MainPage Messages
 *
 * This contains all the text for the MainPage component.
 */
import { defineMessages } from 'react-intl';

const MainPage = 'app.containers.MainPage.';

export default defineMessages({
  header: {
    id: 'app.containers.MainPage.header',
    defaultMessage: 'This is MainPage container !',
  },
  searchPlaceholder: {
    id: `${MainPage}.searchPlaceholder`,
    defaultMessage: '강의명, 교수명, 학과명으로 검색해보세요',
  },
  headers: {
    recentEvaluations: {
      id: `${MainPage}.recentEvaluationHeader`,
      defaultMessage: '최근 강의평',
    },
    mostEvaluatedLectures: {
      id: `${MainPage}.mostEvaluatedLectures`,
      defaultMessage: '강의평의 많은 강의',
    },
    topRatedLectures: {
      id: `${MainPage}.topRatedLectures`,
      defaultMessage: '평점이 높은 강의',
    },
    mostLikedEvaluations: {
      id: `${MainPage}.mostLikedEvaluations`,
      defaultMessage: '인기 강의평',
    },
  },
});
