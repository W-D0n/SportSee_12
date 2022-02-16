import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import './assets/styles/reset.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

const Main = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  height: 100%;
`
const MainContent = styled.div`
  display: flex;
  height: 100%;
`

function App() {
  return (
    <Main>
      <Header />
      <MainContent>
        <Sidebar />
        <Outlet />
      </MainContent>
    </Main>
  );
}

export default App;
