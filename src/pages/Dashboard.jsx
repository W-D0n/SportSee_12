// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { USER_PERFORMANCE, USER_AVERAGE_SESSIONS, USER_ACTIVITY, USER_MAIN_DATA } from '../assets/data/mock'; //Import des data provisoire
import { Welcome, Tracking, Metrics, Performance } from './../components/ui';


export const Dashboard = () => {
  //  IL FAUT METTRE ICI LA RECUP DES DATA POUR LES GRAPHS
  //  POUR LES DISPATCHER ENSUITE DANS LES COMPONENTS.


  // let { id } = useParams();
  // let { data, setData } = useState({});

  // data = {
  //   user: USER_MAIN_DATA,
  //   activity: USER_ACTIVITY,
  //   sessions: USER_AVERAGE_SESSIONS,
  //   performance: USER_PERFORMANCE
  // }

  // useEffect(() => { }, [data]);
  const user = {
    id: 18,
    userInfos: {
      firstName: 'Cecilia',
      lastName: 'Ratorez',
      age: 34,
    },
    todayScore: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120
    }
  }

  return (
    <Container>
      <Welcome {...user.userInfos} />
      <GraphContainer>
        <Tracking />
        <Performance score={user.todayScore} />
        <Metrics {...user.keyData} />
      </GraphContainer>
    </Container>
  )
};


const Container = styled.div`
  display: grid;
  width: 100%

`
const GraphContainer = styled.div`
  display: grid;
`