import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectMainPage from './selectors';
import messages from './messages';
import { Creators as Actions } from './reducer';

export class MainPage extends React.PureComponent {
  render() {
    const { payload } = this.props.MainPage;
    const { fetchEvaluation } = this.props;
    return (
      <div>
        <Helmet
          title="MainPage"
          meta={[
            { name: 'description', content: 'Description of MainPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <button onClick={fetchEvaluation}>
          Fetch posts
        </button>
        {!!payload &&
          payload.map((evaluation, index) => (
            <text key={index}>{`title: ${evaluation.title} `}</text>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  MainPage: makeSelectMainPage(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvaluation: () => dispatch(Actions.evaluationRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
