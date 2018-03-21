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
  searchCourses: (string) => void,
  searchLectures: (string) => void,
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

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { query } = this.state;
    if (query !== prevState.query) {
      this.props.searchCourses(query);
    }
  }

  handleSubmit = (event: Event) => {
    event.preventDefault();
    this.props.searchLectures(this.state.query);
  }

  render() {
    const courses = this.props.courses.toJS();

    return (
      <form onSubmit={this.handleSubmit}>
        <Autocomplete
          inputProps={{ id: 'search-query' }}
          value={this.state.query}
          items={courses}
          getItemValue={(course: { name: string }) => course.name}
          onChange={(event: SyntheticInputEvent<HTMLInputEvent>, query: string) => {
            this.setState({ query });
          }}
          onSelect={(query: string, course: { name: string }) => {
            this.setState({ query: course.name });
          }}
          renderItem={(course: { id: string, name: string }, isHighlighted: boolean) => (
            <AutoCompleteItem active={isHighlighted} key={course.id}>
              {course.name}
            </AutoCompleteItem>
          )}
        />
      </form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  courses: makeSelectCourses(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  searchCourses: (query: string) => dispatch(GlobalActions.searchCoursesRequest(query)),
  searchLectures: (query: string) => dispatch(GlobalActions.searchLecturesRequest(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
