// @flow

export type Theme = {
  appMaxWidth: number,
  navBarHeight: number,
  mobileNavBarHeight: number,
  sideBarMaxWidth: number,
  tabletSideBarMaxWidth: number,
  color: {
    primary: string,
    black: string,
    white: string,
    gray: string,
    lightGray: string,
    grayBackground1: string,
    grayBackground2: string,
    header1: string,
    header2: string,
    header3: string,
    body1: string,
    body2: string,
    score1: string,
    score2: string,
    score3: string,
    hint: string,
    error: string,
    // signup button
    hover1: string,
    focus1: string,
    // department input
    hover3: string,
    focus3: string,
  },
  fontSize: {
    headline: string,
    title: string,
    body: string,
    label: string,
    header1: number,
    header2: number,
    header3: number,
    body1: number,
    body2: number,
    score1: number,
    score2: number,
    score3: number,
    tablet: {
      header1: number,
      header2: number,
      header3: number,
      body1: number,
      body2: number,
      score1: number,
      score2: number,
      score3: number,
    },
    mobile: {
      header1: number,
      header2: number,
      header3: number,
      body1: number,
      body2: number,
      score1: number,
      score2: number,
      score3: number,
    },
  },
  fontFamily: {
    sansSerif: string,
    number: string,
  },
  fontWeight: {
    bold: number,
  },
};

const theme = {
  appMaxWidth: 1060,
  navBarHeight: 70,
  mobileNavBarHeight: 120,
  sideBarMaxWidth: 300,
  tabletSideBarMaxWidth: 200,
  color: {
    primary: '#4f48c4',
    black: '#4a4a4a',
    white: '#ffffff',
    gray: '#666666',
    lightGray: '#d8d8d8',
    grayBackground1: '#f0f1f5',
    grayBackground2: '#e3e5ee',
    header1: 'rgba(0,0,0,.7)',
    header2: 'rgba(0,0,0,.7)',
    header3: 'rgba(0,0,0,.6)',
    body1: 'rgba(0,0,0,.8)',
    body2: 'rgba(0,0,0,.6)',
    score1: 'rgba(0,0,0,.8)',
    score2: 'rgba(0,0,0,.8)',
    score3: 'rgba(0,0,0,.8)',
    hint: 'rgba(0,0,0,.4)',
    error: '#e54459',
    // signup button
    hover1: '#F1F1FB',
    focus1: '#D5D3F1',
    // department input
    hover3: '#F4F4F6',
    focus3: '#EDECF9',
  },
  fontSize: {
    headline: '32px',
    title: '24px',
    body: '16px',
    label: '14px',
    header1: 40,
    header2: 30,
    header3: 18,
    body1: 16,
    body2: 14,
    score1: 48,
    score2: 34,
    score3: 26,
    tablet: {
      header1: 30,
      header2: 24,
      header3: 15,
      body1: 15,
      body2: 12,
      score1: 36,
      score2: 26,
      score3: 20,
    },
    mobile: {
      header1: 24,
      header2: 22,
      header3: 14,
      body1: 15,
      body2: 14,
      score1: 38,
      score2: 28,
      score3: 26,
    },
  },
  fontFamily: {
    sansSerif: '"Noto Sans KR", "Noto Sans CJK KR", "Apple SD Gothic Neo", "Malgun Gothic", Roboto, Noto, sans-serif',
    number: '\'Lato\', sans-serif',
  },
  fontWeight: {
    bold: 500,
  },
};

export default theme;
