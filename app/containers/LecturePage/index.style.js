import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: solid 1px #cccccc;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const SpaceBetween = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

// index.js

export const Background = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
`;

export const LectureNameWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: solid 1px #cccccc;
`;

export const LectureName = styled.text`
  height: 41px;
  font-family: NanumMyeongjo;
  font-size: 36px;
  font-weight: bold;
  text-align: left;
  color: #111111;
  margin-bottom: 25px;
`;

export const ProfessorName = styled.text`
  height: 16px;
  font-family: NanumGothic;
  font-size: 14px;
  text-align: left;
  color: #666666;
  margin-left: 14px;
  margin-bottom: 28px;
`;

export const LectureScore = styled.text`
  width: 55px;
  height: 41px;
  font-family: NanumGothic;
  font-size: 36px;
  font-weight: bold;
  text-align: left;
  color: #0065e3;
  margin-right: 10px;
`;

export const ReviewCountText = styled.text`
  width: 96px;
  height: 16px;
  font-family: NanumGothic;
  font-size: 14px;
  text-align: left;
  color: #111111;
  margin-left: 10px;
`;

export const HitsText = styled.text`
  width: 69px;
  height: 16px;
  font-family: NanumGothic;
  font-size: 14px;
  text-align: left;
  color: #666666;
  margin-top: 13px;
`;

export const SummaryText = styled.p`
  font-family: NanumGothic;
  font-size: 14px;
  line-height: 1.43;
  text-align: left;
  color: #111111;
  margin-top: 21px;
  padding-right: 200px;
`;

export const LectureInfoText = styled.text`
  font-family: NanumGothic;
  font-size: 14px;
  line-height: 1.43;
  text-align: left;
  color: #111111;
  width: 130px;
  margin: 5px 0px;
`;

export const EvaluationHeaderText = styled.text`
  font-family: NanumMyeongjo;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #111111;
`;

export const LeaveReviewButton = styled.button`
  width: 109px;
  height: 36px;
  border-radius: 3px;
  background-color: #2066be;
  align-self: center;
`;

export const LeaveReviewText = styled.text`
  font-family: NanumGothic;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
`;
