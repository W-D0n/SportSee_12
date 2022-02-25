import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MeditationIcon from '../../assets/img/meditation-icon.svg';
import SwimmingIcon from '../../assets/img/swim-icon.svg';
import BikingIcon from '../../assets/img/bike-icon.svg';
import MuscleIcon from '../../assets/img/muscle-icon.svg';

/**
 * Side navigation menu
 * Links are implemented but there is no route yet.
 * @component 
 * @property {String} title - name of menu item
 * @property {String} path - url of the redirection
 * @returns {reactElement}  
 */
const Sidebar = () => {
  const sideArray = [
    { title: 'MeditationIcon', path: '/#', src: MeditationIcon },
    { title: 'SwimmingIcon', path: '/#', src: SwimmingIcon },
    { title: 'BikingIcon', path: '/#', src: BikingIcon },
    { title: 'MuscleIcon', path: '/#', src: MuscleIcon }
  ]

  return (
    <Container>
      <SideMenu>
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

const Container = styled.div`
grid-area: nav;
position: fixed;
top:0;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5rem;
width: 117px;
background-color:#000000;
color: white;
box-shadow: 0px 4px 4px 0px #000000;
`
const SideMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  margin-top:11rem;
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