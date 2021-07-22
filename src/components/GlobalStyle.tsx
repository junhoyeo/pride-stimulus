import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    word-break: keep-all;
    font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont,
      'Helvetica Neue', Roboto, Helvetica,
      'Apple SD Gothic Neo', 'Noboto Neue', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    -webkit-user-drag: none;
  }

  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  input {
    outline: 0;
  }

  button {
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;
