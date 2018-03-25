import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:300');

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
    font-family: sans-serif;
  }

  body.fontLoaded h1, h2 {
    font-family: serif;
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
