// @flow

import * as React from 'react';
import { Map } from 'immutable';

import {
  LectureWrapper,
  LectureScore,
  LectureDetail,
  LectureName,
  LectureMeta,
  LectureMetaEntry,
  LectureStats,
  LectureStatEntry,
} from './index.style';

type Props = {
  lecture: Map<string, any>,
};

export default ({ lecture }: Props) => (
  <LectureWrapper>
    <LectureScore>{lecture.get('score').toFixed(1)}</LectureScore>
    <LectureDetail>
      <LectureName>{lecture.getIn(['course', 'name'])}</LectureName>
      <LectureMeta>
        <LectureMetaEntry>{lecture.getIn(['course', 'department', 'name'])}</LectureMetaEntry>
        <LectureMetaEntry>
          {lecture.getIn(['course', 'targetGrade'])}
        </LectureMetaEntry>
        <LectureMetaEntry>{lecture.getIn(['professor', 'name'])} 교수</LectureMetaEntry>
      </LectureMeta>
      <LectureStats>
        <LectureStatEntry className="viewCount">{lecture.get('viewCount')}</LectureStatEntry>
        <LectureStatEntry className="evaluationsCount">{lecture.get('evaluationsCount')}</LectureStatEntry>
      </LectureStats>
    </LectureDetail>
  </LectureWrapper>
);
