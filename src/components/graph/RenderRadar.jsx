// import PropTypes from 'prop-types';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

export const RenderRadar = () => {
  const data = [
    {
      "subject": "Math",
      "A": 120,
      "B": 110,
      "fullMark": 150
    },
    {
      "subject": "Chinese",
      "A": 98,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "English",
      "A": 86,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "Geography",
      "A": 99,
      "B": 100,
      "fullMark": 150
    },
    {
      "subject": "Physics",
      "A": 85,
      "B": 90,
      "fullMark": 150
    },
    {
      "subject": "History",
      "A": 65,
      "B": 85,
      "fullMark": 150
    }
  ]
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='subject' />
        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
        <Radar dataKey="A" stroke="#8884d8" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

RenderRadar.propTypes = {
}