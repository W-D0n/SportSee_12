import styled from 'styled-components';
import propTypes from 'prop-types';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

/**
 * The PieChart of user's todayScore
 * @component
 * @property {String} name - label used for the chart
 * @property {!Number} value - quantity
 * @param {!Number} userScore prop
 */

const Score = ({ userScore }) => {
  const data = [
    { name: 'score', value: userScore },
    { name: 'total', value: 1 - userScore }
  ];
  return (
    <Section>
      <Header>Score</Header>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={100}>
          <Pie
            data={data}
            startAngle={90}
            endAngle={450}
            innerRadius={90}
            outerRadius={100}
            cornerRadius={10}
            paddingAngle={5}
            dataKey="value"
          >
            <Cell fill={'#E60000'} stroke={'#E60000'} />
            <Cell fill={'transparent'} stroke={'transparent'} />
          </Pie>
          <Pie outerRadius={'90'} fill={'#FFFFFF'} data={[{ name: 'background', value: 100 }]} dataKey="value" />
          <Legend verticalAlign='middle' align='center' content={CustomLegend} />
        </PieChart>
      </ResponsiveContainer>
    </Section >
  );
}
export default Score;

/**
 * Custom Legend by tweaking component props and passing in custom component
 * @param {Array} payload [0] (Number) Represent completion score
 * @returns {reactElement} Component if active
 */
const CustomLegend = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <LegendContainer>
        <ScoreNb>{payload[0].payload.value * 100}%</ScoreNb>
        <Text>de votre</Text>
        <Text>objectif</Text>
      </LegendContainer>
    )
  }
};

Score.propTypes = {
  userScore: propTypes.number
};
CustomLegend.propTypes = {
  payload: propTypes.array
};

const Section = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background-color: #FBFBFB;
  position: relative;
  padding: 25px
`;

const Header = styled.h2`
  position: absolute;
	top: 10px;
	left: 10px;
  font-size: 16px;
  font-weight: 600;
`;

const LegendContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 26px;
`;
const ScoreNb = styled.span`
font-size: 26px;
font-weight: 600;
color: #282D30;
`;
const Text = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #9B9EAC;
`;