import { css } from 'styled-components';

export const sizes = {
  tablet: 1060,
  phone: 768,
};

export const media = Object.keys(sizes).reduce((acc, label) => { /* eslint no-param-reassign: ["error", { "props": false }] */
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] - 1}px) {
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
    ${media.tablet`
      font-size: ${(props) => props.theme.fontSize.tablet.header1}px;
    `}
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.header1}px;
    `}
  `,
  header2: css`
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-size: ${(props) => props.theme.fontSize.header2}px;
    color: ${(props) => props.theme.color.header2};
    ${media.tablet`
      font-size: ${(props) => props.theme.fontSize.tablet.header2}px;
    `}
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.header2}px;
    `}
  `,
  header3: css`
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-size: ${(props) => props.theme.fontSize.header3}px;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    color: ${(props) => props.theme.color.header3};
    ${media.tablet`
      font-size: ${(props) => props.theme.fontSize.tablet.header3}px;
    `}
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.header3}px;
    `}
  `,
  score1: css`
    font-family: ${(props) => props.theme.fontFamily.number};
    font-size: ${(props) => props.theme.fontSize.score1}px;
    font-weight: 300;
    color: ${(props) => props.theme.color.score1};
    ${media.tablet`
      font-size: ${(props) => props.theme.fontSize.tablet.score1}px;
    `}
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.score1}px;
    `}
  `,
  score2: css`
    font-family: ${(props) => props.theme.fontFamily.number};
    font-size: ${(props) => props.theme.fontSize.score2}px;
    font-weight: 300;
    color: ${(props) => props.theme.color.score2};
    ${media.tablet`
      font-size: ${(props) => props.theme.fontSize.tablet.score2}px;
    `}
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.score2}px;
    `}
  `,
  score3: css`
    font-family: ${(props) => props.theme.fontFamily.number};
    font-size: ${(props) => props.theme.fontSize.score3}px;
    font-weight: 300;
    color: ${(props) => props.theme.color.score3};
    ${media.tablet`
      font-size: ${(props) => props.theme.fontSize.tablet.score3}px;
    `}
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.score3}px;
    `}
  `,
  body1: css`
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-size: ${(props) => props.theme.fontSize.body1}px;
    color: ${(props) => props.theme.color.body1};
    ${media.tablet`
      font-size: ${(props) => props.theme.fontSize.tablet.body1}px;
    `}
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.body1}px;
    `}
  `,
  body2: css`
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-size: ${(props) => props.theme.fontSize.body2}px;
    color: ${(props) => props.theme.color.body2};
    ${media.tablet`
      font-size: ${(props) => props.theme.fontSize.tablet.body2}px;
    `}
    ${media.phone`
      font-size: ${(props) => props.theme.fontSize.mobile.body2}px;
    `}
  `,
};
