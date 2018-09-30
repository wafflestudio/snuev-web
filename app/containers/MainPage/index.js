// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { injectIntl, FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import {
  makeSelectLatestEvaluations,
  makeSelectMostEvaluatedLectures,
  makeSelectTopRatedLectures,
  makeSelectMostLikedEvaluations,
  makeSelectIsFetching,
} from './selectors';
import { makeSelectVotes } from '../../global/selectors';
import { Creators as Actions } from './reducer';
import { Creators as GlobalActions } from '../../global/reducer';
import withBars from '../../services/withBars';
import Evaluation from './Evaluation';
import {
  MainSearchBg,
  MainSearchBgWrapper,
  MainSearchBgRelativeWrapper,
  MainPage2ndBox,
  SearchInput,
  Evaluations,
  EvaluationsTitle,
  EvaluationsContent,
  FlexContainer,
  LecturesBoxContainer,
  LecturesBox,
  LecturesHeader,
  LecturesTitle,
  LecturesHeaderCircle,
  FlexItem,
  MarginContainer,
  LecturesContent,
  Lecture,
  LectureName,
  LectureNumber,
  LectureDescription,
  MainPage3rdBox,
  BackgroundsContainer,
  GrayBackground,
} from './index.style';
import messages from './messages';


type Props = {
  latestEvaluations: [Map<string, any>],
  mostEvaluatedLectures: [Map<string, any>],
  topRatedLectures: [Map<string, any>],
  mostLikedEvaluations: [Map<string, any>],
  isFetching: boolean,
  getLatestEvaluations: () => void,
  getMostEvaluatedLectures: () => void,
  getTopRatedLectures: () => void,
  getMostLikedEvaluations: () => void,
  intl: any,
  votes: Map<string, any>,
  vote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
  deleteVote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
};

