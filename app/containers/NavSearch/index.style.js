import styled from 'styled-components';

export const AutoCompleteItem = styled.div.attrs({
})`
  background-color: ${({ active }) => active ? '#eee' : 'white'};
`;
