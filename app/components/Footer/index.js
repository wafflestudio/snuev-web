import React from 'react';
import messages from './messages';
import {
  Wrapper,
  SnuevTeamWrapper,
  SnuevGithubWrapper,
  DeveloperWrapper,
} from './index.style';

export default () => (
  <Wrapper>
    <SnuevTeamWrapper>
      {messages.snuevTeam}
    </SnuevTeamWrapper>
    <SnuevGithubWrapper>
      {messages.snuevGithub}
    </SnuevGithubWrapper>
    <DeveloperWrapper>
      {messages.developer}
    </DeveloperWrapper>
  </Wrapper>
);
