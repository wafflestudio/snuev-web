// @flow

import * as React from 'react';
import Autocomplete from 'react-autocomplete';
import {
  MediumInput,
  DepartmentMenu,
  SearchIcon,
  DepartmentInputWrapper,
  DepartmentItemWrapper,
} from './index.style';

type Department = {
  id: string,
  name: string,
};

type Props = {
  departments: [Department],
  selectedDepartment: ?Department,
  onSelectDepartment: (Department) => void,
};

type State = {
  query: string,
};

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
      <Autocomplete
        wrapperStyle={{ display: 'block' }}
        renderInput={(({ ref, ...props }: any) => (
          <DepartmentInputWrapper>
            <MediumInput innerRef={ref} {...props} />
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
    );
  }
}
