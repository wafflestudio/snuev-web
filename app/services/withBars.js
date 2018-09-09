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
import modalWrapper from './modalWrapper';

Modal.setAppElement('#app');

type Props = {
  theme: {
    navBarHeight: number,
    sideBarMaxWidth: number,
    appMaxWidth: number,
  },
  appLayout: Map<string, any>,
  showSideBar: boolean,
  theme: any,
};

const SearchFilterModal = styled(modalWrapper)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, .10);
  }

  &__content {
    border: none;
    top: ${(props: Props) => props.theme.navBarHeight}px;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    margin-right: -50%;
    position: relative;
    ${media.phone`
      top: ${(props: Props) => props.theme.mobileNavBarHeight}px;
    `}

    &:focus {
      outline: none;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  ${media.tablet`
    margin: 0 auto;
  `}
  ${media.phone`
    margin: 0;
  `}
`;

const MainContent = styled.div`
  height: 100%;
  padding-top: ${(props: Props) => props.theme.navBarHeight}px;
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

export default (Component: React.ComponentType<Props>) => connect(mapStateToProps)(
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
