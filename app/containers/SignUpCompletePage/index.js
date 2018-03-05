// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl, FormattedHTMLMessage, IntlProvider } from 'react-intl';
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

const SignUpCompletePage = () => (
  <IntlProvider messages={messages}>
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
        <FormattedHTMLMessage id="webmailSent" />
      </WebMailText>
      <ReturnLink to="/">
        <ReturnButton>
          <ReturnText>
            {messages.returnText}
          </ReturnText>
        </ReturnButton>
      </ReturnLink>
    </Background>
  </IntlProvider>
);

export default injectIntl(SignUpCompletePage);
