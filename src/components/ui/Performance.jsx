import styled from 'styled-components';
import propTypes from 'prop-types';
import Session from './Session';
import Stats from './Stats';
import Score from './Score';

const averageSessions = [
  {
    day: 1,
    sessionLength: 30
  },
  {
    day: 2,
    sessionLength: 40
  },
  {
    day: 3,
    sessionLength: 50
  },
  {
    day: 4,
    sessionLength: 30
  },
  {
    day: 5,
    sessionLength: 30
  },
  {
    day: 6,
    sessionLength: 50
  },
  {
    day: 7,
    sessionLength: 50
  }
];
const stats = [
  {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    },
    data: [
      {
        value: 200,
        kind: 1
      },
      {
        value: 240,
        kind: 2
      },
      {
        value: 80,
        kind: 3
      },
      {
        value: 80,
        kind: 4
      },
      {
        value: 220,
        kind: 5
      },
      {
        value: 110,
        kind: 6
      }
    ]
  }
];

const Performance = ({userScore}) => {

  console.log('type Score :', typeof(score))
  return (
    <Section>
      <Session content={averageSessions} />
      <Stats content={stats} />
      <Score userScore={userScore} />
    </Section>
  )
};
export default Performance;

Performance.propTypes = {
  userScore: propTypes.number
};

const Section = styled.section`
display: flex;
gap: 2rem;
`;