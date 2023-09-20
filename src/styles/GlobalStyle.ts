import { createGlobalStyle, keyframes } from 'styled-components';

// fonts
// import PretendardLight from './fonts/Pretendard-Light.woff'

// animations
const fadeIn = keyframes`
  from {
    /* transform: scale(.25); */
    opacity: 0;
  }

  to {
    /* transform: scale(1); */
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Light';
    src: url('./fonts/Pretendard-Light.woff') format('woff');
    /* font-style: normal; */
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard-Light", "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    width: 100%;
    background-color: white;
    animation: ${fadeIn} 2s linear;
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
