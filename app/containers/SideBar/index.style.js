import styled from 'styled-components';
import { media, typo } from '../../style-utils';
import IconView from '../../images/ic-view@2x.png';
import IconContent from '../../images/ic-content@2x.png';

export const SideBarWrapper = styled.aside`
  position: fixed;
  width: ${(props) => props.theme.sideBarMaxWidth}px;
  height: calc(100vh - ${(props) => props.theme.navBarHeight}px);
  padding-top: 20px;
  margin-top: ${(props) => props.theme.navBarHeight}px;
  overflow: auto;
  background-color: white;
  ${media.tablet`
    width: ${(props) => props.theme.tabletSideBarMaxWidth}px;
  `}
  ${media.phone`
    width: 100%;
    height: calc(100vh - ${(props) => props.theme.mobileNavBarHeight}px);
    margin-top: ${(props) => props.theme.mobileNavBarHeight}px;
    padding: 0 30px;
    .focusLecture & {
      display: none;
    }
  `}
`;

export const NoResultWrapper = styled.div`
  border: dashed 0.5px;
  border-color: ${(props) => props.theme.lightGray};
  height: calc(100% - 20px);
  width: 100%;
`;

export const LectureWrapper = styled.div`
  display: flex;
  padding: 10px 0 20px 0;
  ${media.phone`
    flex-direction: row-reverse;
    align-items: center;
  `}
`;

export const LectureScore = styled.div`
  ${typo.score3}
  height: ${(props) => props.theme.fontSize.score3}px;
  line-height: ${(props) => props.theme.fontSize.score3}px;
  transition: color 1s;

  a.active & {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const LectureDetail = styled.div`
  margin-left: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${media.phone`
    width: 100%;
    margin-left: 0;
  `}
`;

export const LectureName = styled.div`
  ${typo.header3}
  display: inline-block;
  border-top: 1px solid transparent;
  transition: color 1s, border 1s;

  a.active & {
    color: ${(props) => props.theme.color.primary};
    border-top-color: ${(props) => props.theme.color.primary};
  }
`;

export const LectureMeta = styled.div`
  margin-top: 8px;
  display: flex;
  ${media.tablet`
    flex-wrap: wrap;
  `}
`;

export const LectureMetaEntry = styled.div`
  ${typo.body2}
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.tablet`
    &:first-child {
      flex-basis: 100%;
    }
  `}
  ${media.phone`
    &:first-child {
      flex-basis: auto;
    }
  `}
`;

export const LectureStats = styled.div`
  margin-top: 6px;
  display: flex;
`;

export const LectureStatEntry = styled.div`
  ${typo.body2}
  color: rgba(0,0,0,0.4);
  margin-right: 15px;

  &.viewCount {
    padding-left: 25px;
    background: url(${IconView}) no-repeat 0% 50%;
    background-size: 20px 20px;
  }

  &.evaluationsCount {
    padding-left: 25px;
    background: url(${IconContent}) no-repeat 0% 50%;
    background-size: 20px 20px;
  }
`;
