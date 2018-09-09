// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { List, Map } from 'immutable';
import InfiniteScroll from 'react-infinite-scroller';
import { ClipLoader } from 'react-spinners';

import { Creators as Actions } from './reducer';
import messages from './messages';

import Bookmark from '../../components/Bookmark';
import EvaluationForm from './EvaluationForm';
import Evaluation from './Evaluation';
import { makeSelectUser, makeSelectBookmarks, makeSelectVotes } from '../../global/selectors';
import { Creators as GlobalActions } from '../../global/reducer';
import {
  makeSelectPage,
  makeSelectLecture,
  makeSelectEvaluations,
} from './selectors';
import {
  EvaluationsWrapper,
  Background,
  EvaluationFormModal,
  LectureName,
  LectureScores,
  LectureScore,
  LectureSummary,
  LectureInfoText,
  EvaluationsHeader,
  LeaveReviewButton,
  CloseIcon,
  LectureInfo,
  LectureBasicInfo,
  LectureScoreLabel,
  LectureScoreValue,
  LectureWrapper,
  BackToList,
  PageWrapper,
  LectureNameBookmarkWrapper,
  NoEvaluationWrapper,
  EmptyLectureIcon,
  EmptyLectureWrapper,
  EmptyLectureText,
  EmptyLectureToLoginWrapper,
  EmptyLectureToLoginText,
  IconRightImage,
} from './index.style';
import withBars from '../../services/withBars';

type Props = {
  user: Map<string, any>,
  page: Map<string, any>,
  lecture: Map<string, any>,
  evaluations: List<Map<string, any>>,
  params: { lectureId: string },
  bookmarks: Map<string, any>,
  votes: Map<string, any>,
  getLecture: (id: string) => void,
  getEvaluations: (lectureId: string, page: number) => void,
  openEvaluationForm: () => void,
  closeEvaluationForm: () => void,
  bookmark: (id: string) => void,
  deleteBookmark: (id: string) => void,
  vote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
  deleteVote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
  focusLecture: () => void,
  blurLecture: () => void,
};

