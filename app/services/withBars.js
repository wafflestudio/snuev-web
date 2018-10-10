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
import { media, typo } from '../style-utils';
import modalWrapper from './modalWrapper';
import Toast from '../components/Toast';
import DeleteButtonImage from '../images/btn-delete-primary@3x.png';

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
    top: ${(props: Props) => props.theme.navBarHeight}px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, .10);
    z-index: ${(props: Props) => props.theme.zIndex.searchFilter};
    ${media.phone`
      top: ${(props: Props) => props.theme.mobileNavBarHeight}px;
    `}
  }

  &__content {
    border: none;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    margin-right: -50%;
    position: relative;
    z-index: ${(props: Props) => props.theme.zIndex.searchFilter};
    width: 100%;

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
  min-height: 100%;
  min-height: 100vh;
  position: relative;
  padding-top: ${(props: Props) => props.theme.navBarHeight}px;
  margin-left: ${(props: Props) =>
  props.showSideBar ?
    `${props.theme.sideBarMaxWidth}px` : '0px'};
  ${media.tablet`
    margin-left: ${(props: Props) =>
  props.showSideBar ?
    `${props.theme.tabletSideBarMaxWidth}px` : '0px'};
  `}
  ${media.phone`
    padding-top: ${(props: Props) => props.theme.mobileNavBarHeight}px;
    margin-left: 0;

    .focusLecture & {
      padding-top: 60px;
    }
  `}
`;

const DeleteButton = styled.img`
  width: 20px;
  height: 20px;
  margin: auto 0;
`;

const CloseButton = ({ closeToast }: { closeToast: Function }) => (
  <DeleteButton src={DeleteButtonImage} title="Close" onClick={closeToast} />
);

const GlobalToast = styled(Toast)`
  .Toastify & {
    top: ${(props: Props) => props.theme.navBarHeight + 20}px;
    ${media.phone`
      top: ${(props: Props) => props.theme.mobileNavBarHeight + 20}px;
    `}
    &__toast {
      min-height: 60px;
      padding: 0 24px 0 20px;
      background-color: rgba(255,255,255,0.9);
      box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.08);
      ${media.phone`
        margin: 0 20px;
      `}
    }
    &__body {
      ${typo.body1}
      color: ${(props: Props) => props.theme.color.primary};
    }
  }
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
      <GlobalToast
        position="top-center"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        closeButton={<CloseButton />}
      />
    </Wrapper>
  )
);
