import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../assets/img/logo.svg';


const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  Height: 91px;
  background-color:#000000;
  box-shadow: 0px 4px 4px 0px #000000;
`
const Logo = styled.img`
  margin-inline: 2rem;
`
const Menu = styled.ul`
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-evenly;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
`

const Header = () => {
  const menuArray = [
    { title: 'Accueil', path: '/home' },
    { title: 'Profil', path: '/profil' },
    { title: 'Réglage', path: '/settings' },
    { title: 'Communauté', path: '/comunity' }
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