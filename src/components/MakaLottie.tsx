import Lottie from 'react-lottie';
import makaLottie from '@assets/images/main_maka.json';
import styled, { keyframes } from 'styled-components';

function MakaLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: makaLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container>
      <Lottie options={defaultOptions} width={500} height={500} />
    </Container>
  );
}

export default MakaLottie;

// animations
const moveTop = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, 20px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const Container = styled.div`
  animation-fill-mode: both;
  animation-duration: 900ms;
  animation-delay: 600ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: ${moveTop};
  z-index: 1;
`;