export class LecturePage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).loadEvaluations = this.loadEvaluations.bind(this);
  }

  componentDidMount() {
    this.props.getLecture(this.props.params.lectureId);
    this.props.focusLecture();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.params.lectureId !== this.props.params.lectureId) {
      this.props.getLecture(this.props.params.lectureId);
      this.props.focusLecture();
    }
  }

  loadEvaluations(page: number) {
    if (this.props.user && this.props.user.get('isConfirmed')) {
      this.props.getEvaluations(this.props.params.lectureId, page);
    }
  }

  render() {
    const {
      user,
      page,
      lecture,
      evaluations,
      bookmarks,
      votes,
    } = this.props;
    if (page.getIn(['lecture', 'isFetching']) || page.getIn(['lecture', 'error']) || !lecture) {
      return (
        <Background>
          <ClipLoader />
        </Background>
      );
    }
    return (
      <PageWrapper>
        <Background>
          <Helmet
            title="LecturePage"
            meta={[
              { name: 'description', content: 'Description of Lecture Page' },
            ]}
          />
          <EvaluationFormModal
            isOpen={page.get('evaluationFormOpen')}
          >
            <EvaluationForm />
            <CloseIcon onClick={this.props.closeEvaluationForm} />
          </EvaluationFormModal>
          <LectureWrapper>
            <BackToList onClick={this.props.blurLecture}>{messages.backToList}</BackToList>
            <LectureNameBookmarkWrapper>
              <LectureName>
                {lecture.getIn(['course', 'name'])}
              </LectureName>
              <Bookmark
                lecture={lecture}
                onPressWhenMarked={this.props.deleteBookmark}
                onPressWhenNotMarked={this.props.bookmark}
                isFetching={bookmarks.getIn([lecture.get('id'), 'isFetching'])}
                error={bookmarks.getIn([lecture.get('id'), 'error'])}
              />
            </LectureNameBookmarkWrapper>
            <LectureInfo>
              <LectureBasicInfo>
                <LectureInfoText>
                  {messages.professor(lecture.get('professor').get('name'))}
                </LectureInfoText>
                <LectureInfoText>
                  {lecture.getIn(['course', 'department', 'name'])}
                </LectureInfoText>
                <LectureInfoText>
                  {lecture.getIn(['course', 'targetGrade'])}
                </LectureInfoText>
              </LectureBasicInfo>
              <LectureScores>
                <LectureScore>
                  <LectureScoreLabel>{messages.score}</LectureScoreLabel>
                  <LectureScoreValue>{lecture.get('score').toFixed(1)}</LectureScoreValue>
                </LectureScore>
                <LectureScore>
                  <LectureScoreLabel>{messages.easiness}</LectureScoreLabel>
                  <LectureScoreValue>{lecture.get('easiness').toFixed(1)}</LectureScoreValue>
                </LectureScore>
                <LectureScore>
                  <LectureScoreLabel>{messages.grading}</LectureScoreLabel>
                  <LectureScoreValue>{lecture.get('grading').toFixed(1)}</LectureScoreValue>
                </LectureScore>
              </LectureScores>
            </LectureInfo>
            <LectureSummary>
              영어로 쓰인 대중소설을 선별해서 읽음으로써 영어 읽기 능력을 향상시키고 영어권 문화에 대한 이해를 확장한다. 추리소설, 과학소설, 판타지, 아동/청소년 문학 등 다양한 대중문학 장르가
              다루어질 수 있다.
            </LectureSummary>
          </LectureWrapper>
          <div>
            <EvaluationsWrapper>
              <EvaluationsHeader>
                {messages.evaluation.header}
              </EvaluationsHeader>
              {(user && user.get('isConfirmed')) &&
              <LeaveReviewButton onClick={this.props.openEvaluationForm}>
                {messages.writeReview}
              </LeaveReviewButton>
              }
            </EvaluationsWrapper>
          </div>
          {!(this.props.evaluations && this.props.evaluations.size > 0) &&
          <NoEvaluationWrapper hasUser={this.props.user}>
            <EmptyLectureWrapper>
              <EmptyLectureIcon />
              <EmptyLectureText>
                강의평이 아직 없습니다.
                첫 강의평을 작성해보세요!
              </EmptyLectureText>
              {!this.props.user &&
              <EmptyLectureToLoginWrapper to="/sign_in">
                <EmptyLectureToLoginText>
                  로그인하기
                </EmptyLectureToLoginText>
                <IconRightImage />
              </EmptyLectureToLoginWrapper>
              }
            </EmptyLectureWrapper>
          </NoEvaluationWrapper>
          }
          <InfiniteScroll
            pageStart={0}
            hasMore={page.getIn(['evaluations', 'hasMore'])}
            loadMore={this.loadEvaluations}
          >
            <div>
              {evaluations &&
              evaluations.map((evaluation: Object, index: number) => (
                <div key={index}>
                  <Evaluation
                    lecture={lecture}
                    evaluation={evaluation}
                    votes={votes}
                    vote={this.props.vote}
                    deleteVote={this.props.deleteVote}
                  />
                </div>
              ))
              }
            </div>
          </InfiniteScroll>
        </Background>
      </PageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  page: makeSelectPage(),
  lecture: makeSelectLecture(),
  evaluations: makeSelectEvaluations(),
  bookmarks: makeSelectBookmarks(),
  votes: makeSelectVotes(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  getLecture: (id: string) => dispatch(Actions.getLectureRequest(id)),
  getEvaluations: (id: string, page: number) => dispatch(Actions.getEvaluationsRequest(id, page)),
  openEvaluationForm: () => dispatch(Actions.openEvaluationForm()),
  closeEvaluationForm: () => dispatch(Actions.closeEvaluationForm()),
  bookmark: (id: number) => dispatch(GlobalActions.bookmarkRequest(id)),
  deleteBookmark: (id: number) => dispatch(GlobalActions.deleteBookmarkRequest(id)),
  vote: (lectureId: number, evaluationId: number, isUpvote: boolean) => dispatch(GlobalActions.voteRequest(lectureId, evaluationId, isUpvote)),
  deleteVote: (lectureId: number, evaluationId: number, isUpvote: boolean) => dispatch(GlobalActions.deleteVoteRequest(lectureId, evaluationId, isUpvote)),
  focusLecture: () => dispatch(GlobalActions.focusLecture()),
  blurLecture: () => dispatch(GlobalActions.blurLecture()),
});

export default withBars(connect(mapStateToProps, mapDispatchToProps)(LecturePage));
