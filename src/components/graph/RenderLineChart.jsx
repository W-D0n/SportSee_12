import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
// import PropTypes from 'prop-types';

export const RenderLineChart = () => {
  const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

  return (
    <ResponsiveContainer>
      <LineChart width={400} height={400} data={data}>
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

RenderLineChart.propTypes = {

}