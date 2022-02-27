import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import './assets/styles/reset.css';

import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Routing from './services/Routing';

/**
 * App start here with routing and layout components
 * @returns {reactElement}
 */
function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Sidebar />
        <Content>
          <Routing />
        </Content>
      </Container>
    </Router>

  );
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 6rem 1fr;
  grid-template-areas:
    "hd hd hd hd hd hd hd hd hd hd hd"
    "nav main main main main main main main main main main";
  font-family: Roboto;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
const Content = styled.div`
grid-area: main;
  display: flex;
  align-items: stretch;
  height: 100%;
`;