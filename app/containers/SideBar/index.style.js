import styled from 'styled-components';
import { media, typo } from '../../style-utils';

export const SideBarWrapper = styled.aside`
  position: fixed;
  width: ${(props) => props.theme.sideBarMaxWidth}px;
  height: calc(100vh - ${(props) => props.theme.navBarHeight}px);
  padding-top: 20px;
  margin-top: ${(props) => props.theme.navBarHeight}px;
  overflow: auto;
  ${media.tablet`
    width: ${(props) => props.theme.tabletSideBarMaxWidth}px;
  `}
  ${media.phone`
    width: 100%;
    height: calc(100vh - ${(props) => props.theme.mobileNavBarHeight}px);
    margin-top: ${(props) => props.theme.mobileNavBarHeight}px;
    left: -100%;
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
`;

export const LectureScore = styled.div`
  ${typo.score3}
`;

export const LectureDetail = styled.div`
  margin-left: 10px;
  overflow: hidden;
`;

export const LectureName = styled.div`
  ${typo.header3}
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LectureMeta = styled.div`
  display: flex;
`;

export const LectureMetaEntry = styled.div`
  ${typo.body2}
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
