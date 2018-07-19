import styled from 'styled-components';

import UpvoteNormal from '../../images/ic-upvote-normal.png';
import UpvoteNormalHover from '../../images/ic-upvote-hover.png';
import UpvoteSelected from '../../images/ic-upvote-selected-normal.png';
import UpvoteSelectedHover from '../../images/ic-upvote-selected-hover.png';
import DownvoteNormal from '../../images/ic-downvote-normal.png';
import DownvoteNormalHover from '../../images/ic-downvote-hover.png';
import DownvoteSelected from '../../images/ic-downvote-selected-normal.png';
import DownvoteSelectedHover from '../../images/ic-downvote-selected-hover.png';

export const UpvoteNormalButton = styled.div`
  width: 21px;
  height: 21px;
  background: url(${UpvoteNormal}) no-repeat 0% 50%;
  cursor: pointer;

  &:hover {
    background: url(${UpvoteNormalHover}) no-repeat 0% 50%;
  }
`;

export const UpvoteSelectedButton = styled.div`
  width: 21px;
  height: 21px;
  background: url(${UpvoteSelected}) no-repeat 0% 50%;
  cursor: pointer;

  &:hover {
    background: url(${UpvoteSelectedHover}) no-repeat 0% 50%;
  }
`;

export const DownvoteNormalButton = styled.div`
  width: 21px;
  height: 21px;
  background: url(${DownvoteNormal}) no-repeat 0% 50%;
  cursor: pointer;

  &:hover {
    background: url(${DownvoteNormalHover}) no-repeat 0% 50%;
  }
`;

export const DownvoteSelectedButton = styled.div`
  width: 21px;
  height: 21px;
  background: url(${DownvoteSelected}) no-repeat 0% 50%;
  cursor: pointer;

  &:hover {
    background: url(${DownvoteSelectedHover}) no-repeat 0% 50%;
  }
`;

export const UpvoteCountNormal = styled.div`
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
  color: var(--black-two);
`;

export const UpvoteCountSelected = styled.div`
  width: 18px;
  height: 21px;
  font-family: Lato;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4f48c4;
`;

export const DownvoteCountNormal = styled.div`
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
  color: var(--black-two);
`;

export const DownvoteCountSelected = styled.div`
  width: 18px;
  height: 21px;
  font-family: Lato;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e54459;
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
