import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:300');
  @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    min-height: 100vh;
    width: 100%;
    position: relative;
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
    min-height: 100%;
    min-height: 100vh;
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
