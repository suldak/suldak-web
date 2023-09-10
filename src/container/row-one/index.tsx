import styled, { keyframes } from "styled-components";
import { Color } from "@styles/Colors";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

// responsive
import { Desktop, Tablet, Mobile } from "@hooks/useResponsive";

// image & icon
import SuldakBubble from "@assets/images/suldak-bubble.svg";
import MakaLottie from "@components/MakaLottie";

// components
import RowContainer from "@components/RowContainer";
import Text from "@components/Text";
import Button from "@components/Button";

const RowOne = () => {
  return (
    <RowContainer>
      <Container>
        {/* desktop */}
        <RowOneDesktop />

        {/* tablet */}
        <RowOneTablet />

        {/* mobile */}
        <RowOneMobile />
      </Container>
    </RowContainer>
  );
};

export default RowOne;

const RowOneDesktop = () => {
  return (
    <Desktop>
      <div className="title-container">
        <Text color="white" fontSize="82px" weight="bold" lineHeight="97px">
          이야기와 술을
          <div className="bubble-image">
            <img src={SuldakBubble} />
          </div>
        </Text>
        <Text color="white" fontSize="82px" weight="bold" lineHeight="97px">
          나누는 곳, 술닥술닥
        </Text>
      </div>

      <Text
        color="white"
        fontSize="28px"
        weight="bold"
        letterSpacing="-0.3%"
        lineHeight="36px"
        textAlign="center"
      >
        술 한잔 하고 싶다! 나만을 위한 추천 술과 곁들일 이야기를 찾아봐요
      </Text>
      <div className="noti-box">
        <MakaLottie />
        <Button
          color="white"
          bgColor="#0f4448"
          padding="24px 160px"
          borderRadius="5rem"
          fontSize="20px"
          fontWeight="bold"
          zIndex="2"
        >
          누구보다 빠르게 출시 알림 받기
        </Button>
      </div>
      <ScrollDownIcon>
        <MdKeyboardDoubleArrowDown />
      </ScrollDownIcon>
    </Desktop>
  );
};
const RowOneTablet = () => {
  return (
    <Tablet>
      <div className="title-container">
        <Text color="white" fontSize="68px" weight="bold" lineHeight="80px">
          이야기와 술을
          <div className="bubble-image">
            <img src={SuldakBubble} />
          </div>
        </Text>
        <Text color="white" fontSize="68px" weight="bold" lineHeight="80px">
          나누는 곳, 술닥술닥
        </Text>
      </div>
      <Text
        color="white"
        fontSize="28px"
        weight="bold"
        letterSpacing="-0.3%"
        lineHeight="36px"
        textAlign="center"
      >
        술 한잔 하고 싶다! 나만을 위한 추천 술과 곁들일 이야기를 찾아봐요
      </Text>
      <div className="noti-box">
        <MakaLottie />
        <Button
          color="white"
          bgColor="#0f4448"
          padding="24px 160px"
          borderRadius="5rem"
          fontSize="20px"
          fontWeight="bold"
          zIndex="2"
        >
          누구보다 빠르게 출시 알림 받기
        </Button>
      </div>
      <ScrollDownIcon>
        <MdKeyboardDoubleArrowDown />
      </ScrollDownIcon>
    </Tablet>
  );
};
const RowOneMobile = () => {
  return (
    <Mobile>
      <div className="title-container">
        <Text color="white" fontSize="40px" weight="bold" lineHeight="45px">
          이야기와 술을
          <div className="bubble-image">
            <img src={SuldakBubble} />
          </div>
        </Text>
        <Text color="white" fontSize="40px" weight="bold" lineHeight="45px">
          나누는 곳, 술닥술닥
        </Text>
      </div>
      <Text
        color="white"
        fontSize="16px"
        weight="bold"
        letterSpacing="-0.3%"
        lineHeight="22px"
        textAlign="center"
      >
        술 한잔 하고 싶다! 나만을 위한 추천 술과 곁들일 이야기를 찾아봐요
      </Text>
      <div className="noti-box">
        <MakaLottie />
        <Button
          color="white"
          bgColor="#0f4448"
          padding="24px 80px"
          borderRadius="5rem"
          fontSize="20px"
          fontWeight="bold"
          zIndex="2"
        >
          누구보다 빠르게 출시 알림 받기
        </Button>
      </div>
      <ScrollDownIcon bottom="10px">
        <MdKeyboardDoubleArrowDown />
      </ScrollDownIcon>
    </Mobile>
  );
};

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

const scaleChange = keyframes`
  0% {
    transform: scale(0.1) translate(105%, -65%);
    opacity: 0;
  }
  80% {
    transform: scale(1.2) translate(105%, -65%);
  }
  100% {
    transform: scale(1) translate(105%, -65%);
    opacity: 1;
  }
`;

const scrollDown = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0px);
  }
  100% {
    opacity: 100%;
    transform: translate(0, 20px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${Color.suldakBlue};
  padding: 100px 20px;

  .bubble-image {
    position: absolute;
    transform: translate(105%, -65%);

    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 600ms;
    animation-iteration-count: 1;
    animation-name: ${scaleChange};
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    .title {
      color: white;
      font-size: 82px;
      font-weight: bold;
      line-height: 97px;
    }
  }
  .sub-title {
    color: white;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: -0.3%;
    line-height: 36px;
    text-align: center;
  }

  .row-one-image-maka {
    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 600ms;
    animation-iteration-count: 1;
    opacity: 1;
    animation-name: ${moveTop};
    z-index: 1;
  }

  .noti-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    .noti-button {
      color: white;
      background-color: #0f4448;
      padding: 24px 160px;
      border: none;
      border-radius: 5rem;
      font-size: 20px;
      font-weight: bold;
      z-index: 2;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const ScrollDownIcon = styled.div<{ bottom?: string }>`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom : "30px")};
  color: white;
  font-size: 48px;

  animation-fill-mode: both;
  animation-duration: 2000ms;
  animation-delay: 1200ms;
  animation-iteration-count: infinite;
  animation-name: ${scrollDown};
`;
