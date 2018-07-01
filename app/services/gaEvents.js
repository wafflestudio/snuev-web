import { trackEvent, trackPageView } from '@redux-beacon/google-analytics';
import { LOCATION_CHANGE } from 'react-router-redux';

import { Types as LecturePageTypes } from '../containers/LecturePage/reducer';

export const setupGA = () => {
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', process.env.GA_TRACKING_ID, 'auto');
  ga('send', 'pageview');
  /* eslint-disable */
};

const EVALUATION_CATEGORY = 'Evaluations';
const VOTE_CATEGORY = 'Votes';

const CREATE_ACTION = 'create';
const UPVOTE_ACTION = 'upvote';
const DOWNVOTE_ACTION = 'downvote';

const pageView = trackPageView((action) => ({
  page: action.payload.pathname,
}));

const evaluationEvent = trackEvent((action) => ({
  category: EVALUATION_CATEGORY,
  action: CREATE_ACTION,
  label: action.id,
}));

export const eventsMap = {
  [LOCATION_CHANGE]: pageView,
  [LecturePageTypes.CREATE_EVALUATION_REQUEST]: evaluationEvent,
};
