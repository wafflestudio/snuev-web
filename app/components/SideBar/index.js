/**
*
* SideBar
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const SideBarWrapper = styled.aside`
  width: 250px;
  min-width: 250px;
  height: 100%;
  border-right: solid 1px #cccccc;
`;

function SideBar() {
  return (
    <SideBarWrapper>
      <FormattedMessage {...messages.header} />
    </SideBarWrapper>
  );
}

SideBar.propTypes = {

};

export default SideBar;
