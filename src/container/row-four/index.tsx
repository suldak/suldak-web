import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import { Color } from "@styles/Colors";

// image & icon
import Cocktail from "@assets/images/cocktail.svg";

// components
import RowContainer from "@components/RowContainer";
import Input from "@components/Input";
import Text from "@components/Text";

// hooks
import useInput from "@hooks/useInput";
import { Desktop, Tablet, Mobile } from "@hooks/useResponsive";

const RowFour = () => {
  const [shouldRenderInner, setShouldRenderInner] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setShouldRenderInner(true);
    }
  }, [inView]);
  const emailInput = useInput("");

  // email 전송
  const submitEamil = () => {
    console.log(emailInput.value);
  };

  return (
    <RowContainer>
      <Container ref={ref}>
        {shouldRenderInner && (
          <>
            {/* Desktop */}
            <RowFourDesktop
              emailValue={emailInput.value}
              emailOnChange={emailInput.onChange}
              onSubmitEmail={submitEamil}
            />

            {/* Mobile */}
            <RowFourMobile
              emailValue={emailInput.value}
              emailOnChange={emailInput.onChange}
              onSubmitEmail={submitEamil}
            />
          </>
        )}
      </Container>
    </RowContainer>
  );
};

interface IProps {
  emailValue: string;
  emailOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitEmail: () => void;
}
const RowFourDesktop = ({
  emailValue,
  emailOnChange,
  onSubmitEmail,
}: IProps) => {
  return (
    <Desktop>
      <span className="title">
        술닥술닥이 출시될 때 가장 먼저 알려드릴게요!
      </span>

      <div className="submit-box">
        <Input value={emailValue} onChange={emailOnChange} />
        <SubmitButton onClick={onSubmitEmail}>확인</SubmitButton>
      </div>
      <img className="cocktail" src={Cocktail} />
      <Floor />
    </Desktop>
  );
};

const RowFourMobile = ({
  emailValue,
  emailOnChange,
  onSubmitEmail,
}: IProps) => {
  return (
    <Mobile>
      <div className="mobile-wrap">
        <div className="mobile-title-wrap">
          <Text fontSize="26px" weight="bold">
            술닥술닥이 출시될 때
          </Text>
          <Text fontSize="26px" weight="bold">
            가장 먼저 알려드릴게요!
          </Text>
        </div>
        <div className="mobile-submit-box">
          <Input value={emailValue} onChange={emailOnChange} minWidth="400px" />
          <SubmitButton onClick={onSubmitEmail} className="mobile-btn">
            확인
          </SubmitButton>
        </div>
        <img className="cocktail" src={Cocktail} />
        <Floor isMobile={true} />
      </div>
    </Mobile>
  );
};

export default RowFour;

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

const moveTopFloor = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, 70px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 50px);
  }
`;

const moveTopCocktail = keyframes`
  0%{
    opacity: 0;
    transform: translate(0px, 100px);
  }
  100%{
    opacity: 1;
    transform: translate(0px, 80px);
  }
`;
const Floor = styled.div<{ isMobile?: boolean }>`
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? "200px" : "400px")};
  border-radius: 30%;
  transform: translate(0, 50px);
  background-color: #b09f8b;

  animation-fill-mode: both;
  animation-duration: 900ms;
  animation-delay: 900ms;
  animation-iteration-count: 1;
  animation-name: ${moveTopFloor};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 638px;
  background-color: #f2f2e3;
  position: relative;
  z-index: 2;

  .mobile-wrap {
    padding: 50px 0 0 0;
    display: flex;
    flex-direction: column;

    .mobile-title-wrap {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
    }
  }

  .title {
    font-size: 52px;
    font-weight: bold;
    color: #000000;
    margin-top: 130px;
    margin-bottom: 50px;

    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 600ms;
    animation-iteration-count: 1;
    animation-name: ${moveTop};
  }

  .submit-box {
    display: flex;
    align-items: center;
    gap: 20px;

    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 900ms;
    animation-iteration-count: 1;
    animation-name: ${moveTop};
  }

  .mobile-submit-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 900ms;
    animation-iteration-count: 1;
    animation-name: ${moveTop};
  }

  .cocktail {
    z-index: 2;
    transform: translate(0, 80px);

    animation-fill-mode: both;
    animation-duration: 900ms;
    animation-delay: 1200ms;
    animation-iteration-count: 1;
    animation-name: ${moveTopCocktail};
  }
`;

const SubmitButton = styled.button`
  border-radius: 5rem;
  border: none;
  background-color: #27b1c6;
  padding: 30px 40px;
  min-width: 170px;

  font-size: 24px;
  color: white;

  &:hover {
    cursor: pointer;
  }

  .mobile-btn {
    padding: 10px 20px !important;
  }
`;
