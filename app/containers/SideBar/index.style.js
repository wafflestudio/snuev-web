import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  flex-shrink: 0.3;
  width: ${(props) => props.theme.sideBarMaxWidth}px;
  height: 100%;
  margin-right: 60px;
  padding-top: 30px;
`;

export const LectureWrapper = styled.div`
  display: flex;
  padding: 10px 0 20px 0;
`;

export const LectureScore = styled.text`
  font-size: ${(props) => props.theme.fontSize.score3}px;
  line-height: ${(props) => props.theme.fontSize.score3}px;
`;

export const LectureDetail = styled.div`
  margin-left: 10px;
  overflow: hidden;
`;

export const LectureName = styled.text`
  font-size: ${(props) => props.theme.fontSize.header3}px;
  line-height: ${(props) => props.theme.fontSize.score3}px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LectureMeta = styled.div`
  display: flex;
`;

export const LectureMetaEntry = styled.text`
  font-size: ${(props) => props.theme.fontSize.body2}px;
  margin-right: 12px;
`;
