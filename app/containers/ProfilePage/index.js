// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import pageState from './pageState';
import { Creators as Actions } from './reducer';
import { Creators as GlobalActions } from '../../global/reducer';
// import messages from './messages';
import withBars from '../../services/withBars';
import {
  makeSelectPage,
  makeSelectMyEvaluations,
} from './selectors';
import {
  makeSelectUser,
  makeSelectDepartments,
  makeSelectVotes,
  makeSelectEveryLecture,
  makeSelectBookmarks,
  makeSelectBookmarkedLectures,
} from '../../global/selectors';

import {
  Background,
  PageTabBar,
  NicknameWrapper,
  PageTabInnerWrapper,
  PageTab,
  InnerWrapper,
} from './index.style';
import { MyInfoContainer } from './MyInfoContainer';
import { MyEvaluationContainer } from './MyEvaluationContainer';
import { EditPasswordContainer } from './EditPasswordContainer';
import { MyBookmarkContainer } from './MyBookmarkContainer';

type Props = {
  departments: any,
  user: any,
  myEvaluations: any,
  votes: any,
  lectures: any,
  bookmarkedLectures: any,
  bookmarks: any,
  resendConfirmationEmail: () => void,
  editPassword: (password: string) => void,
  getMyEvaluations: () => void,
  vote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
  deleteVote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
  getBookmarkedLectures: () => void,
  bookmark: (id: string) => void,
  deleteBookmark: (id: string) => void,
};

type State = {
  pageState: string,
};

export class ProfilePage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pageState: pageState.myInfo,
    };
    (this: any).handleUpdateProfile = this.handleUpdateProfile.bind(this);
    (this: any).handleOnClickMyInfoTab = this.handleOnClickMyInfoTab.bind(this);
    (this: any).handleOnClickMyEvaluationTab = this.handleOnClickMyEvaluationTab.bind(this);
    (this: any).handleOnClickMyBookmarkTab = this.handleOnClickMyBookmarkTab.bind(this);
    (this: any).handleOnClickEditPasswordTab = this.handleOnClickEditPasswordTab.bind(this);
  }

  handleUpdateProfile(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.updateProfile(this.state);
  }

  handleOnClickMyInfoTab(event: Event) {
    event.preventDefault();
    this.setState({ pageState: pageState.myInfo });
  }

  handleOnClickMyEvaluationTab(event: Event) {
    event.preventDefault();
    this.props.getMyEvaluations();
    this.setState({ pageState: pageState.myEvaluation });
  }

  handleOnClickMyBookmarkTab(event: Event) {
    event.preventDefault();
    this.props.getBookmarkedLectures();
    this.setState({ pageState: pageState.myBookmark });
  }

  handleOnClickEditPasswordTab(event: Event) {
    event.preventDefault();
    this.setState({ pageState: pageState.editPassword });
  }

  render() {
    return (
      <Background>
        <Helmet
          title={`${this.props.user.get('nickname')} - SNUEV`}
          meta={[
            { name: 'description', content: `${this.props.user.get('nickname')}의 프로필 페이지입니다.` },
          ]}
        />
        <NicknameWrapper>
          {this.props.user.get('nickname')} 님
        </NicknameWrapper>
        <PageTabBar>
          <PageTabInnerWrapper>
            <PageTab
              currentPage={this.state.pageState === pageState.myInfo}
              onClick={this.handleOnClickMyInfoTab}
            >
              내 정보</PageTab>
            <PageTab
              currentPage={this.state.pageState === pageState.myEvaluation}
              onClick={this.handleOnClickMyEvaluationTab}
            >
              내가 쓴 강의평 목록</PageTab>
            <PageTab
              currentPage={this.state.pageState === pageState.myBookmark}
              onClick={this.handleOnClickMyBookmarkTab}
            >
              관심 강의</PageTab>
            <PageTab
              currentPage={this.state.pageState === pageState.editPassword}
              onClick={this.handleOnClickEditPasswordTab}
            >
              비밀번호 변경</PageTab>
          </PageTabInnerWrapper>
        </PageTabBar>
        <InnerWrapper>
          {this.state.pageState === pageState.myInfo &&
            <MyInfoContainer
              departments={this.props.departments}
              user={this.props.user}
              resendConfirmationEmail={this.props.resendConfirmationEmail}
            />
          }
          {this.state.pageState === pageState.myEvaluation &&
            <MyEvaluationContainer
              lectures={this.props.lectures}
              myEvaluations={this.props.myEvaluations}
              votes={this.props.votes}
              vote={this.props.vote}
              deleteVote={this.props.deleteVote}
            />
          }
          {this.state.pageState === pageState.myBookmark &&
            <MyBookmarkContainer
              bookmarkedLectures={this.props.bookmarkedLectures}
              bookmark={this.props.bookmark}
              deleteBookmark={this.props.deleteBookmark}
              bookmarks={this.props.bookmarks}
            />
          }
          {this.state.pageState === pageState.editPassword &&
            <EditPasswordContainer
              editPassword={this.props.editPassword}
            />
          }
        </InnerWrapper>
      </Background>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  page: makeSelectPage(),
  departments: makeSelectDepartments(),
  user: makeSelectUser(),
  myEvaluations: makeSelectMyEvaluations(),
  votes: makeSelectVotes(),
  lectures: makeSelectEveryLecture(),
  bookmarks: makeSelectBookmarks(),
  bookmarkedLectures: makeSelectBookmarkedLectures(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  updateProfile: (credentials: { password: string, password_confirmation: string, nickname: string, department_id: string }) => dispatch(Actions.updateProfileRequest(credentials)),
  resendConfirmationEmail: () => dispatch(Actions.resendConfirmationEmailRequest()),
  editPassword: (password: string) => dispatch(Actions.editPasswordRequest(password)),
  getMyEvaluations: () => dispatch(Actions.myEvaluationsRequest()),
  vote: (lectureId: number, evaluationId: number, isUpvote: boolean) => dispatch(GlobalActions.voteRequest(lectureId, evaluationId, isUpvote)),
  deleteVote: (lectureId: number, evaluationId: number, isUpvote: boolean) => dispatch(GlobalActions.deleteVoteRequest(lectureId, evaluationId, isUpvote)),
  getBookmarkedLectures: () => dispatch(GlobalActions.bookmarkedLecturesRequest()),
  bookmark: (id: number) => dispatch(GlobalActions.bookmarkRequest(id)),
  deleteBookmark: (id: number) => dispatch(GlobalActions.deleteBookmarkRequest(id)),
});

export default withBars(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
