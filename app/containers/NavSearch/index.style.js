import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: ${(props) => props.theme.fontSize.body1}px;

  &:focus {
    outline: none;
  }
`;

export const AutoCompleteMenu = styled.div`
  background-color: white;
  border: solid 1px #ccc;
  position: relative;
  margin-left: -35px;
  margin-right: -45px;
  max-height: 300px;
  overflow-y: auto;
`;

export const AutoCompleteItem = styled.div.attrs({
})`
  padding: 5px 10px;
  background-color: ${({ active }) => active ? '#eee' : 'white'};
`;
