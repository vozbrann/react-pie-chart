import React from 'react';
import styled from 'styled-components';

const Chart = styled.svg`
  width: 100%;
`;

const Slice = styled.path`
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const SliceContainer = styled.g`
  text, polyline {
    transition: 0.3s;
    opacity: 0;
    pointer-events: none;
  }
  &:hover {
     text, polyline {
      opacity: 1;
     }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const PieChart = ({data}) => {
  const formattedData = data.map(el => ({...el, qt: parseFloat(el.qt)}));

  const total = formattedData.reduce((a, b) => a + b.qt, 0);

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  let cumulativePercent = 0;

  return (
    <Container>
      <Chart viewBox="-4.5 -1.8 9 3.6">
        {
          formattedData.map((slice, i) => {
            // destructuring assignment sets the two variables at once
            const [startX, startY] = getCoordinatesForPercent(
              cumulativePercent);

            const middlePercent = cumulativePercent + (slice.qt / total) / 2;

            // calc text position
            const [textX, textY] = getCoordinatesForPercent(middlePercent);

            // each slice starts where the last slice ended, so keep a cumulative percent
            cumulativePercent += slice.qt / total;

            const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

            // if the slice is more than 50%, take the large arc (the long way around)
            const largeArcFlag = slice.qt / total > .5 ? 1 : 0;

            // create an array and join it just for code readability
            const pathData = [
              `M ${startX} ${startY}`, // Move
              `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
              `L 0 0`, // Line
            ].join(' ');

            let leftFlag = !(middlePercent < 0.25 || middlePercent > 0.75);
            let textAnchor = leftFlag ? 'end' : 'start';

            return (
              <SliceContainer key={i} className={''}>
                <polyline strokeOpacity="1" strokeLinecap="round" points={
                  leftFlag ?
                    `0,0 ${textX * 1.5},${textY * 1.5} ${textX * 1.5 - 0.15},${textY * 1.5} ${textX * 1.5},${textY * 1.5}` :
                    `0,0 ${textX * 1.5},${textY * 1.5} ${textX * 1.5 + 0.15},${textY * 1.5} ${textX * 1.5},${textY * 1.5}`
                } strokeWidth={0.01} stroke={slice.color} />
                <Slice d={pathData} fill={slice.color}/>
                <text fill={slice.color} textAnchor={textAnchor} dominantBaseline="middle"
                      x={leftFlag ? textX * 1.5 - 0.2 : textX * 1.5 + 0.2}
                      y={textY * 1.5}
                      style={{fontSize: '0.7%',}}>{slice.title}: {slice.qt} ({(slice.qt / total * 100).toFixed(2)}%)
                </text>
              </SliceContainer>
            );
          })
        }
      </Chart>
    </Container>
  );
};

export default PieChart;
