import React from 'react';
import styled from 'styled-components';
import { Color } from '@styles/Colors';

interface IProps {
  color?: string;
  bgColor?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  zIndex?: string;

  children: React.ReactNode;
}

const Button = ({
  color,
  bgColor,
  padding,
  borderRadius,
  fontSize,
  fontWeight,
  zIndex,
  children,
}: IProps) => {
  return (
    <ButtonStyle
      color={color}
      bgColor={bgColor}
      padding={padding}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight={fontWeight}
      zIndex={zIndex}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button<IProps>`
  color: ${(props) => (props.color ? props.color : Color.textColor)};
  background-color: ${(props) => (props.bgColor ? props.bgColor : Color.suldakIvory)};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : '1')};
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
