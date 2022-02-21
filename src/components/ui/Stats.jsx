import styled from 'styled-components';
import propTypes from 'prop-types';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';



const Stats = ({ content }) => {
  const perf = [
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

  const french = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };

  return (
    <Section>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={perf}>
          <PolarGrid radialLines={false} />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF', fontSize: '12px' }} />
          <Radar dataKey="value" stroke="false" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </Section>
  )
}
export default Stats;

const Section = styled.div`
width: 258px;
height: 263px;
margin: 0 auto;
border-radius: 5px;
background-color: #282D30;
`;

Stats.propTypes = {
  content: propTypes.array
};