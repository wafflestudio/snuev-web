import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  position: fixed;
  width: ${(props) => props.theme.sideBarMaxWidth}px;
  height: calc(100vh - ${(props) => props.theme.navBarHeight}px);
  padding-top: 30px;
  margin-top: ${(props) => props.theme.navBarHeight}px;
  overflow: auto;
`;

export const LectureWrapper = styled.div`
  display: flex;
  padding: 10px 0 20px 0;
`;

export const LectureScore = styled.div`
  font-family: ${(props) => props.theme.fontFamily.number};
  font-size: ${(props) => props.theme.fontSize.score3}px;
  line-height: ${(props) => props.theme.fontSize.score3}px;
  color: ${(props) => props.theme.color.score3};
`;

export const LectureDetail = styled.div`
  margin-left: 10px;
  overflow: hidden;
`;

export const LectureName = styled.div`
  font-size: ${(props) => props.theme.fontSize.header3}px;
  line-height: ${(props) => props.theme.fontSize.score3}px;
  color: ${(props) => props.theme.color.header3};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LectureMeta = styled.div`
  display: flex;
`;

export const LectureMetaEntry = styled.div`
  font-size: ${(props) => props.theme.fontSize.body2}px;
  color: ${(props) => props.theme.color.body2};
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
