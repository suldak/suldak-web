import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import { Color } from '@styles/Colors';

import Roni from '@assets/images/row-two-roni.svg';
import RoniTalk from '@assets/images/row-two-talk.svg';
import RowTwoImageOne from '@assets/images/row-two-image1.svg';

// responsive
import { Desktop, Tablet, Mobile } from '@hooks/useResponsive';

// components
import RowContainer from '@components/RowContainer';
import Text from '@components/Text';

const RowTwo = () => {
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
            <RowTwoDesktop />

            {/* tablet */}
            {/* mobile */}
          </>
        )}
      </Container>
    </RowContainer>
  );
};

const RowTwoDesktop = () => {
  return (
    <Desktop>
      <div className="title-container">
        <Text
          color={Color.textColor}
          fontSize="52px"
          weight="bold"
          margin="0 0 15px 0"
          animate
          animateDelay="600ms"
          animateDuration="900ms"
        >
          취향저격 술추천
        </Text>
        <div className="sub-title-container">
          <Text fontSize="18px" weight="medium" textAlign="left">
            현재 나의 기분이나 생각나는 술을 검색하면
          </Text>
          <Text fontSize="18px" weight="medium" textAlign="left">
            지금 나에게 딱 맞는 술을 추천해요.
          </Text>
        </div>
      </div>
      <div className="row-two-image-box">
        <Text fontSize="12px" color="#8e8e8e" margin="0 0 10px 0">
          *개발중인 화면으로 UI 등은 변경될 수 있습니다.
        </Text>
        <img className="row-two-image-one" src={RowTwoImageOne} />
      </div>
      <div className="row-two-roni-box">
        <img src={RoniTalk} className="row-two-image-roni-talk" />
        <img src={Roni} className="row-two-image-roni" />
      </div>
    </Desktop>
  );
};

export default RowTwo;

// animations
const moveTop = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, 20px);
  }
  100% {
    opacity: 1;
    /* transform: none; */
  }
`;

const moveTopMobileImage = keyframes`
  0% {
    opacity: 0;
    transform: translate(100px, 120px);
  }
  100% {
    opacity: 1;
    transform: translate(100px, 100px);
  }
`;

const moveTopRoni = keyframes`
  0% {
    opacity: 0;
    transform: translate(120px, 190px);
  }
  100% {
    opacity: 1;
    transform: translate(120px, 100px);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 600px;
  /* height: 100%; */
  background-color: white;

  .row-two-image-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: translate(100px, 100px);

    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 1200ms;
    animation-iteration-count: 1;
    animation-name: ${moveTopMobileImage};

    .row-two-image-des {
      font-size: 12px;
      color: #8e8e8e;
      margin-bottom: 10px;
    }

    .row-two-image-one {
      width: 300px;
      z-index: 1;
    }
  }

  .row-two-roni-box {
    display: flex;
    flex-direction: column;
    transform: translate(120px, 170px);

    /* animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 1500ms;
    animation-iteration-count: 1;
    animation-name: ${moveTopRoni}; */

    .row-two-image-roni {
      z-index: 2;
    }
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
      font-size: 52px;
      font-weight: bold;
      color: ${Color.textColor};
      margin-bottom: 20px;

      animation-fill-mode: both;
      animation-duration: 900ms;
      animation-delay: 600ms;
      animation-iteration-count: 1;
      animation-name: ${moveTop};
    }
    .sub-title-container {
      display: flex;
      flex-direction: column;
      line-height: 25px;

      animation-fill-mode: both;
      animation-duration: 900ms;
      animation-delay: 900ms;
      animation-iteration-count: 1;
      opacity: 1;
      animation-name: ${moveTop};

      .sub-title {
        font-size: 18px;
        font-weight: medium;
      }
    }
  }
`;
