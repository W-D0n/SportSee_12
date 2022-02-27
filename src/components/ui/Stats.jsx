import styled from 'styled-components';
import propTypes from 'prop-types';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';


/**
 * The PieChart of user's performance by each kind of category
 * @component
 * @property {String} name - label used for the chart
 * @property {!Number} value - quantity
 * @param {Array} data props objects array of each score
 * @property {!Number} data.value - quantity
 * @property {!Number} data.kind - category
 */
const Stats = ({ data }) => {

  const french = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  };
  const translate = (item) => french[item];

  return (
    <Section>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart startAngle={210} endAngle={570} outerRadius={80} data={data} strokeWidth={1.5} >
          <PolarGrid radialLines={false} />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF', fontSize: '12px' }} tickFormatter={translate} />
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
  kind: propTypes.object,
  data: propTypes.array
};