import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../assets/img/logo.svg';

/**
 * Top navigation menu.
 * Links are implemented but there is no route yet.
 * @component * 
 * @property {String} title - name of menu item
 * @property {String} path - url of the redirection
 * 
 * @returns {reactElement} 
 */

const Header = () => {
  const menuArray = [
    { title: 'Accueil', path: '/home' },
    { title: 'Profil', path: '/#' },
    { title: 'Réglage', path: '/#' },
    { title: 'Communauté', path: '/error' }
  ]
  return (
    <Container className='Header'>
      <Logo src={LogoImg} alt='Sportsee logo' />
      <Menu>
        {menuArray.map((e, i) => (
          <Link key={i} to={e.path}>
            <li>{e.title}</li>
          </Link>
        ))}
      </Menu>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  z-index: 1;
  grid-area: hd;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  Height: 91px;
  background-color:#000000;
  box-shadow: 0px 4px 4px 0px #000000;
`;
const Logo = styled.img`
  margin-inline: 2rem;
`;
const Menu = styled.ul`
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-evenly;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
`;
