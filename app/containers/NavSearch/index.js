// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Autocomplete from 'react-autocomplete';
import { createStructuredSelector } from 'reselect';
import qs from 'query-string';

import { Creators as GlobalActions } from '../../global/reducer';
import {
  makeSelectCourses, makeSelectGlobal,
} from '../../global/selectors';
import {
  SearchInput,
  AutoCompleteMenu,
  AutoCompleteItem,
} from './index.style';

type Props = {
  courses: Map<string, any>,
  searchCourses: (string) => void,
  searchLectures: (string) => void,
  location: { search: string },
  blurLecture: () => void,
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
    (this: any).handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const search = qs.parse(this.props.location.search);
    if (search.q && !this.props.global.getIn(['lectures', 'performedInitialSearch'])) {
      this.setState({ query: search.q });
      this.props.searchLectures(search.q);
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { query } = this.state;
    if (query !== prevState.query) {
      this.props.searchCourses(query);
    }
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.props.searchLectures(this.state.query);
    this.props.blurLecture();
  }

  render() {
    const { searchCourses, searchLectures, blurLecture } = this.props;
    const courses = this.props.courses.toJS();

    return (
      <form onSubmit={this.handleSubmit}>
        <Autocomplete
          inputProps={{
            id: 'search-query',
            onFocus: () => searchCourses(this.state.query),
          }}
          wrapperStyle={{ display: 'block' }}
          renderInput={(({ ref, ...props }: { ref: any }) => <SearchInput innerRef={ref} {...props} />)} // eslint-disable-line react/no-unused-prop-types
          renderMenu={((items: Array<any>) => <AutoCompleteMenu>{items}</AutoCompleteMenu>)}
          value={this.state.query}
          items={courses}
          getItemValue={(course: { name: string }) => course.name}
          onChange={(event: Event, query: string) => {
            this.setState({ query });
          }}
          onSelect={(query: string, course: { name: string }) => {
            this.setState({ query: course.name });
            searchLectures(course.name);
            blurLecture();
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
  global: makeSelectGlobal(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  searchCourses: (query: string) => dispatch(GlobalActions.searchCoursesRequest(query)),
  searchLectures: (query: string) => dispatch(GlobalActions.searchLecturesRequest(query)),
  blurLecture: () => dispatch(GlobalActions.blurLecture()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSearch));
