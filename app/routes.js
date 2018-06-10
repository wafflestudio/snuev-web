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
          injectSagas('mainPage', sagas.default);
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
          injectSagas('signUpPage', sagas.default);
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
          injectSagas('lecturePage', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/confirm_email',
      name: 'confirmEmailPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ConfirmEmailPage/reducer'),
          import('containers/ConfirmEmailPage/sagas'),
          import('containers/ConfirmEmailPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('confirmEmailPage', reducer.default);
          injectSagas('confirmEmailPage', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/profile',
      name: 'profilePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ProfilePage/reducer'),
          import('containers/ProfilePage/sagas'),
          import('containers/ProfilePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('profilePage', reducer.default);
          injectSagas('profilePage', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/reset_password',
      name: 'resetPasswordPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ResetPasswordPage/reducer'),
          import('containers/ResetPasswordPage/sagas'),
          import('containers/ResetPasswordPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('resetPasswordPage', reducer.default);
          injectSagas('resetPasswordPage', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/new_password/:reset_token',
      name: 'newPasswordPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/NewPasswordPage/reducer'),
          import('containers/NewPasswordPage/sagas'),
          import('containers/NewPasswordPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('newPasswordPage', reducer.default);
          injectSagas('newPasswordPage', sagas.default);
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
