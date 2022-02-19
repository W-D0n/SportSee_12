// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { USER_PERFORMANCE, USER_AVERAGE_SESSIONS, USER_ACTIVITY, USER_MAIN_DATA } from '../assets/data/mock'; //Import des data provisoire
import { Welcome, Tracking, Metrics, Performance } from './../components/ui';


export const Dashboard = () => {
  // let { id } = useParams();
  // let { data, setData } = useState({});

  // data = {
  //   user: USER_MAIN_DATA,
  //   activity: USER_ACTIVITY,
  //   sessions: USER_AVERAGE_SESSIONS,
  //   performance: USER_PERFORMANCE
  // }

  // useEffect(() => { }, [data]);

  return (
    <Container>
      <Welcome />
      <GraphContainer>
        <Tracking />
        <Performance />
        <Metrics />
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