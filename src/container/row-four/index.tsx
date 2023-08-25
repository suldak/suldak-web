import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import { Color } from '@styles/Colors';

// image & icon
import Cocktail from '@assets/images/cocktail.svg';

// components
import RowContainer from '@components/RowContainer';
import Input from '@components/Input';

// hooks
import useInput from '@hooks/useInput';

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
  const emailInput = useInput('');

  // email 전송
  const submitEamil = () => {
    console.log(emailInput.value);
  };

  return (
    <RowContainer>
      <Container ref={ref}>
        {shouldRenderInner && (
          <>
            <span className="title">술닥술닥이 출시될 때 가장 먼저 알려드릴게요!</span>

            <div className="submit-box">
              <Input value={emailInput.value} onChange={emailInput.onChange} />
              <SubmitButton onClick={submitEamil}>확인</SubmitButton>
            </div>
            <img className="cocktail" src={Cocktail} />
            <Floor />
          </>
        )}
      </Container>
    </RowContainer>
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
const Floor = styled.div`
  width: 100%;
  height: 400px;
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
`;
