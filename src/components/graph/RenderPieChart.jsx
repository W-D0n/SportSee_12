import { PieChart, Pie, ResponsiveContainer } from 'recharts';
// import PropTypes from 'prop-types';

export const RenderPieChart = () => {
  return (
    <ResponsiveContainer>
      <PieChart width={730} height={250}>
        <Pie data='{}' dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      </PieChart>
    </ResponsiveContainer>
  )

}

RenderPieChart.propTypes = {

}