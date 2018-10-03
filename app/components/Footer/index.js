// @flow
import React from 'react';
import messages from './messages';
import {
  Wrapper,
  SnuevTeamWrapper,
  SnuevGithubWrapper,
  DeveloperWrapper,
} from './index.style';

export default (props: { accent?: boolean }) => (
  <Wrapper accent={props.accent}>
    <SnuevTeamWrapper>
      {messages.snuevTeam}
    </SnuevTeamWrapper>
    <SnuevGithubWrapper href="https://github.com/wafflestudio/snuev-web">
      {messages.snuevGithub}
    </SnuevGithubWrapper>
    <DeveloperWrapper>
      {messages.developer}
    </DeveloperWrapper>
  </Wrapper>
);
