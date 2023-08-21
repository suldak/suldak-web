import styled from 'styled-components';
import { Color } from '@styles/Colors';

// image & icon
import RowThreeImageOne from '@assets/images/row-three-image1.svg';
import RowThreeImageTwo from '@assets/images/row-three-image2.svg';
import RowThreeImageThree from '@assets/images/row-three-image3.svg';
import Maka from '@assets/images/row-three-maka.svg';

// components
import RowContainer from '@components/RowContainer';

const RowThree = () => {
  return (
    <RowContainer>
      <Container>
        <div className="title-box">
          <span className="title">술친구 만들기</span>
          <span className="sub-title">
            나누고 싶은 이야기 주제를 선택해 모임에 참여해요. 내가 모임을 만들 수도 있어요.
          </span>
        </div>
        <div className="row-three-image-box">
          <img className="row-three-image" src={RowThreeImageOne} />
          <img className="row-three-image" src={RowThreeImageTwo} />
          <img className="row-three-image" src={RowThreeImageThree} />
        </div>
        <div className="row-two-maka-box">
          <img className="row-three-image-maka" src={Maka} />
        </div>
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
  width: 100%;
  background-color: #f3e9a3;
  padding: 130px 0;

  .title-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 60px;

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
  }

  .row-three-image-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 50px;

    .row-three-image {
      width: 300px;
    }
  }

  .row-two-maka-box {
    position: absolute;
    display: flex;
    transform: translate(530px, 402px);

    .row-three-image-maka {
    }
  }
`;
