// @flow

import * as React from 'react';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';
import type { Theme } from '../../theme';
import { media } from '../../style-utils';

import SearchIconImage from '../../images/ic-search.png';

type Department = {
  id: string,
  name: string,
};

type Props = {
  departments: [Department],
  selectedDepartment: ?Department,
  onSelectDepartment: (Department) => void,
  error: string,
};

type State = {
  query: string,
};

const Wrapper = styled.div`
  margin-top: 30px;
  ${media.phone`
    margin-top: 0px;
  `}
`;

const DepartmentInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DepartmentMenu = styled.div`
  border: solid 1px #ccc;
  z-index: 1;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  position: absolute;
  width: 300px;
  height: 180px;
  overflow-y: auto;
`;

const DepartmentItemWrapper = styled.button`
  width: 100%;
  line-height: 36px;
  background-color: ${(props: { theme: Theme, highlighted: boolean }) => props.highlighted ? props.theme.color.focus3 : props.theme.color.white};
  padding: 0 20px 0;
  text-align: left;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSize.body2}px;
  &:hover {
    background-color: ${(props: { theme: Theme }) => props.highlighted ? props.theme.color.focus3 : props.theme.color.hover3}
  };
`;

const Input = styled.input`
  width: 250px;
  height: 44px;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border-bottom: solid 1px ${(props: { theme: Theme }) => props.theme.color.lightGray};
  margin-top: 20px;
  &:focus { outline: none; };
  ${media.phone`
    width: 215px;
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 0px;
  `}
`;

const SearchIconWrapper = styled.div`
  width: 44px;
  height 44px;
  display: flex;
  flex-direction: column;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border-bottom: solid 1px ${(props: { theme: Theme }) => props.theme.color.lightGray};
  margin-top: 20px;
  ${media.phone`
    margin-top: 10px;
  `}
`;

const SearchIconFrame = styled.img`
  width: 30px;
  height: 30px;
`;

export const SearchIcon = (props: Props) =>
  <SearchIconWrapper>
    <SearchIconFrame src={SearchIconImage} {...props} />
  </SearchIconWrapper>;

const ErrorMessage = styled.p`
  height: 16px;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  color: ${(props: { theme: Theme }) => props.theme.color.error}
`;

export default class DepartmentInput extends React.PureComponent<Props, State> { // eslint-disable-line react/prefer-stateless-function
  constructor(props: Props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  render() {
    const { departments, onSelectDepartment } = this.props;
    return (
      <Wrapper>
        <Autocomplete
          wrapperStyle={{ display: 'block' }}
          renderInput={(({ ref, ...props }: any) => (
            <DepartmentInputWrapper>
              <Input innerRef={ref} {...props} />
              <SearchIcon />
            </DepartmentInputWrapper>
          ))}
          renderMenu={((items: Array<any>) => <DepartmentMenu>{items}</DepartmentMenu>)}
          value={this.state.query}
          items={departments.filter((department: Department) => department.name.includes(this.state.query) && department.name)}
          getItemValue={(department: Department) => department.name}
          onChange={(event: Event, query: string) => {
            this.setState({ query });
          }}
          onSelect={(query: string, department: Department) => {
            onSelectDepartment(department);
            this.setState({ query: department.name });
          }}
          renderItem={(department: Department, isHighlighted: boolean) => (
            <DepartmentItemWrapper key={department.id} highlighted={isHighlighted}>
              {department.name}
            </DepartmentItemWrapper>
          )}
        />
        <ErrorMessage>
          {this.props.error}
        </ErrorMessage>
      </Wrapper>
    );
  }
}
