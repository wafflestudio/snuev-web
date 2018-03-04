// @flow
import React from 'react';
import Helmet from 'react-helmet';
import messages from './messages';
import {
  Background,
  Logo,
  WaitingText,
  WebMailText,
  ReturnButton,
  ReturnText,
  ReturnLink,
} from './index.style';

export default () => (
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
      <br />
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
