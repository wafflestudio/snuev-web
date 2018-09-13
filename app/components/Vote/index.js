// @flow
import * as React from 'react';
import { Map } from 'immutable';
import {
  UpvoteButton,
  DownvoteButton,
  UpvoteCount,
  DownvoteCount,
  ButtonCountWrapper,
  VoteWrapper,
} from './index.style';
import votedState from './votedState';

type Props = {
  lecture: Map<string, any>,
  evaluation: Map<string, any>,
  votes: any,
  vote: (lectureId: string, evaluatonId: string, isUpvote: boolean) => void,
  deleteVote: (lectureId: string, evaluatonId: string, isUpvote: boolean) => void,
};

type State = {
  votedState: number,
  upvotesCount: number,
  downvotesCount: number,
};

export default class Vote extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const evaluation = props.evaluation;
    if (evaluation.get('upvoted')) {
      this.state = {
        votedState: votedState.up,
        upvotesCount: evaluation.get('upvotesCount'),
        downvotesCount: evaluation.get('downvotesCount'),
      };
    } else if (evaluation.get('downvoted')) {
      this.state = {
        votedState: votedState.down,
        upvotesCount: evaluation.get('upvotesCount'),
        downvotesCount: evaluation.get('downvotesCount'),
      };
    } else {
      this.state = {
        votedState: votedState.default,
        upvotesCount: evaluation.get('upvotesCount'),
        downvotesCount: evaluation.get('downvotesCount'),
      };
    }
    (this: any).onPressUpvote = this.onPressUpvote.bind(this);
    (this: any).onPressDownvote = this.onPressDownvote.bind(this);
  }

  onPressUpvote(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    const {
      lecture,
      evaluation,
      vote,
      deleteVote,
    } = this.props;

    if (this.state.votedState === votedState.up) {
      deleteVote(lecture.get('id'), evaluation.get('id'), true);
      this.setState({
        votedState: votedState.default,
        upvotesCount: this.state.upvotesCount - 1,
      });
    } else if (this.state.votedState === votedState.down) {
      vote(lecture.get('id'), evaluation.get('id'), true);
      this.setState({
        votedState: votedState.up,
        upvotesCount: this.state.upvotesCount + 1,
        downvotesCount: this.state.downvotesCount - 1,
      });
    } else {
      vote(lecture.get('id'), evaluation.get('id'), true);
      this.setState({
        votedState: votedState.up,
        upvotesCount: this.state.upvotesCount + 1,
      });
    }
  }

  onPressDownvote(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    const {
      lecture,
      evaluation,
      vote,
      deleteVote,
    } = this.props;

    if (this.state.votedState === votedState.down) {
      deleteVote(lecture.get('id'), evaluation.get('id'), false);
      this.setState({
        votedState: votedState.default,
        downvotesCount: this.state.downvotesCount - 1,
      });
    } else if (this.state.votedState === votedState.up) {
      vote(lecture.get('id'), evaluation.get('id'), false);
      this.setState({
        votedState: votedState.down,
        downvotesCount: this.state.downvotesCount + 1,
        upvotesCount: this.state.upvotesCount - 1,
      });
    } else {
      vote(lecture.get('id'), evaluation.get('id'), false);
      this.setState({
        votedState: votedState.down,
        downvotesCount: this.state.downvotesCount + 1,
      });
    }
  }

  render() {
    const {
      evaluation,
      votes,
    } = this.props;
    return (
      <VoteWrapper>
        <ButtonCountWrapper>
          <UpvoteButton
            votedState={this.state.votedState}
            onClick={this.onPressUpvote}
            disabled={votes ? votes.getIn([evaluation.get('id'), 'isFetching']) : true}
          />
          <UpvoteCount votedState={this.state.votedState}>
            {this.state.upvotesCount}
          </UpvoteCount>
        </ButtonCountWrapper>
        <ButtonCountWrapper>
          <DownvoteButton
            votedState={this.state.votedState}
            onClick={this.onPressDownvote}
            disabled={votes ? votes.getIn([evaluation.get('id'), 'isFetching']) : true}
          />
          <DownvoteCount votedState={this.state.votedState}>
            {this.state.downvotesCount}
          </DownvoteCount>
        </ButtonCountWrapper>
      </VoteWrapper>
    );
  }
}
