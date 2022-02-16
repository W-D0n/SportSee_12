import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MeditationIcon from '../../assets/img/meditation-icon.svg';
import SwimmingIcon from '../../assets/img/swim-icon.svg';
import BikingIcon from '../../assets/img/bike-icon.svg';
import MuscleIcon from '../../assets/img/muscle-icon.svg';

const Container = styled.div`
display: flex;
width:117px
height: 100%;
align-items: center;
justify-content: center;
background-color:#000000;
color: white;
box-shadow: 0px 4px 4px 0px #000000;
`
const SideMenu = styled.ul`
  width: 100%;
  display: flex;  
  justify-content: space-evenly;
  list-style: none;
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
text-align: left;
`

const Sidebar = () => {
  const sideArray = [
    MeditationIcon,
    SwimmingIcon,
    BikingIcon,
    MuscleIcon
  ]
  return (
    <Container>
      <SideMenu>
        {sideArray.map((e, i) => (
          <Link key={i} to={`/#`}>
            <img src={e} alt='accomodation thumbnail' />
          </Link>
        ))}
      </SideMenu>
      <Copyright>Copiryght, SportSee 2020</Copyright>
    </Container>
  )
}

export default Sidebar;