import { createSelector } from 'reselect';

export const createPageSelectors = (pageName, payloadName) => {
  const payload = payloadName || 'payload';
  const selectPage = (state) => state.get(pageName);
  const makeSelectPayload = () => createSelector(
    selectPage,
    (page) => page.get(payload)
  );
  const makeSelectIsFetching = () => createSelector(
    selectPage,
    (page) => page.get('isFetching')
  );
  const makeSelectError = () => createSelector(
    selectPage,
    (page) => page.get('error')
  );
  return {
    selectPage, makeSelectPayload, makeSelectIsFetching, makeSelectError,
  };
};
