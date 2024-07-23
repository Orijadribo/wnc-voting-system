import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Chart = ({ yesVote, noVote }) => {
  const data = [
    { name: 'Yes', value: yesVote },
    { name: 'No', value: noVote },
  ];

  const COLORS = ['#16a34a', '#4ade80'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    payload,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    let x, y;

    if (payload.value == 0) {
      // Manually position the label for the zero value
      x = 100;
      y = 150;
    } else {
      x = cx + radius * Math.cos(-midAngle * RADIAN);
      y = cy + radius * Math.sin(-midAngle * RADIAN);
    }

    return (
      <text
        x={x}
        y={y}
        fill='#E0E5E5'
        textAnchor={'center'}
        dominantBaseline='central'
      >
        {`${payload.name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
