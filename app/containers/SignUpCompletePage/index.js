// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl, FormattedHTMLMessage, IntlProvider } from 'react-intl';
import messages from './messages';
import {
  Background,
  InnerContainer,
  EmailIcon,
  TitleText,
  BodyText,
  ContentContainer,
  EmailContainer,
  EmailText,
  ReturnButton,
  ReturnText,
} from './index.style';
import DottedLine from '../../components/DottedLine';

const SignUpCompletePage = () => (
  <IntlProvider messages={messages}>
    <Background>
      <Helmet
        title="SignUpCompletePage"
        meta={[
          { name: 'description', content: 'Description of SignUpCompletePage' },
        ]}
      />
      <InnerContainer>
        <DottedLine />
        <ContentContainer>
          <EmailIcon />
          <TitleText>
            <FormattedHTMLMessage id="title" />
          </TitleText>
          <BodyText>
            <FormattedHTMLMessage id="body" />
          </BodyText>
          <EmailContainer>
            <EmailText>
              example@my.snu.ac.kr
            </EmailText>
          </EmailContainer>
        </ContentContainer>
        <DottedLine />
        <ReturnButton to="/">
          <ReturnText>
            <FormattedHTMLMessage id="back" />
          </ReturnText>
        </ReturnButton>
      </InnerContainer>
    </Background>
  </IntlProvider>
);

export default injectIntl(SignUpCompletePage);
