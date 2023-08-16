import { createGlobalStyle } from 'styled-components';

// fonts
// import PretendardBold from '@assets/fonts/Pretendard-Bold.otf'

const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'Pretendard-Bold';
    src: local('Pretendard-Bold');
    font-style: normal;
  } */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    width: 100vw;
    /* height: 100vh; */
    background-color: white;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  li, ul, ol{
    list-style: none;
  }
`;

export default GlobalStyle;
