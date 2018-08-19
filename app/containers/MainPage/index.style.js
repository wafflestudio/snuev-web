// @flow
import styled from 'styled-components';
import React from 'react';
import MainSearchBgSrc from '../../images/mainsearchbg.png';
import MainSearchBg2xSrc from '../../images/mainsearchbg@2x.png';
import MainSearchBg3xSrc from '../../images/mainsearchbg@3x.png';
import { media, typo } from '../../style-utils';


type Props = {
  theme: any,
};

const MainSearchBgFrame = styled.img`
   position: absolute;
   left: 50%;
   -webkit-transform: translateX(-50%);
`;

export const MainSearchBg = (props: {}) => <MainSearchBgFrame {...props} src={MainSearchBgSrc} srcSet={`${MainSearchBg2xSrc} 2x, ${MainSearchBg3xSrc} 3x`} />;

export const MainSearchBgRelativeWrapper = styled.div`
  position: relative;
  height: 500px;
  overflow: visible;
`;

export const MainSearchBgWrapper = styled.div`
  overflow: hidden;
  background-color: #e3e5ee;
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
  font-size: 18px;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

export const Evaluations = styled.div`
  position: relative;
  margin: -159px auto 0px;
  width: 100%;
  max-width: 1060px;
  padding-bottom: 30px;
`;

export const EvaluationsTitle = styled.div`
  ${typo.header1}
  font-weight: 500;
  color: ${(props: any) => props.theme.color.primary};
  ${media.tablet`
    margin: 0 16px;
  `}
  ${media.phone`
    margin: 0 16px;
  `}
`;

export const EvaluationsContent = styled.div`
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.05);
  padding: 35px 20px 45px;
  background-color: #ffffff;
  ${media.tablet`
    margin: 0 16px;
  `}
  ${media.phone`
    margin: 0 16px;
  `}
`;


export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexItem = styled.div`
  flex: 1;
  margin: 0 15px;
`;

export const SecondBackground = styled.div`
  background-color: #e3e5ee;
  width: 1920px;
  left: 50%;
  -webkit-transform: translateX(-50%);
`;

export const RelativeSecondBackgroundWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow: visible;
`;

export const MainPage2ndBox = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 10px;
  background-color: #e3e5ee;
  padding-bottom: 169px;
`;

export const MarginContainer = styled.div`
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LecturesBoxContainer = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const LecturesBox = styled.div`
  margin: 30px 20px;
  width: 400px;
`;

export const LecturesHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const LecturesTitle = styled.div`
  margin: 25px 0px 0px 50px;
  ${typo.header2}
  color: ${(props: Props) => props.theme.color.primary};
`;

export const LecturesHeaderCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  opacity: 0.1;
  background-color: ${(props: Props) => props.theme.color.primary};
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 0;
  left: 0;
`;

export const LecturesContent = styled.div`
  border-left: 1px solid rgba(0, 0, 0, .4);
  margin: 20px 0px 0px 30px;
`;

export const Lecture = styled.div`
  margin: 15px 0px 15px 30px;
  display: flex;
  align-items: flex-start;
`;

export const LectureNumber = styled.div`
  ${typo.score2}
  line-height: ${(props: Props) => props.theme.fontSize.score2}px;
  ${media.tablet`
    line-height: ${(props: Props) => props.theme.fontSize.tablet.score2}px;
  `}
  ${media.phone`
    line-height: ${(props: Props) => props.theme.fontSize.mobile.score2}px;
  `}
  margin-right: 10px;
`;

export const LectureName = styled.div`
  font-size: 22px;
  ${media.tablet`
    font-size: 16px;
  `}
  ${media.phone`
    font-size: 18px;
  `}
`;
export const LectureDescription = styled.div`
  ${typo.body2}
`;

export const MainPage3rdBox = styled.div`
  position: relative;
  background-color: ${(props: Props) => props.theme.color.grayBackground1};
  height: 500px;
`;

export const BackgroundsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const GrayBackground = styled.div`
  width: 100%;
  height: 264px;
  background-color: ${(props: Props) => props.theme.color.grayBackground2};
`;
