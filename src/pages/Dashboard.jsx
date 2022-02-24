import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import UserService from '../services/UserService';
import { Welcome, Tracking, Metrics, Session, Stats, Score, Loader } from './../components/ui';
import Error404 from './Error404'

/**
 * Function that create the Dashboard component for user profil.
 * @component
 * 
 * @returns {reactElement}
 */

export const Dashboard = () => {
  // Get current id from url
  let { id } = useParams();
  // Muting type from string into number on id
  const currentUserID = Number(id);
  // Fetch data
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
              <Performance>
                <Session sessions={sessions} />
                <Stats {...perf} />
                <Score userScore={user.todayScore} />
              </Performance>
              <Metrics metrics={user.keyData} />
            </GraphContainer>
          </Container>
        </>
      )
    }
    return (!user.id === currentUserID ? <Error404 /> : <Loader />);
  }
  return <Error404 />;
};


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "ti ti ti ti ti ti"
    "ch ch ch ch ch ch";
  margin: 3rem 5rem;
  width:100%;
  `;
const GraphContainer = styled.div`
  grid-area: ch;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
  "track track track metric"
  "track track track metric"
  "track track track metric"
  "track track track metric"
  "perf perf perf metric"
  "perf perf perf metric"
  "perf perf perf metric"
  "perf perf perf metric";
  gap: 2rem;
  `;
const Performance = styled.section`
  grid-area: perf;
  display: flex;
  align-items:flex-end;
`;