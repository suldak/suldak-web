import React from "react";
import styled from "styled-components";

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minWidth?: string;
}

const Input = ({ value, onChange, minWidth }: IProps) => {
  return (
    <Container
      placeholder="이메일 주소를 입력해주세요."
      value={value}
      onChange={onChange}
      isActive={value !== ""}
      minWidth={minWidth}
    ></Container>
  );
};

export default Input;

const Container = styled.input<{ isActive?: boolean; minWidth?: string }>`
  /* max-width: 731px; */
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "730px")};
  /* min-width: 730px; */
  border: 1px solid ${(props) => (props.isActive ? "#26B1C6" : "#e1e1e1")};
  padding: 30px 40px;
  border-radius: 5rem;

  font-size: 20px;
  color: black;

  &::placeholder {
    color: #8e8e8e;
  }

  &:focus {
    outline: none;
  }
`;
