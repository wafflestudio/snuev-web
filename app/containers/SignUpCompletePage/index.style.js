import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import EmailIconImage from '../../images/img-email.png';

export const Background = styled.div`
  background-color: ${(props) => props.theme.color.grayBackground1};
  display: flex;
  flex: 1;
  min-height: 700px;
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

export const EmailIconFrame = styled.img`
  min-width: 108px;
  min-height: 108px;
  object-fit: contain;
`;

export const EmailIcon = (props) => <EmailIconFrame src={EmailIconImage} {...props} />;

export const TitleText = styled.p`
  width: 386px;
  height: 54px;
  opacity: 0.9;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props) => props.theme.fontSize.header1}px;
  text-align: center;
`;

export const BodyText = styled.p`
  width: 660px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props) => props.theme.fontSize.header3}px;
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
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props) => props.theme.fontSize.header3}px;
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
