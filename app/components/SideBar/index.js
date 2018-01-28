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
  grid-area: sidebar;
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
