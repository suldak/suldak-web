import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import { Color } from "@styles/Colors";

// image & icon
import RowThreeImageOne from "@assets/images/row-three-image1.svg";
import RowThreeImageTwo from "@assets/images/row-three-image2.svg";
import RowThreeImageThree from "@assets/images/row-three-image3.svg";
import Maka from "@assets/images/row-three-maka.svg";
import MakaTalk from "@assets/images/row-three-talk.svg";

// responsive
import { Desktop, Tablet, Mobile } from "@hooks/useResponsive";

// components
import RowContainer from "@components/RowContainer";
import Text from "@components/Text";

const RowThree = () => {
  const [shouldRenderInner, setShouldRenderInner] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setShouldRenderInner(true);
    }
  }, [inView]);
  return (
    <RowContainer>
      <Container ref={ref}>
        {shouldRenderInner && (
          <>
            {/* desktop */}
            <RowThreeDesktop />
          </>
        )}
      </Container>
    </RowContainer>
  );
};

const RowThreeDesktop = () => {
  return (
    <Desktop>
      <div className="title-box">
        <Text
          fontSize="52px"
          weight="bold"
          color="#090909"
          animate
          animateDelay="600ms"
          animateDuration="900ms"
        >
          술친구 만들기
        </Text>
        <Text
          fontSize="18px"
          weight="medium"
          color="#090909"
          animate
          animateDelay="900ms"
          animateDuration="900ms"
        >
          나누고 싶은 이야기 주제를 선택해 모임에 참여해요. 내가 모임을 만들
          수도 있어요.
        </Text>
      </div>
      <div className="row-three-image-box">
        <img className="row-three-image one" src={RowThreeImageOne} />
        <img className="row-three-image two" src={RowThreeImageTwo} />
        <img className="row-three-image three" src={RowThreeImageThree} />
      </div>
      <div className="row-two-maka-box">
        <img className="row-three-image-maka-talk" src={MakaTalk} />
        <img className="row-three-image-maka" src={Maka} />
      </div>
    </Desktop>
  );
};

export default RowThree;

// animations
const moveTop = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, 20px);
  }
  100% {
    opacity: 1;
  }
`;

const moveTopMaka = keyframes`
  0% {
    opacity: 0;
    transform: translate(530px, 390px);
  }
  100% {
    opacity: 1;
    transform: translate(530px, 320px);
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1000px;
  background-color: #f3e9a3;
  padding: 130px 0;

  .one {
    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 1200ms;
    animation-iteration-count: 1;
    animation-name: ${moveTop};
  }
  .two {
    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 1500ms;
    animation-iteration-count: 1;
    animation-name: ${moveTop};
  }
  .three {
    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 1800ms;
    animation-iteration-count: 1;
    animation-name: ${moveTop};
  }

  .title-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 60px;

    .title {
      font-size: 52px;
      font-weight: bold;
      color: #090909;

      animation-fill-mode: both;
      animation-duration: 900ms;
      animation-delay: 600ms;
      animation-iteration-count: 1;
      animation-name: ${moveTop};
    }

    .sub-title {
      font-size: 18px;
      font-weight: medium;
      color: #090909;

      animation-fill-mode: both;
      animation-duration: 900ms;
      animation-delay: 900ms;
      animation-iteration-count: 1;
      animation-name: ${moveTop};
    }
  }

  .row-three-image-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 50px;

    .row-three-image {
      width: 20%;
    }
  }

  .row-two-maka-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: translate(530px, 320px);

    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 2100ms;
    animation-iteration-count: 1;
    animation-name: ${moveTopMaka};

    .row-three-image-maka {
      z-index: 1;
    }
  }
`;
