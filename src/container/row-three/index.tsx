import styled from 'styled-components';
import { Color } from '@styles/Colors';

// components
import RowContainer from '@components/RowContainer';

const RowThree = () => {
  return (
    <RowContainer>
      <Container>
        <span className="title">술친구 만들기</span>
        <span className="sub-title">
          나누고 싶은 이야기 주제를 선택해 모임에 참여해요. 내가 모임을 만들 수도 있어요.
        </span>
      </Container>
    </RowContainer>
  );
};

export default RowThree;

const Container = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 937px;
  background-color: #eaf9fb;

  .title {
    font-size: 52px;
    font-weight: bold;
    color: #090909;
  }

  .sub-title {
    font-size: 18px;
    font-weight: medium;
    color: #090909;
  }
`;
