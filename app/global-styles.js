import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url(https://fonts.googleapis.com/earlyaccess/nanumgothic.css);

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Nanum Gothic', sans-serif;
    color: #111111;
  }

  body.fontLoaded {
    font-family: 'Nanum Gothic', sans-serif;
  }

  #app {
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
