import styled from 'styled-components';
import { Color } from '@styles/Colors';

// components
import RowContainer from '@components/RowContainer';

const RowFour = () => {
  return (
    <RowContainer>
      <Container>
        <span className="title">술닥술닥이 출시될 때 가장 먼저 알려드릴게요!</span>
      </Container>
    </RowContainer>
  );
};

export default RowFour;

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
  }
`;
