// @flow
import styled from 'styled-components';

import type { Theme } from '../../theme';
import { media } from '../../style-utils';

// background: ${(props: { accent: boolean, theme: Theme }) => props.accent ? props.theme.color.secondary : props.theme.color.white}
export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: {theme: Theme, accent?: boolean}) => props.accent ? props.theme.color.secondary : props.theme.color.white};

  ${media.phone`
    height: 54px;
  `}
`;

export const SnuevTeamWrapper = styled.a`
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

export const SnuevGithubWrapper = styled.a`
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

export const DeveloperWrapper = styled.a`
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
