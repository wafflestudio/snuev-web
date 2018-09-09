import styled from 'styled-components';

import RemoveBookmarkNormal from '../../images/ic-removebookmark-normal.png';
import RemoveBookmarkSelected from '../../images/ic-removebookmark-selected.png';

export const RemoveBookmarkButton = styled.button`
  width: 20px;
  height: 20px;
  background: url(${(props) => props.marked ? RemoveBookmarkSelected : RemoveBookmarkNormal}) no-repeat 50% 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
