const makeSelectPage = () => (state) => state.get('signUpPage');

const makeSelectDepartments = () => createSelector(
  makeSelectEntities(),
  (entities) => denormalize(entities, 'departments', null),
);

export {
  makeSelectPage,
};
