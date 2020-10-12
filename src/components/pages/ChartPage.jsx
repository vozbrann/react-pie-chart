import React from 'react';
import PieChart from '../PieChart';
import StyledH1 from '../StyledH1';

const ChartPage = ({items}) => {
  return (
    <div>
      <StyledH1>Chart</StyledH1>
      <PieChart data={items}/>
    </div>
  );
};

export default ChartPage;
