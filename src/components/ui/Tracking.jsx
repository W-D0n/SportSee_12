import styled from 'styled-components';
import propTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Rectangle, CartesianGrid, ResponsiveContainer } from 'recharts';

/**
 * The BarChart of user's day by day tracking
 * @component
 * @param {Object} activities props of activities
 * @property {String} activities.day date
 * @property {!Number} activities.kilogram  weight
 * @property {!Number} activities.calories  calories burned
 * @returns {reactElement} 
 */

const Tracking = ({ activities }) => {
  return (
    <Section>
      <Header>
        <h2>Activité quotidienne</h2>
        <ul>
          <li>Poids (kg)</li>
          <li>Calories brûlées (kCal)</li>
        </ul>
      </Header>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={activities} width={500} height={300} barGap={8} >
          <CartesianGrid strokeDasharray='2' vertical={false} />
          <XAxis dataKey='day' stroke='#DEDEDE' strokeWidth={2} tick={{ fill: '#9B9EAC' }} tickLine={false} tickFormatter={(day) => new Date(day).getDate()} />
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
          <Tooltip content={<CustomTooltip />} isAnimationActive={true} cursor={<CustomCursor />} />
          <Bar yAxisId='kilogram' dataKey='kilogram' fill='#282D30' barSize={10} radius={[5, 5, 0, 0]} />
          <Bar yAxisId='calories' dataKey='calories' fill='#E60000' barSize={10} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Section>
  );
};

export default Tracking;

/**
 * Custom Tooltip by tweaking component props and passing in custom component
 * @param {Boolean} active active state
 * @param {Array} payload [0] (Number) Represent time session
 * @returns {reactElement|null} Component if active, or null
 */
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

/**
 * Custom Cursor by tweaking component props and passing in custom component
 * @param {Boolean} active active state
 * @param {Array} payload [0] :  Yaxis 1 (kg), [1] : Yaxis 2 (kCal)
 * @returns {reactElement} Component if active
 */
const CustomCursor = ({ x, y, width, height }) => {
  return (
    <Rectangle
      opacity={0.1}
      x={x + 4}
      y={y}
      width={width - 10}
      height={height}
    />
  )
}
Tracking.propTypes = {
  activities: propTypes.array.isRequired
};


CustomTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array
};
CustomCursor.propTypes = {
  x: propTypes.number,
  y: propTypes.number,
  width: propTypes.number,
  height: propTypes.number
};
const Section = styled.section`
grid-area: track;
height: 320px;
width: 100%;
background: #FBFBFB;
border-radius: 5px;
display: flex;
flex-direction: column;
padding: 1.5rem;

.recharts-responsive-container {
  margin-top: auto;
}

@media screen and (max-width: 1270px) {}
`;
const Header = styled.div`
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
`;
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
  .recharts-layer.recharts-bar-rectangle .recharts-rectangle:hover {
    fill: red;
  }
`;