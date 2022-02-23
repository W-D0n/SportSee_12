/**
 * 
 */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import UserService from '../services/UserService';
import { Welcome, Tracking, Metrics, Session, Stats, Score } from './../components/ui';

import Loading from './Loading'
import Error404 from './Error404'

export const Dashboard = () => {
  let { id } = useParams();
  const currentUserID = Number(id);

  const [user, setUser] = useState({})
  const [activities, setActivities] = useState(null)
  const [sessions, setSessions] = useState(null)
  const [perf, setPerf] = useState(null)

  useEffect(() => {
    UserService.get(currentUserID).then(res => {
      setUser(res);
    })
    UserService.getActivities(currentUserID).then(res => {
      setActivities(res);
    })
    UserService.getSessions(currentUserID).then(res => {
      setSessions(res);
    })
    UserService.getPerf(currentUserID).then(res => {
      setPerf(res);
    })
  }, []);
  if (user) {
    if (user.todayScore && user.userInfos && user.keyData && activities && sessions && perf) {
      return (
        <>
          <Container>
            <Welcome firstName={user.userInfos.firstName} />
            <GraphContainer>
              <Tracking activities={activities} />
              <Metrics metrics={user.keyData} />
              <Performance>
                <Session sessions={sessions} />
                <Stats {...perf} />
                <Score userScore={user.todayScore} />
              </Performance>
            </GraphContainer>
          </Container>
        </>
      )
    }
    return <Loading />;
  }
  return <Error404 />;
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 5rem;
`;
const GraphContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
`;
const Performance = styled.section`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`;