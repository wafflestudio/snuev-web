// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import ReactAutoComplete from 'react-autocomplete';

import { Creators as Actions } from '../../global/reducer';
import { makeSelectSearchFilter, makeSelectDepartments } from '../../global/selectors';

import {
  Wrapper,
  Header,
  HeaderText,
  ResetButton,
  FiltersWrapper,
  FilterWrapper,
  FilterHeader,
  FilterElement,
  FilterElementSelected,
  DepartmentSearchWrapper,
  DepartmentSearchIcon,
  SelectedDepartmentWrapper,
  SelectedDepartmentText,
  DeleteButton,
  AutoCompleteStyle,
  AutoCompleteItemStyle,
  SearchInput,
} from './index.style';
import messages from './messages';

type Props = {
  filter: Map<string, any>,
  departments: Map<string, any>,
  setSearchFilter: (division: string, selection: string) => void,
  removeSearchFilter: (division: string, selection: string) => void,
  resetSearchFilter: () => void,
  setDepartmentFilter: (department: Object) => void,
  removeDepartmentFilter: (department: any) => void,
};

type State = {
  query: string,
};

class SearchFilter extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      query: '',
    };
    (this: any).handleResetFiltering = this.handleResetFiltering.bind(this);
    (this: any).handleFilterDepartment = this.handleFilterDepartment.bind(this);
    (this: any).handleRemoveDepartment = this.handleRemoveDepartment.bind(this);
  }

  handleResetFiltering(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.resetSearchFilter();
  }

  handleFilterDepartment(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { query } = this.state;
    const department = this.props.departments.find((singleDepartment: Object) => singleDepartment.get('name') === query);
    if (department) {
      this.props.setDepartmentFilter(department);
    }
    this.setState({ query: '' });
  }

  handleRemoveDepartment(departmentName: any) {
    const department = this.props.departments.find((singleDepartment: Object) => singleDepartment.get('name') === departmentName);
    this.props.removeDepartmentFilter(department);
  }

  render() {
    const { filter, setSearchFilter, removeSearchFilter } = this.props;
    const selectedDepartments = filter.get('departments').toJS();
    const academicYear = filter.get('academicYear').toJS();
    const credit = filter.get('credit').toJS();
    const courseClassification = filter.get('courseClassification').toJS();
    const academicFoundations = filter.get('academicFoundations').toJS();
    const worldsOfKnowledge = filter.get('worldsOfKnowledge').toJS();
    const generalEducationElectives = filter.get('generalEducationElectives').toJS();

    if (!filter) {
      return (
        <div>
          no filter!
        </div>
      );
    }
    return (
      <Wrapper>
        <Header>
          <HeaderText>상세정보 검색</HeaderText>
          <ResetButton onClick={this.handleResetFiltering} />
        </Header>
        <FiltersWrapper>
          <FilterWrapper>
            <FilterHeader>학과명</FilterHeader>
            <DepartmentSearchWrapper onSubmit={this.handleFilterDepartment}>
              <ReactAutoComplete
                items={this.props.departments.toJS()}
                renderInput={(({ ref, ...props }: { ref: any }) => <SearchInput innerRef={ref} {...props} />)}
                shouldItemRender={(item: Object, value: string) => item.name.indexOf(value) > -1}
                getItemValue={(item: Object) => item.name}
                renderItem={(item: Object, highlighted: boolean) =>
                  <div
                    key={item.id}
                    style={AutoCompleteItemStyle(highlighted)}
                  >
                    {item.name}
                  </div>
                }
                value={this.state.query}
                onChange={(event: Event) => this.setState({ query: event.target.value })}
                onSelect={(value: string) => this.setState({ query: value })}
                inputProps={{
                  placeholder: '학과명 검색',
                  style: AutoCompleteStyle,
                }}
              />
              <DepartmentSearchIcon onClick={this.handleFilterDepartment} />
            </DepartmentSearchWrapper>
            {!!selectedDepartments &&
              Object.values(selectedDepartments).map((department: any, index: number) => (
                <SelectedDepartmentWrapper key={index}>
                  <SelectedDepartmentText>
                    {department}
                  </SelectedDepartmentText>
                  <DeleteButton onClick={() => this.handleRemoveDepartment(department)} />
                </SelectedDepartmentWrapper>
              ))
            }
          </FilterWrapper>
          <FilterWrapper>
            <FilterHeader>학년</FilterHeader>
            {!!academicYear &&
              Object.keys(academicYear).map((key: string, index: number) => (
                academicYear[key] ?
                  <FilterElementSelected
                    key={index}
                    onClick={() => removeSearchFilter('academicYear', key)}
                  >
                    {messages.academicYear[key]}
                  </FilterElementSelected> :
                  <FilterElement
                    key={index}
                    onClick={() => setSearchFilter('academicYear', key)}
                  >
                    {messages.academicYear[key]}
                  </FilterElement>
                ))
            }
          </FilterWrapper>
          <FilterWrapper>
            <FilterHeader>학점</FilterHeader>
            {!!credit &&
              Object.keys(credit).map((key: string, index: number) => (
                credit[key] ?
                  <FilterElementSelected
                    key={index}
                    onClick={() => removeSearchFilter('credit', key)}
                  >
                    {messages.credit[key]}
                  </FilterElementSelected> :
                  <FilterElement
                    key={index}
                    onClick={() => setSearchFilter('credit', key)}
                  >
                    {messages.credit[key]}
                  </FilterElement>
              ))
            }
          </FilterWrapper>
          <FilterWrapper>
            <FilterHeader>구분</FilterHeader>
            {!!courseClassification &&
              Object.keys(courseClassification).map((key: string, index: number) => (
                courseClassification[key] ?
                  <FilterElementSelected
                    key={index}
                    onClick={() => removeSearchFilter('courseClassification', key)}
                  >
                    {messages.courseClassification[key]}
                  </FilterElementSelected> :
                  <FilterElement
                    key={index}
                    onClick={() => setSearchFilter('courseClassification', key)}
                  >
                    {messages.courseClassification[key]}
                  </FilterElement>
              ))
            }
          </FilterWrapper>
          <FilterWrapper>
            <FilterHeader>학문의 기초</FilterHeader>
            {!!academicFoundations &&
              Object.keys(academicFoundations).map((key: string, index: number) => (
                academicFoundations[key] ?
                  <FilterElementSelected
                    key={index}
                    onClick={() => removeSearchFilter('academicFoundations', key)}
                  >
                    {messages.academicFoundations[key]}
                  </FilterElementSelected> :
                  <FilterElement
                    key={index}
                    onClick={() => setSearchFilter('academicFoundations', key)}
                  >
                    {messages.academicFoundations[key]}
                  </FilterElement>
              ))
            }
          </FilterWrapper>
          <FilterWrapper>
            <FilterHeader>학문의 세계</FilterHeader>
            {!!worldsOfKnowledge &&
              Object.keys(worldsOfKnowledge).map((key: string, index: number) => (
                worldsOfKnowledge[key] ?
                  <FilterElementSelected
                    key={index}
                    onClick={() => removeSearchFilter('worldsOfKnowledge', key)}
                  >
                    {messages.worldsOfKnowledge[key]}
                  </FilterElementSelected> :
                  <FilterElement
                    key={index}
                    onClick={() => setSearchFilter('worldsOfKnowledge', key)}
                  >
                    {messages.worldsOfKnowledge[key]}
                  </FilterElement>
              ))
            }
          </FilterWrapper>
          <FilterWrapper>
            <FilterHeader>선택교양</FilterHeader>
            {!!generalEducationElectives &&
              Object.keys(generalEducationElectives).map((key: string, index: number) => (
                generalEducationElectives[key] ?
                  <FilterElementSelected
                    key={index}
                    onClick={() => removeSearchFilter('generalEducationElectives', key)}
                  >
                    {messages.generalEducationElectives[key]}
                  </FilterElementSelected> :
                  <FilterElement
                    key={index}
                    onClick={() => setSearchFilter('generalEducationElectives', key)}
                  >
                    {messages.generalEducationElectives[key]}
                  </FilterElement>
              ))
            }
          </FilterWrapper>
        </FiltersWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  filter: makeSelectSearchFilter(),
  departments: makeSelectDepartments(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  setSearchFilter: (division: string, selection: string) => dispatch(Actions.setSearchFilter(division, selection)),
  removeSearchFilter: (division: string, selection: string) => dispatch(Actions.removeSearchFilter(division, selection)),
  resetSearchFilter: () => dispatch(Actions.resetSearchFilter()),
  setDepartmentFilter: (department: Object) => dispatch(Actions.setDepartmentFilter(department)),
  removeDepartmentFilter: (department: Object) => dispatch(Actions.removeDepartmentFilter(department)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
