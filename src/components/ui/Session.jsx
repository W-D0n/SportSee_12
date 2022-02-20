import styled from 'styled-components';
import propTypes from 'prop-types';
import { LineChart, Line, Tooltip, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from 'recharts';


const Session = ({ content }) => {
  const daysWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
  const formatDay = (item) => daysWeek[item];
  return (
    <Section>
      <ResponsiveContainer width='100%' height='100%' >
        <LineChart width={300} height={100} data={content}>
          <XAxis tickFormatter={formatDay} />
          <YAxis />
          <Tooltip />
          <Line yAxisId='left' type='linear' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} dot={{ r: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </Section>
  )
}

export default Session;

Session.propTypes = {
  content: propTypes.array,
}

const Section = styled.div`
width: 258px;
height: 263px;
border-radius: 5px;
background-color: grey;
`