import styled from 'styled-components';

import UpvoteNormal from '../../images/ic-upvote-normal.png';
import UpvoteNormalHover from '../../images/ic-upvote-hover.png';
import UpvoteSelected from '../../images/ic-upvote-selected-normal.png';
import UpvoteSelectedHover from '../../images/ic-upvote-selected-hover.png';
import DownvoteNormal from '../../images/ic-downvote-normal.png';
import DownvoteNormalHover from '../../images/ic-downvote-hover.png';
import DownvoteSelected from '../../images/ic-downvote-selected-normal.png';
import DownvoteSelectedHover from '../../images/ic-downvote-selected-hover.png';
import votedState from './votedState';

export const UpvoteButton = styled.div`
  width: 21px;
  height: 21px;
  background: url(${(props) => props.votedState === votedState.up ? UpvoteSelected : UpvoteNormal}) no-repeat 50% 50%;
  cursor: pointer;

  &:hover {
    background: url(${(props) => props.votedState === votedState.up ? UpvoteSelectedHover : UpvoteNormalHover}) no-repeat 50% 50%;
  }

  &:focus {
    outline: none;
  }
`;

export const DownvoteButton = styled.div`
  width: 21px;
  height: 21px;
  background: url(${(props) => props.votedState === votedState.down ? DownvoteSelected : DownvoteNormal}) no-repeat 50% 50%;
  cursor: pointer;

  &:hover {
    background: url(${(props) => props.votedState === votedState.down ? DownvoteSelectedHover : DownvoteNormalHover}) no-repeat 50% 50%;
  }

  &:focus {
    outline: none;
  }
`;

export const UpvoteCount = styled.div`
  width: 18px;
  height: 21px;
  opacity: 0.4;
  font-family: Lato;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.votedState === votedState.up ? '#4f48c4' : 'var(--black-two)'};
`;

export const DownvoteCount = styled.div`
  width: 18px;
  height: 21px;
  opacity: 0.4;
  font-family: Lato;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.votedState === votedState.down ? '#e54459' : 'var(--black-two)'};
`;

export const ButtonCountWrapper = styled.div`
  width: 48px;
  height: 21px;
  display: flex;
  justify-content: space-between;
`;

export const VoteWrapper = styled.div`
  width: 108px;
  height: 21px;
  display: flex;
  justify-content: space-between;
`;
