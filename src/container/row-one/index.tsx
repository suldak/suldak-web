import styled from 'styled-components';
import { Color } from '@styles/Colors';

// image & icon
import SuldakBubble from '@assets/images/suldak-bubble.svg';
import Maka from '@assets/images/row-one-maka.svg';

// components
import RowContainer from '@components/RowContainer';

const RowOne = () => {
  return (
    <RowContainer>
      <Container>
        <div className="title-container">
          <span className="title">
            이야기와 술을
            <div className="bubble-image">
              <img src={SuldakBubble} />
            </div>
          </span>
          <span className="title">나누는 곳, 술닥술닥</span>
        </div>

        <span className="sub-title">
          술 한잔 하고 싶다! 나만을 위한 추천 술과 곁들일 이야기를 찾아봐요
        </span>
        <div className="noti-box">
          <img src={Maka} />
          <button className="noti-button">누구보다 빠르게 출시 알림 받기</button>
        </div>
      </Container>
    </RowContainer>
  );
};

export default RowOne;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${Color.suldakBlue};
  padding: 100px 0;

  .bubble-image {
    position: absolute;
    transform: translate(350px, -200px);
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    .title {
      color: white;
      font-size: 82px;
      font-weight: bold;
      line-height: 97px;
    }
  }
  .sub-title {
    color: white;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: -0.3%;
    line-height: 36px;
  }

  .noti-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    .noti-button {
      color: white;
      background-color: #0f4448;
      padding: 24px 160px;
      border: none;
      border-radius: 5rem;
      font-size: 20px;
      font-weight: bold;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
