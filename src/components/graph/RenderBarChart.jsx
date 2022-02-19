import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
// import PropTypes from 'prop-types';

export const RenderBarChart = () => {
  const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

  return (
    <ResponsiveContainer>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Legend width={200} wrapperStyle={{ top: 40, right: 20, borderRadius: 3, lineHeight: '40px' }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
}

RenderBarChart.propTypes = {

}