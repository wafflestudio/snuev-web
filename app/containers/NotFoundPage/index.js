/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import messages from './messages';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>
        <Helmet
          title="SNUEV - 오류"
          meta={[
            { name: 'description', content: '페이지를 잘못 찾아오신 것 같아요.' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}
