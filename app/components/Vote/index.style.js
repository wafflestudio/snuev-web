// @flow

import styled from 'styled-components';
import Map from 'immutable';
import { typo, media } from '../../style-utils';

import UpvoteNormal from '../../images/ic-upvote-normal.png';
import UpvoteNormalHover from '../../images/ic-upvote-hover.png';
import UpvoteSelected from '../../images/ic-upvote-selected-normal.png';
import UpvoteSelectedHover from '../../images/ic-upvote-selected-hover.png';
import DownvoteNormal from '../../images/ic-downvote-normal.png';
import DownvoteNormalHover from '../../images/ic-downvote-hover.png';
import DownvoteSelected from '../../images/ic-downvote-selected-normal.png';
import DownvoteSelectedHover from '../../images/ic-downvote-selected-hover.png';
import votedState from './votedState';

type Props = {
  theme: Map<string, any>,
  votedState: votedState,
};

export const UpvoteButton = styled.div`
  width: 21px;
  height: 21px;
  background-image: url(${(props: Props) => props.votedState === votedState.up ? UpvoteSelected : UpvoteNormal});
  cursor: pointer;
  margin-right: 6px;

  &:hover {
    background-image: url(${(props: Props) => props.votedState === votedState.up ? UpvoteSelectedHover : UpvoteNormalHover});
  }

  &:focus {
    outline: none;
  }

  ${media.tablet`
    background-size: 18px 18px;
  `}
`;

export const DownvoteButton = styled.div`
  width: 21px;
  height: 21px;
  background: url(${(props: Props) => props.votedState === votedState.down ? DownvoteSelected : DownvoteNormal}) no-repeat 50% 50%;
  cursor: pointer;
  margin-right: 6px;

  &:hover {
    background: url(${(props: Props) => props.votedState === votedState.down ? DownvoteSelectedHover : DownvoteNormalHover}) no-repeat 50% 50%;
  }

  &:focus {
    outline: none;
  }

  ${media.tablet`
    background-size: 18px 18px;
  `}
`;

export const UpvoteCount = styled.div`
  ${typo.body2}
  height: 21px;
  opacity: 0.4;
  color: ${(props: Props) => props.votedState === votedState.up ? props.theme.color.primary : props.theme.color.black};
  margin-right: 16px;

  ${media.tablet`
    height: 18px;
    margin-right: 10px;
  `}
`;

export const DownvoteCount = styled.div`
  ${typo.body2}
  height: 21px;
  opacity: 0.4;
  color: ${(props: Props) => props.votedState === votedState.down ? props.theme.color.error : props.theme.color.black};

  ${media.tablet`
    height: 18px;
  `}
`;

export const ButtonCountWrapper = styled.div`
  height: 21px;
  display: flex;

  ${media.tablet`
    height: 18px;
  `}
`;

export const VoteWrapper = styled.div`
  height: 21px;
  display: flex;

  ${media.tablet`
    height: 18px;
  `}
`;
