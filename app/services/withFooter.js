// @flow

import * as React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
`;

const ComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  position:absolute;
  bottom:0;
`;

export default (accent: boolean) => (Component: React.ComponentType<{}>) => (props: {}) => (
  <Wrapper>
    <ComponentWrapper>
      <Component {...props} />
    </ComponentWrapper>
    <FooterWrapper>
      <Footer accent={accent} />
    </FooterWrapper>
  </Wrapper>
);
