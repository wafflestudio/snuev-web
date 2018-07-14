// @flow
import styled from 'styled-components';
import React from 'react';
import MainSearchBgSrc from '../../images/mainsearchbg.png';
import MainSearchBg2xSrc from '../../images/mainsearchbg@2x.png';
import MainSearchBg3xSrc from '../../images/mainsearchbg@3x.png';

const MainSearchBgFrame = styled.img`
   position: absolute;
   left: 50%;
   top: 50%;
   -webkit-transform: translateY(-50%) translateX(-50%);
`;

export const MainSearchBg = (props: {}) => <MainSearchBgFrame {...props} src={MainSearchBgSrc} srcSet={`${MainSearchBg2xSrc} 2x, ${MainSearchBg3xSrc} 3x`} />;

export const MainSearchBgRelativeWrapper = styled.div`
  position: relative;
  height: 500px;
  overflow: visible;
`;

export const MainSearchBgAbsoluteWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 80px;
  left: 0;
  right: 0;
`;

export const MainPageContent = styled.div`
  padding-top: 470px;
  width: 100%;
  position: relative;
`;

export const SearchInput = styled.input`
  position: absolute;
  width: 480px;
  padding: 17px 0px 16px;
  top: 214px;
  left: 0;
  right: 0;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  z-index: 1;
  font-size: 18px;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

export const RecentEvaluations = styled.div`
  margin-top: -159px;
  width: 100%;
`;

export const RecentEvaluationsTitle = styled.div`
  height: 59px;
  font-size: 40px;
  font-weight: 500;
  color: ${(props: any) => props.theme.color.primary};
`;

export const RecentEvaluationsContent = styled.div`
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.05);
  padding: 35px 35px 45px 35px;
  background-color: #ffffff;
`;

export const EvaluationCard = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.4);
`;

export const EvaluationCardTitles = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  div {
    margin-left: 10px;
    display: block;
    font-family: ${(props: any) => props.theme.fontFamily.number};
    font-size: ${(props: any) => props.theme.fontSize.label};
    color: ${(props: any) => props.theme.color.primary};
  }
`;

