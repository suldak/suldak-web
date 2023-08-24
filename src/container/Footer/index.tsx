import styled from 'styled-components';
import { Color } from '@styles/Colors';

// image & icon
import SuldakLogo from '@assets/images/suldak-logo-white.svg';
import NotionIcon from '@assets/images/notion-icon.svg';
import InstaIcon from '@assets/images/insta-icon.svg';

// components
import RowContainer from '@components/RowContainer';

const Footer = () => {
  return (
    <RowContainer>
      <Container>
        <img src={SuldakLogo} />
        <div className="icon-box">
          <img
            className="icon"
            src={NotionIcon}
            onClick={() => {
              window.open('https://suldak.notion.site/suldak/1ee0d943ac10491cb27f87ebb98768d6');
            }}
          />
          <img
            className="icon"
            src={InstaIcon}
            onClick={() => {
              window.open('https://www.instagram.com/suldak.official/');
            }}
          />
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
