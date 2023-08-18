import styled from 'styled-components';
import { Color } from '@styles/Colors';

// image & icon
import SuldakBubble from '@assets/images/suldak-bubble.svg';

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
        <button className="noti-button">누구보다 빠르게 출시 알림 받기</button>
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
  height: 765px;
  background-color: ${Color.suldakBlue};

  .bubble-image {
    position: absolute;
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
  .noti-button {
    color: ${Color.primaryColor};
    background-color: white;
    padding: 24px 80px;
    border: none;
    border-radius: 5rem;
    font-size: 20px;
    font-weight: bold;
    margin-top: 5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
