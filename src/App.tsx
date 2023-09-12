import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';

// container
import RowOne from '@container/row-one';
import RowTwo from '@container/row-two';
import RowThree from '@container/row-three';
import RowFour from '@container/row-four';

import Footer from '@container/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <RowOne />
        <RowTwo />
        <RowThree />
        <RowFour />

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;

// style
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
