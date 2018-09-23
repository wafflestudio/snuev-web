// @flow
import styled from 'styled-components';

type Props = {
  theme: any,
  active: boolean,
};

export const SearchForm = styled.form`
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: ${(props: Props) => props.theme.fontSize.body1}px;

  &:focus {
    outline: none;
  }
`;

export const AutoCompleteMenu = styled.div`
  background-color: ${(props: Props) => props.theme.color.white};
  border: solid 1px #ccc;
  position: relative;
  margin-left: -35px;
  margin-right: -37.5px;
  max-height: 300px;
  overflow-y: auto;
  z-index: ${(props: Props) => props.theme.zIndex.navBar + 1};
`;

export const AutoCompleteItem = styled.div.attrs({
})`
  padding: 5px 10px;
  background-color: ${(props: Props) => props.active ? '#eee' : props.theme.color.white};
`;
