import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MeditationIcon from '../../assets/img/meditation-icon.svg';
import SwimmingIcon from '../../assets/img/swim-icon.svg';
import BikingIcon from '../../assets/img/bike-icon.svg';
import MuscleIcon from '../../assets/img/muscle-icon.svg';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10rem;
width: 117px;
height: 1024px;
background-color:#000000;
color: white;
box-shadow: 0px 4px 4px 0px #000000;
`
const SideMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  margin-top:4rem;
  justify-content: space-evenly;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
`
const Copyright = styled.p`
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0px;
writing-mode: sideways-lr;
`

const Sidebar = () => {
  const sideArray = [
    { title: 'MeditationIcon', path: '/#', src: MeditationIcon },
    { title: 'SwimmingIcon', path: '/#', src: SwimmingIcon },
    { title: 'BikingIcon', path: '/#', src: BikingIcon },
    { title: 'MuscleIcon', path: '/#', src: MuscleIcon }
  ]

  return (
    <Container className='Sidebar'>
      <SideMenu className='SideItems'>
        {sideArray.map((e, i) => (
          <Link key={i} to={e.path}>
            <img src={e.src} alt={`${e.title} icon`} />
          </Link>
        ))}
      </SideMenu>
      <Copyright>Copiryght, SportSee 2020</Copyright>
    </Container>
  )
}

export default Sidebar;