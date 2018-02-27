// @flow
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Creators as Actions } from './reducer';
import messages from './messages';
import { makeSelectIsFetching, makeSelectError } from './selectors';
import {
  Background,
  SignUpCompleteForm,
  Logo,
  WaitingText,
  WebMailText,
  ReturnButton,
  ReturnText,
  ReturnLink,
} from './index.style';

export class SignUpCompletePage extends React.PureComponent<any> {
  render() {
    return (
      <Background>
        <Helmet
          title="SignUpCompletePage"
          meta={[
            { name: 'description', content: 'Description of SignUpCompletePage' },
          ]}
        />
        <Logo />
        <WaitingText>
          {messages.waiting}
        </WaitingText>
        <WebMailText>
          {messages.webMailSent}
          <br/>
          {messages.checkMail}
        </WebMailText>
        <ReturnLink to="/">
          <ReturnButton>
            <ReturnText>
              {messages.returnText}
            </ReturnText>
          </ReturnButton>
        </ReturnLink>
      </Background>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: makeSelectIsFetching(),
  error: makeSelectError(),
});

export default connect(mapStateToProps)(SignUpCompletePage);
