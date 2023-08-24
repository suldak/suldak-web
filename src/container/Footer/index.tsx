import styled from 'styled-components';
import { Color } from '@styles/Colors';

// image & icon
import SuldakLogo from '@assets/images/suldak-logo-white.svg';
import NaverIcon from '@assets/images/naver-icon.svg';
import InstaIcon from '@assets/images/insta-icon.svg';

// components
import RowContainer from '@components/RowContainer';

const Footer = () => {
  return (
    <RowContainer>
      <Container>
        <img src={SuldakLogo} />
        <div className="icon-box">
          <img className="icon" src={NaverIcon} />
          <img className="icon" src={InstaIcon} />
        </div>
        <span className="contact">Contact : suldak.offical@gmail.com</span>
        <span className="copyright">Copyright @ 술닥술닥 all rights reserved</span>
      </Container>
    </RowContainer>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 284px;
  background-color: ${Color.footerBgColor};
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;

    .icon {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .contact {
    font-size: 14px;
    color: white;
    margin-bottom: 20px;
  }
  .copyright {
    font-size: 12px;
    color: #646464;
  }
`;
