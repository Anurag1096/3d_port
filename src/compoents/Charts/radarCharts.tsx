import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';

const data = [
  { language: 'JavaScript', A: 70, Range: 100 },
  { language: 'React', A: 70, Range: 100 },
  { language: 'TypeScript', A: 60, Range: 100 },
  { language: 'CSS3', A: 73, Range: 100 },
  { language: 'HTML5', A: 70, Range: 100 },
  { language: 'Redux', A: 65, Range: 100 },
    { language: 'Testing (Jest / RTL)', A: 60, Range: 100 },
  { language: 'Performance', A: 55, Range: 100 },
  { language: 'Accessibility', A: 50, Range: 100 },
  { language: 'Browser APIs', A: 55, Range: 100 },
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
    <PolarAngleAxis dataKey="language" />
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
