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

export const FlatButton = styled.button`
  color: ${(props) => props.cancel ? 'rgba(0,0,0,.4)' : 'initial'};
  margin-left: 30px;
  cursor: pointer;
  font-weight: 500;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
