import styled from 'styled-components';
import { Color } from '@styles/Colors';

// image & icon
import Cocktail from '@assets/images/cocktail.svg';

// components
import RowContainer from '@components/RowContainer';
import Input from '@components/Input';

// hooks
import useInput from '@hooks/useInput';

const RowFour = () => {
  const emailInput = useInput('');

  // email 전송
  const submitEamil = () => {
    console.log(emailInput.value);
  };

  return (
    <RowContainer>
      <Container>
        <span className="title">술닥술닥이 출시될 때 가장 먼저 알려드릴게요!</span>

        <div className="submit-box">
          <Input value={emailInput.value} onChange={emailInput.onChange} />
          <SubmitButton onClick={submitEamil}>확인</SubmitButton>
        </div>
        <img className="cocktail" src={Cocktail} />
        <Floor />
      </Container>
    </RowContainer>
  );
};

export default RowFour;

const Floor = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 30%;
  transform: translate(0, 50px);
  background-color: #b09f8b;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 638px;
  background-color: #f2f2e3;

  .title {
    font-size: 52px;
    font-weight: bold;
    color: #000000;
    margin-top: 130px;
    margin-bottom: 50px;
  }

  .submit-box {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .cocktail {
    z-index: 2;
    transform: translate(0, 80px);
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
