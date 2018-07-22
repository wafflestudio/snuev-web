import styled from 'styled-components';

import AddBookmarkNormal from '../../images/ic-addbookmark-normal.png';
import AddBookmarkSelected from '../../images/ic-addbookmark-selected.png';

export const AddBookmarkButton = styled.button`
  width: 20px;
  height: 20px;
  background: url(${(props) => props.marked ? AddBookmarkSelected : AddBookmarkNormal}) no-repeat 50% 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
