import styled from 'styled-components';

export const Wrapper = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  font-size: 30px;
`;

export const SubHeader = styled.div`
  opacity: 0.8;
  font-size: 16px;
`;

export const LectureName = styled.text`
  font-size: 24px;
  font-weight: 500;
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
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
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
  justify-content: center;
  margin: 20px -40px 30px;
`;

export const RatingMargin = styled.div`
  margin: 0px 40px;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 200px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  resize: none;
  padding: 21px 0px;  
  &:focus {
    outline: none; 
  }
  
  margin-bottom: 15px;
`;
