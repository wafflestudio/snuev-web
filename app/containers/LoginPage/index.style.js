// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import { media } from '../../style-utils';
import type { Theme } from '../../theme';
import LogoImage from '../../images/img-logo-220-px.png';

export const Background = styled.div`
  min-height: 700px;
  background-color: ${(props: { theme: Theme }) => props.theme.color.grayBackground1};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.phone`
    min-height: 500px;
  `}
`;

export const LoginForm = styled.form`
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
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

const LogoFrame = styled.img`
  width: 220px;
  height: 60px;
  object-fit: contain;
`;

export const Logo = (props: {}) => <LogoFrame src={LogoImage} {...props} />;

export const WelcomeText = styled.div`
  width: 331px;
  height: 48px;
  opacity: 0.8;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
  margin-top: 46px;

  ${media.phone`
    width: 249px;
    height: 36px;
    font-size: 11px;
    margin-top: 11px;
  `}
`;

export const PermissionText = styled.div`
  width: 230px;
  height: 19px;
  opacity: 0.5;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
  margin-top: 16px;
  margin-bottom: 60px;

  ${media.phone`
    width: 213px;
    height: 18px;
    font-size: 11px;
    margin-top: 10px;
    margin-bottom: 20px;
  `}
`;

export const LoginButton = styled.button`
  width: 140px;
  height: 140px;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.08);
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { theme: Theme }) => props.theme.color.primary};
  position: absolute;
  left: 590px;
  top: 60%;
  &:hover { background-color: ${(props: { theme: Theme }) => props.theme.color.hover1}; };
  &:focus { background-color: ${(props: { theme: Theme }) => props.theme.color.focus1}; outline: none; };

  ${media.phone`
    width: 259px;
    height: 52px;
    border-radius: 2px;
    left: 0;
    position: relative;
    box-shadow: none;
    margin-top: 30px;
  `}
`;

export const LoginText = styled.div`
  width: 56px;
  height: 29px;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  ${media.phone`
    width: 45px;
    height: 24px;
    font-size: 15px;
  `}
`;

export const ComponentsWrapper = styled.div`
  width: 259px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.phone`
    flex-direction: row;
    justify-content: center;
  `}
`;

export const SignUpWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  margin-top: 12px;

  ${media.phone`
    width: 65px;
    margin-top: 30px;
    margin-right: 20px;
    margin-left: 20px;
  `}
`;

export const RecoverPasswordWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  margin-top: 12px;

  ${media.phone`
    width: 94px;
    margin-top: 30px;
  `}
`;

export const MiniCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #4f48c4;
  border-radius: 5px;
  margin-right: 6px;
`;

export const SignUpLink = styled(Link)`
  width: 52px;
  height: 20px;
  opacity: 0.8;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 13px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);

  ${media.phone`
    width: 45px;
    height: 18px;
    font-size: 11px;
  `}
`;

export const RecoverPasswordLink = styled(Link)`
  width: 81px;
  height: 20px;
  opacity: 0.8;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 13px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);

  ${media.phone`
    width: 69px;
    height: 18px;
    font-size: 11px;
  `}
`;
