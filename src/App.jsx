// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import './assets/styles/reset.css';

// import { Home } from './pages/Home';
// import { Dashboard } from './pages/Dashboard';
// import { Error404 } from './pages/Error404';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

import Routing from './services/Routing';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  height: 100%
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
`
// si on est sur la page 404 je ne veux pas render les components Header ni Sidebar
function App() {
  console.log('App rendering')
  return (
    <Router>
      <Container>
        <Header />
        <Content>
          <Sidebar />
          <Routing />
          {/* <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="user/:id" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router> */}
        </Content>
      </Container>
    </Router>

  );
}

export default App;
