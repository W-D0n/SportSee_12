// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';
// import { UserMetrics, UserAverageSession, UserDaily, UserPerformance, UserScore } from './../components/ui'
import { UserMetrics } from './../components/ui'

// const Container = styled.div``

export const Dashboard = () => {
  // console.log('Rendering Dashboard')
  let params = useParams();
  // console.log('params :', params)
  console.log('params id :', params.id)
  // console.log('typeof id :', typeof (parseInt(params.id)))

  // const { user, activity, averageSessions, performance } = fonction service qui récupère les datas;
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <UserMetrics />
      </div>
    </>

    // <Container>
    // <UserMetrics />
    //   <UserAverageSession />
    //   <UserDaily />
    //   <UserPerformance />
    //   <UserScore />
    // </Container>
  )
};