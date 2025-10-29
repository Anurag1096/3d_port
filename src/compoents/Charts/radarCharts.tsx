import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

const data = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Science', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'History', A: 99, B: 100, fullMark: 150 },
  { subject: 'Geography', A: 85, B: 90, fullMark: 150 },
  { subject: 'Art', A: 65, B: 85, fullMark: 150 },
];

const CustomRadarChart = () => (
  <RadarChart
    cx={220}   // X center
    cy={120}   // Y center
    outerRadius={90}  // reduce radius to fit smaller height
    width={440}
    height={239}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis />
    <Radar
      name="Student A"
      dataKey="A"
     stroke="#82ca9d" 
     fill="#82ca9d"
      fillOpacity={0.6}
    />
   
  </RadarChart>
);

export default CustomRadarChart;
