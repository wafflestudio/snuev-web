// @flow
import styled from 'styled-components';

import type { Theme } from '../../theme';
import { media } from '../../style-utils';

export const Wrapper = styled.div`
  width: 100%;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  ${media.phone`
    height: 18px;
  `}
`;

export const SnuevTeamWrapper = styled.div`
  width: 132px;
  height: 19px;
  opacity: 0.4;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
  margin-right: 30px;

  ${media.phone`
    width: 122px;
    height: 18px;
    font-size: 11px;
    margin-right: 20px;
  `}
`;

export const SnuevGithubWrapper = styled.div`
  width: 86px;
  height: 19px;
  opacity: 0.4;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
  margin-right: 30px;

  ${media.phone`
    width: 80px;
    height: 18px;
    font-size: 11px;
    margin-right: 20.5px;
  `}
`;

export const DeveloperWrapper = styled.div`
  width: 87px;
  height: 19px;
  opacity: 0.4;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);

  ${media.phone`
    width: 80px;
    height: 18px;
    font-size: 11px;
  `}
`;
