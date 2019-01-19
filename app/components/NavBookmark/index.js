// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import { Creators as Actions } from '../../global/reducer';
import { makeSelectBookmarkedLectures, makeSelectDepartments } from '../../global/selectors';

import {
  Background,
  Wrapper,
  LectureWrapper,
  LectureTitle,
  LectureBasicInfoWrapper,
  LectureBasicInfo,
  Dot,
} from './index.style';

type Props = {
  bookmarkedLectures: Object,
  departments: Map<string, any>,
  hideBookmark: () => void,
};

class NavBookmark extends React.PureComponent<Props> { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { bookmarkedLectures } = this.props;
    return (
      <Background>
        {bookmarkedLectures &&
          <Wrapper>
            {bookmarkedLectures.map((lecture: Object, index: number) => (
              <LectureWrapper key={index} to={`/lectures/${lecture.get('id')}`} onClick={this.props.hideBookmark}>
                <LectureTitle>
                  {lecture.getIn(['course', 'name'])}
                </LectureTitle>
                <LectureBasicInfoWrapper>
                  <LectureBasicInfo>{lecture.getIn(['course', 'department', 'name'])}</LectureBasicInfo>
                  <Dot />
                  <LectureBasicInfo>{lecture.getIn(['course', 'targetGrade'])}</LectureBasicInfo>
                  <Dot />
                  <LectureBasicInfo>{lecture.getIn(['professor', 'name'])} 교수</LectureBasicInfo>
                </LectureBasicInfoWrapper>
              </LectureWrapper>
            ))
            }
          </Wrapper>
        }
      </Background>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  bookmarkedLectures: makeSelectBookmarkedLectures(),
  departments: makeSelectDepartments(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  hideBookmark: () => dispatch(Actions.hideBookmark()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBookmark);
