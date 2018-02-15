import { createSelector } from 'reselect';

export const createPageSelectors = (pageName, payloadName, customMakeSelectPage) => {
  const payload = payloadName || 'payload';
  const makeSelectPage = customMakeSelectPage || (() => (state) => state.get(pageName));
  const makeSelectPayload = () => createSelector(
    makeSelectPage(),
    (page) => page.get(payload)
  );
  const makeSelectData = () => createSelector(
    makeSelectPage(),
    (page) => page.get('data')
  );
  const makeSelectIsFetching = () => createSelector(
    makeSelectPage(),
    (page) => page.get('isFetching')
  );
  const makeSelectError = () => createSelector(
    makeSelectPage(),
    (page) => page.get('error')
  );
  return {
    makeSelectPage, makeSelectPayload, makeSelectData, makeSelectIsFetching, makeSelectError,
  };
};