export class MainPage extends React.PureComponent<Props> { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getLatestEvaluations();
    this.props.getMostEvaluatedLectures();
    this.props.getTopRatedLectures();
    this.props.getMostLikedEvaluations();
  }

  renderTopRatedLectures() {
    const renderTopRatedLecture = (lecture: Map<string, any>) => <Lecture key={lecture.get('id')}>
      <LectureNumber>{lecture.get('score').toFixed(1)}</LectureNumber>
      <div>
        <LectureName to={`/lectures/${lecture.get('id')}`}>
          {lecture.getIn(['course', 'name'])}
        </LectureName>
        <LectureDescription>{lecture.getIn(['course', 'department', 'name'])}&nbsp;&middot;&nbsp;{lecture.getIn(['course', 'targetGrade'])}&nbsp;&middot;&nbsp;{lecture.getIn(['professor', 'name'])} 교수</LectureDescription>
      </div>
    </Lecture>;
    if (this.props.topRatedLectures) {
      return this.props.topRatedLectures.slice(0, 3).map(renderTopRatedLecture);
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.isFetching ? null : (
            <div>
              <Helmet
                title="SNUEV - 홈"
                meta={[
            { name: 'description', content: '서울대학교 강의평가 서비스, SNUEV 홈페이지입니다.' },
                ]}
              />
              <MainSearchBgWrapper>
                <MainSearchBgRelativeWrapper>
                  <MainSearchBg />
                  <SearchInput placeholder={this.props.intl.formatMessage(messages.searchPlaceholder)} />
                </MainSearchBgRelativeWrapper>
                <Evaluations>
                  <EvaluationsTitle><FormattedMessage {...messages.headers.recentEvaluations} /></EvaluationsTitle>
                  <EvaluationsContent>
                    <FlexContainer>
                      {
                  this.props.latestEvaluations ? this.props.latestEvaluations.slice(0, 3).map((evaluation: Map<string, any>) =>
                    <FlexItem key={evaluation.get('id')}>
                      <Evaluation evaluation={evaluation} votes={this.props.votes} vote={this.props.vote} deleteVote={this.props.deleteVote} />
                    </FlexItem>
                  ) : null
                }
                    </FlexContainer>
                  </EvaluationsContent>
                </Evaluations>
              </MainSearchBgWrapper>
              <MainPage2ndBox>
                <LecturesBoxContainer>
                  <MarginContainer>
                    <LecturesBox>
                      <LecturesHeader>
                        <LecturesTitle><FormattedMessage {...messages.headers.mostEvaluatedLectures} /></LecturesTitle>
                        <LecturesHeaderCircle />
                      </LecturesHeader>
                      <LecturesContent>
                        {
                    this.props.mostEvaluatedLectures ? this.props.mostEvaluatedLectures.slice(0, 3).map((lecture: Map<string, any>) => (
                      <Lecture key={lecture.get('id')}>
                        <LectureNumber>{lecture.get('evaluationsCount')}</LectureNumber>
                        <div>
                          <LectureName to={`/lectures/${lecture.get('id')}`}>{lecture.getIn(['course', 'name'])}</LectureName>
                          <LectureDescription>{lecture.getIn(['course', 'department', 'name'])}&nbsp;&middot;&nbsp;{lecture.getIn(['course', 'targetGrade'])}&nbsp;&middot;&nbsp;{lecture.getIn(['professor', 'name'])} 교수</LectureDescription>
                        </div>
                      </Lecture>)) : null
                  }
                      </LecturesContent>
                    </LecturesBox>
                    <LecturesBox>
                      <LecturesHeader>
                        <LecturesTitle><FormattedMessage {...messages.headers.topRatedLectures} /></LecturesTitle>
                        <LecturesHeaderCircle />
                      </LecturesHeader>
                      <LecturesContent>
                        {
                          this.renderTopRatedLectures()
                        }
                      </LecturesContent>
                    </LecturesBox>
                  </MarginContainer>
                </LecturesBoxContainer>
              </MainPage2ndBox>
              <MainPage3rdBox>
                <BackgroundsContainer>
                  <GrayBackground />
                </BackgroundsContainer>
                <Evaluations>
                  <EvaluationsTitle><FormattedMessage {...messages.headers.mostLikedEvaluations} /></EvaluationsTitle>
                  <EvaluationsContent>
                    <FlexContainer>
                      {
                  this.props.mostLikedEvaluations ? this.props.mostLikedEvaluations.slice(0, 3).map((evaluation: Map<string, any>) =>
                    <FlexItem key={evaluation.get('id')}>
                      <Evaluation evaluation={evaluation} />
                    </FlexItem>
                  ) : null
                }
                    </FlexContainer>
                  </EvaluationsContent>
                </Evaluations>
              </MainPage3rdBox>
            </div>)
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  latestEvaluations: makeSelectLatestEvaluations(),
  mostEvaluatedLectures: makeSelectMostEvaluatedLectures(),
  topRatedLectures: makeSelectTopRatedLectures(),
  mostLikedEvaluations: makeSelectMostLikedEvaluations(),
  isFetching: makeSelectIsFetching(),
  votes: makeSelectVotes(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  getLatestEvaluations: () => dispatch(Actions.getLatestEvaluationsRequest()),
  getMostEvaluatedLectures: () => dispatch(Actions.getMostEvaluatedLecturesRequest()),
  getTopRatedLectures: () => dispatch(Actions.getTopRatedLecturesRequest()),
  getMostLikedEvaluations: () => dispatch(Actions.getMostLikedEvaluationsRequest()),
  vote: (lectureId: number, evaluationId: number, isUpvote: boolean) => dispatch(GlobalActions.voteRequest(lectureId, evaluationId, isUpvote)),
  deleteVote: (lectureId: number, evaluationId: number, isUpvote: boolean) => dispatch(GlobalActions.deleteVoteRequest(lectureId, evaluationId, isUpvote)),
});

export default compose(
  injectIntl,
  withBars,
  connect(mapStateToProps, mapDispatchToProps),
)(MainPage);
