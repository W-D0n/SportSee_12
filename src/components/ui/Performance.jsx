import styled from 'styled-components';
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
]
const trackingSessions = [
  {
    day: '2020-07-01',
    kilogram: 70,
    calories: 240
  },
  {
    day: '2020-07-02',
    kilogram: 69,
    calories: 220
  },
  {
    day: '2020-07-03',
    kilogram: 70,
    calories: 280
  },
  {
    day: '2020-07-04',
    kilogram: 70,
    calories: 500
  },
  {
    day: '2020-07-05',
    kilogram: 69,
    calories: 160
  },
  {
    day: '2020-07-06',
    kilogram: 69,
    calories: 162
  },
  {
    day: '2020-07-07',
    kilogram: 69,
    calories: 390
  }
]
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
]

const Performance = () => {
  return (
    <Section>
      <Session content={averageSessions} />
      <Stats content={trackingSessions} />
      <Score content={stats} />
    </Section>
  )
}
export default Performance;

const Section = styled.section`
display: flex;
background-color: lightgrey;
gap: 2rem;
`