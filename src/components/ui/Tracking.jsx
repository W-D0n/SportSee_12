// import PropTypes from 'prop-types';

import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import propTypes from 'prop-types';


const Tracking = () => {
  const data = [
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
      kilogram: 80,
      calories: 390
    }
  ]

  return (
    <Section>
      <Legend>
        <h2>Activité quotidienne</h2>
        <ul>
          <li>Poids (kg)</li>
          <li>Calories brûlées (kCal)</li>
        </ul>
      </Legend>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data} width={500} height={300} barGap={8} >
          <CartesianGrid strokeDasharray='2' vertical={false} />
          <XAxis dataKey='day' stroke='#DEDEDE' tick={{ fill: '#9B9EAC' }} tickLine={false} tickFormatter={(day) => new Date(day).getDate()} />
          <YAxis
            yAxisId='kilogram'
            orientation='right'
            tickMargin={40}
            tickLine={false}
            axisLine={false}
            domain={['dataMin-5', 'dataMax+10']}
            interval={'preserveEnd'}
            tickCount={4}
          />
          <YAxis
            hide
            yAxisId='calories'
            orientation='right'
            domain={[0, 'dataMax+5']}
          />

          <Tooltip content={<CustomTooltip />} />
          <Bar yAxisId='kilogram' dataKey='kilogram' fill='#282D30' barSize={10} radius={[5, 5, 0, 0]} />
          <Bar yAxisId='calories' dataKey='calories' fill='#E60000' barSize={10} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Section>
  );
}

export default Tracking;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <div>{`${payload[0].value}`}kg</div>
        <div>{`${payload[1].value}`}kCal</div>
      </TooltipContainer>
    );
  }

  return null;
};


CustomTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array
};

const Section = styled.section`
height: 320px;
width: 100%;
background: #FBFBFB;
border-radius: 5px;
display: flex;
flex-direction: column;
padding: 1.5rem;
box-shadow: -8px 5px 8px -2px rgba(0, 0, 0, 0.3);

.recharts-responsive-container {
  margin-top: auto;
}`
const Legend = styled.div`
display: flex;
  h2 {
    font-size:1rem;
    color:#20253A;
  }
  ul {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 1rem;
    
    li {
      display: flex;
      align-items: center;
      color: #74798C;
      font-size: 0.8rem;
      font-weight: 500;
    }
    li:before {
			display: block;
			content: '';
			width: 0.5rem;
			height: 0.5rem;
      margin-right: 0.5rem;
			border-radius: 0.25rem;
		}
		li:first-child {
			&:before {
				background-color: black;
			}
		}
		li:last-child {
			&:before {
				background-color: red;
			}
		}
  }
`
const TooltipContainer = styled.div`
  background: #E60000;
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 15px 10px;
  box-shadow: -8px 5px 8px -2px rgba(0, 0, 0, 0.3);

  div:first-child {
    margin-bottom: 15px;
  }
`;