import styled from 'styled-components';

export const AutoCompleteMenu = styled.div`
  background-color: white;
  border: solid 1px #ccc;
  z-index: 10;
  position: relative;
`;

export const AutoCompleteItem = styled.div.attrs({
})`
  padding: 5px 10px;
  background-color: ${({ active }) => active ? '#eee' : 'white'};
`;
