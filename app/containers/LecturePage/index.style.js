import styled from 'styled-components';
import React from 'react';
import Modal from 'react-modal';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EvaluationFormModal = (props) => (
  <Modal
    {...props}
    style={{
      content: {
        height: '340px',
        minWidth: '1000px',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
      },
    }}
    appElement={document.getElementById('app')}
  />
);

export const LectureWrapper = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px dashed rgba(0,0,0,.4);
`;

export const LectureName = styled.text`
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

export const LectureInfoText = styled.text`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props) => props.theme.fontSize.body2}px;
  color: ${(props) => props.theme.color.body2};
`;

export const LectureScore = styled.text`
  display: flex;
  flex-direction: column;
  margin-left: 48px;
  text-align: center;
`;

export const LectureScoreLabel = styled.text`
`;

export const LectureScoreValue = styled.text`
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
`;

export const EvaluationsHeader = styled.text`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props) => props.theme.fontSize.header2}px;
  color: ${(props) => props.theme.color.header2};
  font-weight: 500;
`;

export const LeaveReviewButton = styled.button`
  width: 109px;
  height: 36px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.primary};
  align-self: center;
`;

export const LeaveReviewText = styled.text`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 15px;
  text-align: center;
  color: #ffffff;
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
}`;
