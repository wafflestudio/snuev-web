// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { createStructuredSelector } from 'reselect';

import { Creators as GlobalActions } from '../../global/reducer';
import {
  makeSelectCourses,
} from '../../global/selectors';
import { AutoCompleteItem } from './index.style';

type Props = {
  courses: Map<string, any>,
};

type State = {
  query: string,
};

class NavSearch extends React.PureComponent<Props, State> { // eslint-disable-line react/prefer-stateless-function
  constructor(props: Props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  componentDidUpdate(prevProps: Object, prevState: Object) {
    const { query } = this.state;
    if (query !== prevState.query) {
      this.props.searchCourses(query);
    }
  }

  render() {
    const courses = this.props.courses ? this.props.courses.toJS() : [];

    return (
      <Autocomplete
        inputProps={{ id: 'search-query' }}
        value={this.state.query}
        items={courses}
        getItemValue={(course: Map<string, any>) => course.name}
        onChange={(event: SyntheticInputEvent<HTMLInputEvent>, query: string) => {
          this.setState({ query });
        }}
        onSelect={(query: string, course: Map<string, any>) => {
          this.setState({ query: course.name });
        }}
        renderItem={(course: Map<string, any>, isHighlighted: boolean) => (
          <AutoCompleteItem active={isHighlighted} key={course.id}>
            {course.name}
          </AutoCompleteItem>
        )}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  courses: makeSelectCourses(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  searchCourses: (query: string) => dispatch(GlobalActions.searchCoursesRequest(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
