import { Link } from 'react-router-dom';
import styled from "styled-components";

/**
 * App start here with routing and layout components
 * @component
 */
export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Link to={`/user/${12}`}>
        <h3>User 12</h3>
      </Link>
      <Link to={`/user/${18}`}>
        <h3>User 18</h3>
      </Link>
    </Container>

  );
}

const Container = styled.div`
  margin-inline: 7rem;
  margin-block: 4rem;
  `