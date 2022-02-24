import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from './../assets/img/logoOnly.svg';


const Error404 = () => {
  return (
    <Container>
      <Img src={logoImg} alt="logo" />
      <h2>
        OUPS !! Page not found.
      </h2>
      <Link to={`/home`}>
        <span>{`Retour à l'accueil`}</span>
      </Link>
    </Container>
  );
};
export default Error404;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 0.5rem;

  h2 {
    font-weight: 500;
    font-size: 5rem;
  }

  img {
    width: 26rem;
  }
}
`
const Img = styled.img``