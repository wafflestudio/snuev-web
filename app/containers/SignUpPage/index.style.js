// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import SignUpIconImage from '../../images/img-signup.png';
import ArrowLeftIconImage from '../../images/ic-arrow-left.png';
import EmailIconImage from '../../images/img-email.png';

import { media, typo } from '../../style-utils';
import type { Theme } from '../../theme';

export const Background = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.grayBackground1};
  display: flex;
  min-height: 700px;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  ${media.phone`
    min-height: 750px;
  `}
`;

export const InnerContainer = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
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

  ${media.tablet`
    width: 560px;
  `}
   
  ${media.phone`
    width: 100%;
    height: 100%;
  `}
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

export const EmailIcon = (props: {}) => <EmailIconFrame src={EmailIconImage} {...props} />;

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
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border: solid 1px ${(props: { theme: Theme }) => props.theme.color.primary};
  position: absolute;
  left: 590px;
  top: 60%;
  ${media.phone`
    display: none;
  `}
`;

export const ReturnText = styled.p`
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 20px;
  color: ${(props: { theme: Theme }) => props.theme.color.primary};
  text-align: center;
  ${media.phone`
    display: none;
  `}
`;

export const SignUpForm = styled.form`
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpIconFrame = styled.img`
  min-width: 108px;
  min-height: 108px;
  object-fit: contain;
`;

export const SignUpIcon = (props: {}) => <SignUpIconFrame src={SignUpIconImage} {...props} />;

export const CreateAccountText = styled.div`
  ${typo.header1}
  text-align: center;
`;

export const SignUpButton = styled.button`
  width: 140px;
  height: 140px;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.08);
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border: solid 1px ${(props: { theme: Theme }) => props.theme.color.primary};
  position: absolute;
  left: 590px;
  top: 60%;
  &:hover { background-color: ${(props: { theme: Theme }) => props.theme.color.hover1}; };
  &:focus { background-color: ${(props: { theme: Theme }) => props.theme.color.focus1}; outline: none; };
  
  ${media.tablet`
    left: 490px;
  `}
  
  ${media.phone`
    width: 259px;
    height: 52px;
    border-radius: 2px;
    position: static;
    box-shadow: none;
    margin-top: 30px;
    background-color: ${(props: { theme: Theme }) => props.theme.color.primary};
    &:hover { background-color: ${(props: { theme: Theme }) => props.theme.color.hover2}; };
    &:focus { background-color: ${(props: { theme: Theme }) => props.theme.color.focus2}; outline: none; };
  `}
`;

export const SignUpText = styled.p`
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 20px;
  text-align: center;
  padding-top: 5px;
  color: ${(props: { theme: Theme }) => props.theme.color.primary};
  &:focus { outline: none };
  ${media.phone`
    width: 45px;
    height: 24px;
    font-size: 15px;
    padding-top: 0px;
    color: ${(props: { theme: Theme }) => props.theme.color.white};
  `}
`;

const BackButtonStyle = styled(Link)`
  width: 50px;
  height: 50px;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.08);
  border-radius: 25px;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border: solid 1px ${(props: { theme: Theme }) => props.theme.color.primary};
  position: absolute;
  left: -25px;
  top: 90px;
  &:hover { background-color: ${(props: { theme: Theme }) => props.theme.color.hover1}; };
  &:focus { background-color: ${(props: { theme: Theme }) => props.theme.color.focus1}; outline: none; };
  ${media.phone`
    display: none;
  `}
`;

export const BackText = styled.p`
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSize.body1}px;
  opacity: 0.8;
  position: absolute;
  left: 35px;
  top: 90px;
  ${media.phone`
    display: none;
  `}
`;

export const BackHintText = styled.p`
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 13px;
  opacity: 0.4;
  position: absolute;
  left: 35px;
  top: 60px;
  ${media.phone`
    display: none;
  `}
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
  ${media.phone`
    display: none;
  `}
`;

export const BackButton = (props: {}) => (
  <BackButtonStyle {...props}>
    <ArrowLeftIconFrame src={ArrowLeftIconImage} />
  </BackButtonStyle>
);
