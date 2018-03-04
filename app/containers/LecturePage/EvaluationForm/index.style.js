import styled from 'styled-components';

export const Wrapper = styled.form`
  background-color: #ffffff;
  display: grid;
  width: 100%;
  grid-template-rows: 70px auto;
  grid-template-column: 400px auto auto;
  grid-template-areas:
    "header header action"
    "slider comment comment";
  padding: 0px 90px 0px 90px;
`;

export const Header = styled.div`
  grid-area: header
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
  grid-area: action;
  border-radius: 3px;
  background-color: #2568BB;
  margin-left: auto;
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

export const RatingWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
`;

export const StarRatingWrapper = styled.div`
  display: flex;
  grid-area: slider;
  height: 180px;
  flex-direction: column;
`;

export const CriteriaWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 240px;
`;

export const CriteriaText = styled.text`
  width: 90px;
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
  grid-area: comment;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #979797;
`;
