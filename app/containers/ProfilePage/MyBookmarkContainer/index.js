// @flow

import * as React from 'react';
import { Map } from 'immutable';
import RemoveBookmark from '../../../components/RemoveBookmark';
import {
  Background,
  Wrapper,
  LectureWrapper,
  LectureTitle,
  BookmarkWrapper,
  LectureBasicInfoWrapper,
  LectureBasicInfo,
  Dot,
  ScoreWrapper,
  Score,
  ScoreLabel,
} from './index.style';

type Props = {
  bookmarkedLectures: Object,
  bookmarks: Map<string, any>,
  bookmark: (id: string) => void,
  deleteBookmark: (id: string) => void,
};

export class MyBookmarkContainer extends React.PureComponent<Props> {
  render() {
    const {
      bookmarkedLectures,
      bookmarks,
      bookmark,
      deleteBookmark,
    } = this.props;
    if (!bookmarkedLectures) {
      return (
        <div>
        </div>
      );
    }
    return (
      <Background>
        {bookmarkedLectures &&
          bookmarkedLectures.map((lecture: Object, index: number) => (
            <Wrapper key={index}>
              <BookmarkWrapper>
                <RemoveBookmark
                  lecture={lecture}
                  isFetching={bookmarks.getIn([lecture.get('id'), 'isFetching'])}
                  error={bookmarks.getIn([lecture.get('id'), 'error'])}
                  onPressWhenMarked={bookmark}
                  onPressWhenNotMarked={deleteBookmark}
                />
              </BookmarkWrapper>
              <LectureWrapper>
                <LectureTitle>
                  {lecture.get('name')}
                </LectureTitle>
                <LectureBasicInfoWrapper>
                  <LectureBasicInfo>{lecture.getIn(['course', 'department', 'name'])}</LectureBasicInfo>
                  <Dot />
                  <LectureBasicInfo>{lecture.getIn(['course', 'targetGrade'])}</LectureBasicInfo>
                  <Dot />
                  <LectureBasicInfo>{lecture.getIn(['professor', 'name'])}</LectureBasicInfo>
                </LectureBasicInfoWrapper>
                <ScoreWrapper>
                  <Score>{lecture.get('score')}</Score>
                  <ScoreLabel>/총점</ScoreLabel>
                  <Score>{lecture.get('easiness')}</Score>
                  <ScoreLabel>/난이도 쉬움</ScoreLabel>
                  <Score>{lecture.get('grading')}</Score>
                  <ScoreLabel>/학점 잘 줌</ScoreLabel>
                </ScoreWrapper>
              </LectureWrapper>
            </Wrapper>
          ))
        }
      </Background>
    );
  }
}

export default MyBookmarkContainer;
