import styled from 'styled-components';
import { Color } from '@styles/Colors';

// image & icon
import SuldakLogo from '@assets/images/suldak-logo-white.svg';

// components
import RowContainer from '@components/RowContainer';

const Footer = () => {
  return (
    <RowContainer>
      <Container>
        <img src={SuldakLogo} />
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

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .contact {
    font-size: 14px;
    color: white;
  }
  .copyright {
    font-size: 12px;
    color: #646464;
  }
`;
