import styled from 'styled-components';
import Session from './Session';
import Stats from './Stats';
import Score from './Score';


const Performance = () => {
  return (
    <Container>
      <Session />
      <Stats />
      <Score />
    </Container>
  )
}
export default Performance;

const Container = styled.div`
display: flex;
background-color: red;
gap: 2rem;
`