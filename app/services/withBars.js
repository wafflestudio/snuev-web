// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import Modal from 'react-modal';
import classNames from 'classnames';

import NavBar from '../components/NavBar';
import SearchFilter from '../components/SearchFilter';
import SideBar from '../containers/SideBar';

import {
  makeSelectAppLayout,
} from '../global/selectors';
import { media } from '../style-utils';

Modal.setAppElement('#app');

type Props = {
  theme: {
    navBarHeight: number,
    sideBarMaxWidth: number,
    appMaxWidth: number,
  },
  appLayout: Map<string, any>,
};

const SearchFilterModal = (props: Props) => (
  <Modal
    {...props}
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, .10)',
      },
      content: {
        border: 'none',
        top: '70px',
        right: 'auto',
        bottom: 'auto',
        left: '0',
        width: '100%',
        marginRight: '-50%',
        position: 'fixed',
      },
    }}
    appElement={document.getElementById('app')}
  />
);

const Wrapper = styled.div`
  max-width: ${(props: Props) => props.theme.appMaxWidth}px;
  width: 100%;
  margin: 0 auto;
  ${media.desktop`
    margin: 0 30px;
  `}
  ${media.phone`
    margin: 0;
  `}
`;

const MainContent = styled.div`
  padding-top: ${(props: Props) => props.theme.navBarHeight + 30}px;
  margin-left: ${(props: Props) =>
    props.showSideBar ?
      `${props.theme.sideBarMaxWidth + 60}px` : '0px'};
  ${media.tablet`
    margin-left: ${(props: Props) =>
      props.showSideBar ?
        `${props.theme.tabletSideBarMaxWidth + 48}px` : '0px'};
  `}
  ${media.phone`
    padding-top: ${(props: Props) => props.theme.mobileNavBarHeight + 30}px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 0;

    .focusLecture & {
      padding-top: 60px;
    }
  `}
`;

const mapStateToProps = createStructuredSelector({
  appLayout: makeSelectAppLayout(),
});

export default (Component: React.Component) => connect(mapStateToProps)(
  (props: Props) => (
    <Wrapper className={classNames({ focusLecture: props.appLayout.get('focusLecture') })}>
      <NavBar />
      {props.appLayout.get('showSideBar') &&
        <SideBar />
      }
      <SearchFilterModal
        isOpen={props.appLayout.get('showSearchFilter')}
      >
        <SearchFilter />
      </SearchFilterModal>
      <MainContent showSideBar={props.appLayout.get('showSideBar')}>
        <Component {...props} />
      </MainContent>
    </Wrapper>
  )
);
