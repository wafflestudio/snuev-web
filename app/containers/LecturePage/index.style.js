import styled from 'styled-components';
import React from 'react';
import Modal from 'react-modal';
import CreateIconImage from '../../images/ic-write-big.png';

Modal.setAppElement('#app');

export const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EvaluationFormModal = (props) => (
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
        marginTop: '10px',
        padding: '60px 60px 40px 60px',
      },
    }}
  />
);

export const LectureWrapper = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px dashed rgba(0,0,0,.4);
`;

export const LectureName = styled.div`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props) => props.theme.fontSize.header1}px;
  color: ${(props) => props.theme.color.header1};
  font-weight: 500;
  text-align: left;
`;

export const LectureInfo = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const LectureBasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const LectureInfoText = styled.span`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props) => props.theme.fontSize.body2}px;
  color: ${(props) => props.theme.color.body2};
`;

export const LectureScore = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 48px;
  text-align: center;
`;

export const LectureScoreLabel = styled.span`
`;

export const LectureScoreValue = styled.span`
  font-family: ${(props) => props.theme.fontFamily.number};
  font-size: ${(props) => props.theme.fontSize.score1}px;
  color: ${(props) => props.theme.color.score1};
`;

export const LectureSummary = styled.p`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  margin: 30px 0 0 0;
`;

export const EvaluationsWrapper = styled.div`
  padding-top: 45px;
  display: flex;
  justify-content: space-between;
`;

export const EvaluationsHeader = styled.span`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props) => props.theme.fontSize.header2}px;
  color: ${(props) => props.theme.color.header2};
  font-weight: 500;
`;

export const LeaveReviewButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  background-color: ${(props) => props.theme.color.white};
  align-self: center;
    &:focus {
    outline: none;
  }
`;

const CreateIconFrame = styled.img`
  width: 40px;
  height: 40px;
`;

export const CreateIcon = (props) => <CreateIconFrame src={CreateIconImage} {...props} />;

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

