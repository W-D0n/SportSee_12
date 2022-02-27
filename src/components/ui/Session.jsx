import styled from 'styled-components';
import propTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * The Linechart of average durations of session of the week
 * @param {Object} sessions
 * @param {String} sessions.day
 * @param {String} sessions.sessionLength
 * 
 * @returns {reactElement} 
 */

const Session = ({ sessions }) => {
  const daysWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
  const formatDay = (item) => daysWeek[item];

  return (
    <Section>
      <Header>
        <h2>Durée moyenne des sessions</h2>
      </Header>
      <ResponsiveContainer width='100%' height='100%' >
        <LineChart data={sessions} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
          <XAxis
            dataKey='day'
            axisLine={false}
            tickFormatter={formatDay}
            tickMargin={0}
            tickLine={false}
            stroke='rgba(255, 255, 255, 0.5)'
            padding={{ left: 5, right: 5 }}
            fontSize={12}
            fontWeight={600}
          />
          <YAxis hide domain={['dataMin-10', 'dataMax+20']} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 40 }} />
          <Line type='monotone' dataKey='sessionLength' stroke='rgba(255, 255, 255, 0.6)' strokeWidth={2} activeDot={{ background: '#FFFFFF', stroke: 'rgba(255, 255, 255, 0.198345)', strokeWidth: 10, r: 4 }} dot={{ r: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </Section>
  )
};

export default Session;

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
        <div>{`${payload[0].value} `}min</div>
      </TooltipContainer>
    );
  }
  return null;
};

Session.propTypes = {
  sessions: propTypes.array.isRequired
};
CustomTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array
};

const TooltipContainer = styled.div`
Width:2.5rem;
Height: 1.5rem;  
text-align: center;
padding-top:5px;
font-size: 10px;
font-weight:600;
background-color: #FFFFFF;
`;
const Section = styled.div`
  position: relative;
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background-color: #FF0000;
`;
const Header = styled.div`
  position: relative;
  overflow-wrap: break-word;

  h2 {
    width: 12rem;
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #FFFFFF;
    opacity: 0.5;
  }  
`;