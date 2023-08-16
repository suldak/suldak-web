import styled from 'styled-components';

// container
import RowOne from '@container/row-one';
import RowTwo from '@container/row-two';
import RowThree from '@container/row-three';
import RowFour from '@container/row-four';

import Footer from '@container/Footer';

function App() {
  return (
    <Container>
      <RowOne />
      <RowTwo />
      <RowThree />
      <RowFour />

      <Footer />
    </Container>
  );
}

export default App;

// style
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
