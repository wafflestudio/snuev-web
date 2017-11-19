// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/sign_up',
      name: 'signup',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/SignupPage/reducer'),
          import('containers/SignupPage/sagas'),
          import('containers/SignupPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signupPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/confirm_email',
      name: 'confirm_email',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ConfirmEmailPage/reducer'),
          import('containers/ConfirmEmailPage/sagas'),
          import('containers/ConfirmEmailPage'),
        ]);

        const renderRoute = loadModule(cb);
        //from here
        importModules.then(([reducer, sagas, component]) => {
          injectReducer('confirmEmailPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
