import { css } from 'styled-components';

const sizes = {
  desktop: 1060,
  tablet: 768,
  phone: 376,
};

export const media = Object.keys(sizes).reduce((acc, label) => { /* eslint no-param-reassign: ["error", { "props": false }] */
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const typo = {
  header1: css`
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-size: ${(props) => props.theme.fontSize.header1}px;
    color: ${(props) => props.theme.color.header1};
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.header1}px;
    `}
  `,
  header2: css`
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-size: ${(props) => props.theme.fontSize.header2}px;
    color: ${(props) => props.theme.color.header2};
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.header2}px;
    `}
  `,
  header3: css`
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-size: ${(props) => props.theme.fontSize.header3}px;
    color: ${(props) => props.theme.color.header3};
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.header3}px;
    `}
  `,
  score1: css`
    font-family: ${(props) => props.theme.fontFamily.number};
    font-size: ${(props) => props.theme.fontSize.score1}px;
    color: ${(props) => props.theme.color.score1};
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.score1}px;
    `}
  `,
  score2: css`
    font-family: ${(props) => props.theme.fontFamily.number};
    font-size: ${(props) => props.theme.fontSize.score2}px;
    color: ${(props) => props.theme.color.score2};
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.score2}px;
    `}
  `,
  score3: css`
    font-family: ${(props) => props.theme.fontFamily.number};
    font-size: ${(props) => props.theme.fontSize.score3}px;
    color: ${(props) => props.theme.color.score3};
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.score3}px;
    `}
  `,
  body1: css`
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-size: ${(props) => props.theme.fontSize.body1}px;
    color: ${(props) => props.theme.color.body1};
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.body1}px;
    `}
  `,
  body2: css`
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-size: ${(props) => props.theme.fontSize.body2}px;
    color: ${(props) => props.theme.color.body2};
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.body2}px;
    `}
  `,
};
