import React from "react";
import moment from 'moment';
import styled from "styled-components";
import { Colors } from "../../constants/colors.config";

const SCENERY_MAP = {
  day: `linear-gradient(180deg, ${Colors.day.circle.lighter} 0%, ${
    Colors.day.circle.darker
  } 100%);`,
  evening: `linear-gradient(180deg, ${Colors.evening.circle.lighter} 0%, ${
    Colors.evening.circle.darker
  } 100%);`,
  night: `linear-gradient(180deg, ${Colors.night.circle.lighter} 0%, ${
    Colors.night.circle.darker
  } 100%);`
};

const ChartContainer = styled.div`
  height: 180px;
  width: 280px;
  margin: auto;
  margin-top: 30px;
  border-left: 1px solid #5b5e89;
  border-bottom: 1px solid #5b5e89;
  display: flex;
`;

const BasicBar = ({ className, unit, data }) => (
  <div className={className}>
    <label>{moment(data.label).format('MM/DD')}</label>
    <span>{data.value}</span>
  </div>
)

const Bar = styled(BasicBar)`
  flex: 1;
  position: relative;
  margin-top: ${({ unit, data })=> 180 - (data.value * unit )}px;
  background: ${({data, period}) => {
    return data.label === moment().format('YYYY-MM-DD')
     ? SCENERY_MAP[period]
     : '#ddd'}
  };
  margin-left: 16px;
  & label {
    position: absolute;
    color: #fff;
    font-size: .1rem;
    bottom: -18px;
    font-weight: bold;
  }
  
  & span {
    position: absolute;
    padding: 5px;
    border-radius: 20px;
    background-color: #5b5e89;
    color: #fff;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    margin-top: -23px;
  }
`;

class Chart extends React.PureComponent {
  render() {
    const { period, chartData } = this.props;

    const maxValue = Math.max(...(chartData.map(data=> data.value)));
    const unit = maxValue ===  0 ? 0 : 150 / maxValue;

    return (
      <ChartContainer>
        {chartData.map(data => (
          <Bar key={`chartData${data.label}`} period={period} data={data} unit={unit} />
        ))}
      </ChartContainer>
    );
  }
}

export default Chart;
