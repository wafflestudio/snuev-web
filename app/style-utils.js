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
