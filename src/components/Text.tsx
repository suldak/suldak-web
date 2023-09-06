import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Color } from '@styles/Colors';

interface IProps {
  color?: string;
  fontSize?: string;
  weight?: string;
  lineHeight?: string;
  textAlign?: string;
  margin?: string;
  letterSpacing?: string;
  animate?: boolean;
  animateDuration?: string;
  animateDelay?: string;
  children: React.ReactNode;
}

const Text = ({
  color,
  fontSize,
  weight,
  lineHeight,
  textAlign,
  margin,
  letterSpacing,
  animate,
  animateDuration,
  animateDelay,
  children,
}: IProps) => {
  return (
    <TextStyle
      color={color}
      fontSize={fontSize}
      weight={weight}
      lineHeight={lineHeight}
      textAlign={textAlign}
      margin={margin}
      letterSpacing={letterSpacing}
      animate={animate}
      animateDuration={animateDuration}
      animateDelay={animateDelay}
    >
      {children}
    </TextStyle>
  );
};

export default Text;

const moveTop = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, 20px);
  }
  100% {
    opacity: 1;
  }
`;

const TextStyle = styled.span<IProps>`
  color: ${(props) => (props.color ? props.color : Color.textColor)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '1.5')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : '0')};
  margin: ${(props) => (props.margin ? props.margin : '0')};

  animation-name: ${moveTop};
  animation-duration: ${(props) => (props.animateDuration ? props.animateDuration : '900ms')};
  animation-delay: ${(props) => (props.animateDelay ? props.animateDelay : '0ms')};
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;
