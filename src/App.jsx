// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import './assets/styles/reset.css';

import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Routing from './services/Routing';

// si on est sur la page 404 je ne veux pas render les components Header ni Sidebar
function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Content>
          <Sidebar />
          <Routing />
        </Content>
      </Container>
    </Router>

  );
}

export default App;

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    height: 100%
  `
const Content = styled.div`
    display: flex;
    flex-direction: row;
  `