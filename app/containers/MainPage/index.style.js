// @flow
import styled from 'styled-components';
import { Link } from 'react-router';
import { media, typo } from '../../style-utils';
import MainSearchBgSrc from '../../images/mainsearchbg.png';
import MainSearchBgTablet from '../../images/img-main-tablet-768-1199-px.png';
import MainSearchBgPhone from '../../images/img-main-mobile-320-767-px.png';
import SearchIcon from '../../images/ic-search@2x.png';

type Props = {
  theme: any,
};

export const MainSearchBg = styled.div`
  width: 1920px;
  height: 500px;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  background-image: url(${MainSearchBgSrc});

  ${media.tablet`
    width: 1199px;
    background: url(${MainSearchBgTablet}) no-repeat 50% 50%;
  `}

  ${media.phone`
    width: 767px;
    background: url(${MainSearchBgPhone}) no-repeat 50% 50%;
  `}
`;

export const MainSearchBgRelativeWrapper = styled.div`
  position: relative;
  height: 500px;
  overflow: visible;
`;

export const MainSearchBgWrapper = styled.div`
  overflow: hidden;
  background-color: ${(props: Props) => props.theme.color.grayBackground2};
`;

export const SearchInput = styled.input`
  position: absolute;
  width: 480px;
  padding: 17px 55px 16px 0px;
  top: 214px;
  left: 0;
  right: 0;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  font-size: 18px;
  font-weight: 500;
  background: url(${SearchIcon}) no-repeat 99% 50%;
  background-size: 48px 48px;
  &:focus {
    outline: none;
  }

  ${media.phone`
    width: 310px;
    font-size: 14px;
  `}
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
    margin: 0 28px;
  `}
`;

export const EvaluationsContent = styled.div`
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.05);
  padding: 35px 20px 45px;
  background-color: ${(props: Props) => props.theme.color.white};
  ${media.tablet`
    margin: 0 16px;
    padding: 20px 8px 30px;
  `}
  ${media.phone`
    margin: 0 28px;
    padding: 24px 20px 4px;
  `}
`;


export const FlexContainer = styled.div`
  display: flex;

  ${media.phone`
    flex-direction: column;
  `}
`;

export const FlexItem = styled.div`
  flex: 1;
  margin: 0 15px;

  ${media.tablet`
    margin: 0 10px;
  `}

  ${media.phone`
    margin-bottom: 20px;
  `}
`;

export const MainPage2ndBox = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 10px;
  background-color: ${(props: Props) => props.theme.color.grayBackground2};
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

  ${media.tablet`
    margin: 10px 25px;
    width: 300px;
  `}

  ${media.phone`
    margin: 10px 28px;
    width: 100%;
  `}
`;

export const LecturesHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;

  ${media.tablet`
    height: 60px;
  `}

  ${media.phone`
    height: 80px;
  `}
`;

export const LecturesTitle = styled.div`
  margin: 25px 0px 0px 50px;
  ${typo.header2}
  color: ${(props: Props) => props.theme.color.primary};

  ${media.tablet`
    margin: 5px 0px 0px 30px;
  `}

  ${media.phone`
    margin: 25px 0px 0px 30px;
  `}
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

  ${media.tablet`
    width: 60px;
    height: 60px;
    border-radius: 30px;
  `}

  ${media.phone`
    width: 80px;
    height: 80px;
    border-radius: 40px;
  `}
`;

export const LecturesContent = styled.div`
  border-left: 1px solid rgba(0, 0, 0, .4);
  margin: 20px 0px 0px 30px;
`;

export const Lecture = styled.div`
  margin: 15px 0px 15px 30px;
  display: flex;
  align-items: flex-start;

  ${media.phone`
    margin: 15px 0px 15px 10px;
  `}
`;

export const LectureNumber = styled.div`
  ${typo.score2}
  line-height: ${(props: Props) => props.theme.fontSize.score2}px;
  ${media.tablet`
    line-height: ${(props: Props) => props.theme.fontSize.tablet.score2}px;
  `}
  ${media.phone`
    line-height: ${(props: Props) => props.theme.fontSize.mobile.score2}px;
    font-size: 20px;
  `}
  margin-right: 10px;
`;

export const LectureName = styled(Link)`
  font-size: 22px;
  cursor: pointer;
  color: ${(props: Props) => props.theme.color.black};
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
