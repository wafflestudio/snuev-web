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
      path: '/',
      name: 'mainPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/MainPage/reducer'),
          import('containers/MainPage/sagas'),
          import('containers/MainPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('mainPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/sign_in',
      name: 'loginPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/sign_up',
      name: 'signUpPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/SignUpPage/reducer'),
          import('containers/SignUpPage/sagas'),
          import('containers/SignUpPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signUpPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/sign_up/complete',
      name: 'signUpCompletePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/SignUpCompletePage/reducer'),
          import('containers/SignUpCompletePage/sagas'),
          import('containers/SignUpCompletePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signUpCompletePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/lectures/:lectureId',
      name: 'lecturePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/LecturePage/reducer'),
          import('containers/LecturePage/sagas'),
          import('containers/LecturePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('lecturePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/confirm_email/:confirmation_token',
      name: 'confirm_email',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ConfirmEmailPage/reducer'),
          import('containers/ConfirmEmailPage/sagas'),
          import('containers/ConfirmEmailPage'),
        ]);

        const renderRoute = loadModule(cb);

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
