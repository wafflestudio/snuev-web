import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url(https://fonts.googleapis.com/earlyaccess/nanumgothic.css);
  @import url(//fonts.googleapis.com/earlyaccess/nanummyeongjo.css);

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: sans-serif;
    color: #222222;
  }

  body.fontLoaded {
    font-family: 'Nanum Gothic', sans-serif;
  }

  body.fontLoaded h1, h2 {
    font-family: 'Nanum Myeongjo', serif;
  }

  #app {
    background-color: #ffffff;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
