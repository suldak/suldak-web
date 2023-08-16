import styled from 'styled-components';
import { Color } from '@styles/Colors';

import { ReactComponent as Mouse } from '@assets/images/row-two-mouse.svg';

// components
import RowContainer from '@components/RowContainer';

const RowTwo = () => {
  return (
    <RowContainer>
      <Container>
        <div className="title-container">
          <span className="title">취향저격 술추천</span>
          <div className="sub-title-container">
            <span className="sub-title">현재 나의 기분이나 생각나는 술을 검색하면</span>
            <span className="sub-title">지금 나에게 딱 맞는 술을 추천해요.</span>
          </div>
        </div>
        <Mouse />
      </Container>
    </RowContainer>
  );
};

export default RowTwo;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 588px;
  background-color: white;

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
      font-size: 52px;
      font-weight: bold;
      color: ${Color.textColor};
    }
    .sub-title-container {
      display: flex;
      flex-direction: column;
      line-height: 25px;

      .sub-title {
        font-size: 18px;
        font-weight: medium;
      }
    }
  }
`;
