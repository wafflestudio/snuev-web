import { createSelector } from 'reselect';
import upperFirst from 'lodash/upperFirst';
import isFunction from 'lodash/isFunction';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';

export const createPageSelectors = (makeSelectHelper, extraPageKeys) => {
  const makeSelectPage = isFunction(makeSelectHelper) ?
    makeSelectHelper :
    (() => (state) => state.get(makeSelectHelper));
  const defaultKeys = ['payload', 'data', 'isFetching', 'error'];
  const pageKeys = isArray(extraPageKeys) ? [...defaultKeys, ...extraPageKeys] : defaultKeys;
  if (isString(extraPageKeys)) {
    pageKeys.push(extraPageKeys);
  }
  const selectorMakers = { makeSelectPage };
  pageKeys.forEach((pageKey) => {
    selectorMakers[`makeSelect${upperFirst(pageKey)}`] = () => createSelector(
      makeSelectPage(),
      (page) => page.get(pageKey)
    );
  });
  return selectorMakers;
};
