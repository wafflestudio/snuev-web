// @flow
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { List, Map } from 'immutable';
import InfiniteScroll from 'react-infinite-scroller';
import { ClipLoader } from 'react-spinners';
import { FormattedHTMLMessage, IntlProvider } from 'react-intl';

import { Creators as Actions } from './reducer';
import messages from './messages';

import Bookmark from '../../components/Bookmark';
import EvaluationForm from './EvaluationForm';
import Evaluation from './Evaluation';
import { makeSelectBookmarks, makeSelectUser, makeSelectVotes } from '../../global/selectors';
import { Creators as GlobalActions } from '../../global/reducer';
import { makeSelectEvaluations, makeSelectLecture, makeSelectPage } from './selectors';
import {
  Background,
  BackToList,
  CloseIcon,
  EmptyLectureIcon,
  EmptyLectureText,
  EmptyLectureToLoginText,
  EmptyLectureToLoginWrapper,
  EmptyLectureWrapper,
  EvaluationFormModal,
  EvaluationsHeader,
  EvaluationsWrapper,
  IconRightImage,
  LeaveReviewButton,
  LectureBasicInfo,
  LectureInfo,
  LectureInfoText,
  LectureName,
  LectureNameBookmarkWrapper,
  LectureScore,
  LectureScoreLabel,
  LectureScores,
  LectureScoreValue,
  LectureSummary,
  LectureWrapper,
  NoEvaluationWrapper,
  PageWrapper,
} from './index.style';
import withBars from '../../services/withBars';
import withFooter from '../../services/withFooter';

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
      <IntlProvider messages={messages}>
        <PageWrapper>
          <Background>
            <Helmet
              title={`${String(lecture.getIn(['course', 'name']))} - SNUEV`}
              meta={[
                { name: 'description', content: `${String(lecture.getIn(['course', 'name']))}에 대한 강의평가 페이지입니다.` },
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
            {!(evaluations && evaluations.size > 0) &&
            <NoEvaluationWrapper hasUser={user && user.get('isConfirmed')}>
              <EmptyLectureWrapper>
                <EmptyLectureIcon />
                <EmptyLectureText>
                  {!(user && user.get('isConfirmed')) &&
                  <FormattedHTMLMessage id="unauthorized" />
                  }
                  {user && user.get('isConfirmed') &&
                  <FormattedHTMLMessage id="emptyLecture" />
                  }
                </EmptyLectureText>
                {!(user && user.get('isConfirmed')) &&
                <EmptyLectureToLoginWrapper to="/sign_in">
                  <EmptyLectureToLoginText>
                    {messages.login}
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
      </IntlProvider>
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

export default compose(
  withFooter(true),
  withBars,
  connect(mapStateToProps, mapDispatchToProps),
)(LecturePage);
