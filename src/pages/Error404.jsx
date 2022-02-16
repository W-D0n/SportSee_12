import styled from 'styled-components';
import logoImg from './../assets/img/logo.svg';

const Container = styled.div``
const Img = styled.img``

export const Error404 = () => {
  return (
    <Container>
      <Img src={logoImg} alt="logo" />
      <p>
        OUPS !! Page not found.
      </p>
    </Container>
  );
};