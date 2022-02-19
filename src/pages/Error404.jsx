import styled from 'styled-components';
import logoImg from './../assets/img/logo.svg';


const Error404 = () => {
  return (
    <Container>
      <Img src={logoImg} alt="logo" />
      <p>
        OUPS !! Page not found.
      </p>
    </Container>
  );
};
export default Error404;

const Container = styled.div``
const Img = styled.img``