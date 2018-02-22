import styled from 'styled-components';

export const Background = styled.form`
  background-color: #ffffff;
  display: flex;
  flex: 1;
  height: 340px;
  width: 800px;
  min-height: 340px;
  border: solid 1px #cccccc;
`;

export const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const LectureName = styled.text`
  height: 29px;
  font-family: AppleSDGothicNeo;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4a4a4a;
`;

export const ExplanationText = styled.text`
  height: 20px;
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #111111;
`;

export const SubmitButton = styled.button`
  width: 180px;
  height: 45px;
  border-radius: 3px;
  background-color: #2568BB;
`;

export const SubmitText = styled.text`
  height: 19px;
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export const CriteriaText = styled.text`
  width: 200px;
  height: 19px;
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #111111;
`;

// TODO: create separate component for CommentInput to show warning when comment is under 10 characters
export const CommentInput = styled.textarea`
  width: 460px;
  height: 180px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #979797;
`;

export const Block = styled.div`
  background-color: #ffffff;
  min-height: 100px;
  min-width: 100px;
  border: solid 1px #cccccc;
`;
