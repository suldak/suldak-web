import styled from 'styled-components';
import { Color } from '@styles/Colors';

import Mouse from '@assets/images/row-two-mouse.svg';
import RowTwoImageOne from '@assets/images/row-two-image1.svg';

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
        <div className="row-two-image-box">
          <span className="row-two-image-des">*개발중인 화면으로 UI 등은 변경될 수 있습니다.</span>
          <img className="row-two-image-one" src={RowTwoImageOne} />
        </div>
        <img src={Mouse} />
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
  /* height: 588px; */
  background-color: white;

  .row-two-image-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: translate(100px, 100px);

    .row-two-image-des {
      font-size: 12px;
      color: #8e8e8e;
      margin-bottom: 10px;
    }

    .row-two-image-one {
      width: 300px;
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
