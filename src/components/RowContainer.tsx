import styled from 'styled-components';

interface IProps {
  children?: React.ReactNode;
}
const RowContainer = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default RowContainer;

const Container = styled.div`
  width: 100%;
`;
