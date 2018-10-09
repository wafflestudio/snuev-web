// @flow
import styled from 'styled-components';
import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import type { Theme } from '../../theme';
import { typo, media, sizes } from '../../style-utils';
import EmptyLectureImage from '../../images/img-emptylecture.png';
import IconBack from '../../images/ic-arrow-left@2x.png';
import IconRight from '../../images/ic-arrow-right@2x.png';

Modal.setAppElement('#app');

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props: { theme: Theme }) => props.theme.appMaxWidth}px;
`;

export const EvaluationFormModal = (props: {}) => (
  <Modal
    {...props}
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, .10)',
      },
      content: {
        border: 'none',
        borderRadius: '4px',
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        marginTop: window.innerWidth < sizes.phone ? '0px' : '10px',
        padding: window.innerWidth < sizes.phone ? '60px 40px 60px 40px' : '60px 60px 40px 60px',
        height: window.innerWidth < sizes.phone ? '100%' : null,
        width: window.innerWidth < sizes.phone ? '100%' : null,
      },
    }}
    appElement={document.getElementById('app')}
  />
);

export const LectureWrapper = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px dashed rgba(0,0,0,.4);
`;

export const BackToList = styled.div`
  ${typo.header3}
  display: none;

  ${media.phone`
    display: block;
    position: fixed;
    top: 0px;
    left: 30px;
    right: 30px;
    padding-left: 30px;
    padding-top: 20px;
    height: 70px;
    line-height: 30px;
    background: url(${IconBack}), linear-gradient(rgba(255,255,255) 70%, rgba(255,255,255,0));
    background-repeat: no-repeat;
    background-size: 20px 20px, cover;
    background-position-y: 25px, 0;
    color: ${(props: { theme: Theme }) => props.theme.color.primary};
  `}
`;

export const LectureNameBookmarkWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;

export const LectureName = styled.div`
  ${typo.header1}
  font-weight: 500;
  text-align: left;
  margin-right: 14px;
`;

export const LectureInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  ${media.tablet`
    margin-top: 10px;
    flex-direction: column;
  `}
`;

export const LectureBasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  ${media.tablet`
    flex-direction: row;
  `}
`;

export const LectureInfoText = styled.span`
  ${typo.body2}
  margin-bottom: 10px;
  ${media.tablet`
    margin-right: 8px;
    flex-direction: row;
  `}
`;

export const LectureScores = styled.div`
  display: flex;
  flex-direction: row;
  ${media.tablet`
    margin-top: 20px;
    justify-content: flex-end;
  `}
  ${media.phone`
    justify-content: center;
  `}
`;

export const LectureScore = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 48px;
  text-align: center;
  ${media.tablet`
    margin-left: 0;
    flex-basis: 80px;
  `}
`;

export const LectureScoreLabel = styled.span`
  ${typo.header3}
`;

export const LectureScoreValue = styled.span`
  ${typo.score1}
`;

export const LectureSummary = styled.p`
  ${typo.body2}
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  margin: 30px 0 0 0;
`;

export const EvaluationsWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  ${media.phone`
    padding-top: 20px;
  `}
`;

export const EvaluationsHeader = styled.span`
  ${typo.header2}
  font-weight: 500;
`;

export const LeaveReviewButton = styled.button`
  width: 120px;
  height: 40px;
  border: solid 1px ${(props: { theme: Theme }) => props.theme.color.primary};
  color: ${(props: { theme: Theme }) => props.theme.color.primary};
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  align-self: center;
  &:focus {
    outline: none;
  }
`;

export const CloseIcon = styled.span`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
  &:before, &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const PageWrapper = styled.div`
  height: 100%;
  margin: 0 60px;
  padding-top: 30px;
  display: flex;
  justify-content: center;

  ${media.phone`
    margin: 0 28px;
  `}
`;

export const NoEvaluationWrapper = styled.div`
  min-height: 300px;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 45px;
  margin-bottom: 80px;
  padding: 20px;
  background-color: ${(props: { hasUser: boolean, theme: Theme }) => props.hasUser ? props.theme.color.white : props.theme.color.secondary};
  ${media.phone`
    margin-top: 30px;
    margin-bottom: 30px;
  `}
`;

const EmptyLectureFrame = styled.img`
  width: 108px;
  height: 108px;
  object-fit: contain;
  ${media.phone`
    width: 108px;
    height: 108px;
  `}
`;

export const EmptyLectureIcon = (props: {}) => <EmptyLectureFrame src={EmptyLectureImage} {...props} />;

export const EmptyLectureWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const EmptyLectureText = styled.p`
  ${typo.body2}
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  text-align: center;
`;

export const EmptyLectureToLoginWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

export const EmptyLectureToLoginText = styled.p`
  font-size: ${(props: { theme: Theme }) => `${props.theme.fontSize.header3} px`};
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  color: ${(props: { theme: Theme }) => props.theme.color.primary};
`;

const IconRightFrame = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

export const IconRightImage = (props: {}) => <IconRightFrame src={IconRight} {...props} />;
