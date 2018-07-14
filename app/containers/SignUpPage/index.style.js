import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import SignUpIconImage from '../../images/img-signup.png';
import ArrowLeftIconImage from '../../images/ic-arrow-left.png';
import EmailIconImage from '../../images/img-email.png';

import SearchIconImage from '../../images/ic-search.png';
import { typo } from '../../style-utils';

export const Background = styled.div`
  background-color: ${(props) => props.theme.color.grayBackground1};
  display: flex;
  min-height: 700px;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  background-color: ${(props) => props.theme.color.white};
  width: 660px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  position: relative;
  padding: 20px;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.05);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmailIconFrame = styled.img`
  min-width: 108px;
  min-height: 108px;
  object-fit: contain;
`;

export const EmailIcon = (props) => <EmailIconFrame src={EmailIconImage} {...props} />;

export const TitleText = styled.p`
  ${typo.header1}
  width: 386px;
  height: 54px;
  opacity: 0.9;
  text-align: center;
`;

export const BodyText = styled.p`
  ${typo.header3}
  width: 660px;
  text-align: center;
`;

export const EmailContainer = styled.div`
  width: 380px;
  height: 100px;
  display: flex;
  background-color: #fff9e1;
  border-top: solid 2px orange;
  align-items: center;
  justify-content: center;
`;

export const EmailText = styled.p`
  ${typo.header3}
  text-align: center;
`;

export const ReturnButton = styled(Link)`
  width: 140px;
  height: 140px;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.08);
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.white};
  border: solid 1px ${(props) => props.theme.color.primary};
  position: absolute;
  left: 590px;
  top: 60%;
`;

export const ReturnText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 20px;
  color: ${(props) => props.theme.color.primary};
  text-align: center;
`;

export const SignUpForm = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpIconFrame = styled.img`
  min-width: 108px;
  min-height: 108px;
  object-fit: contain;
`;

export const SignUpIcon = (props) => <SignUpIconFrame src={SignUpIconImage} {...props} />;

export const CreateAccountText = styled.p`
  ${typo.header1}
  text-align: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 44px;
  background-color: ${(props) => props.theme.color.white};
  border-bottom: solid 1px ${(props) => props.theme.color.lightGray};
  margin-top: 20px;
  &:focus { outline: none; };
`;

export const UsernameInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ShortInput = Input.extend`
  width: 200px;
`;

export const EmailDomainText = styled.p`
  ${typo.header3}
  width: 100px;
  height: 44px;
  line-height: 42px;
  background-color: ${(props) => props.theme.color.white};
  border-bottom: solid 1px ${(props) => props.theme.color.lightGray};
  margin-top: 20px;
  color: ${(props) => props.theme.color.hint};
`;

export const UsernameInputText = styled.div`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 1em;
  color: ${(props) => props.theme.color.hint};
`;

export const SignUpButton = styled.button`
  width: 140px;
  height: 140px;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.08);
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.white};
  border: solid 1px ${(props) => props.theme.color.primary};
  position: absolute;
  left: 590px;
  top: 60%;
  &:hover { background-color: ${(props) => props.theme.color.hover1}; };
  &:focus { background-color: ${(props) => props.theme.color.focus1}; outline: none; };
`;

export const SignUpText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 20px;
  text-align: center;
  padding-top: 5px;
  color: ${(props) => props.theme.color.primary};
  &:focus { outline: none };
`;

const BackButtonStyle = styled(Link)`
  width: 50px;
  height: 50px;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.08);
  border-radius: 25px;
  background-color: ${(props) => props.theme.color.white};
  border: solid 1px ${(props) => props.theme.color.primary};
  position: absolute;
  left: -25px;
  top: 90px;
  &:hover { background-color: ${(props) => props.theme.color.hover1}; };
  &:focus { background-color: ${(props) => props.theme.color.focus1}; outline: none; };
`;

export const BackText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props) => props.theme.fontSize.body1}px;
  opacity: 0.8;
  position: absolute;
  left: 35px;
  top: 90px;
`;

export const BackHintText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 13px;
  opacity: 0.4;
  position: absolute;
  left: 35px;
  top: 60px;
`;

const ArrowLeftIconFrame = styled.img`
  min-width: 20px;
  min-height: 20px;
  object-fit: contain;
  display: relative;
  vertical-align: baseline;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const BackButton = (props) => (
  <BackButtonStyle {...props}>
    <ArrowLeftIconFrame src={ArrowLeftIconImage} />
  </BackButtonStyle>
);

// Department Input

export const DepartmentInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MediumInput = Input.extend`
  width: 256px;
`;

export const DepartmentMenu = styled.div`
  border: solid 1px #ccc;
  z-index: 10;
  background-color: ${(props) => props.theme.color.white};
  position: absolute;
  width: 300px;
  height: 180px;
  overflow-y: auto;
`;

const SearchIconWrapper = styled.div`
  width: 44px;
  height 44px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.white};
  border-bottom: solid 1px ${(props) => props.theme.color.lightGray};
  margin-top: 20px;
`;

const SearchIconFrame = styled.img`
  width: 30px;
  height: 30px;
`;

export const SearchIcon = (props) =>
  <SearchIconWrapper>
    <SearchIconFrame src={SearchIconImage} {...props} />
  </SearchIconWrapper>;

export const DepartmentItemWrapper = styled.button`
  width: 100%;
  line-height: 36px;
  background-color: ${(props) => props.highlighted ? props.theme.color.focus3 : props.theme.color.white};
  padding: 0 20px 0;
  text-align: left;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props) => props.theme.fontSize.body2}px;
  &:hover {
    background-color: ${(props) => props.highlighted ? props.theme.color.focus3 : props.theme.color.hover3}
  };
`;
