import React from 'react';
import styled from 'styled-components';
import { Colors } from "../../constants/colors.config";

const SCENERY_MAP = {
  day: `linear-gradient(180deg, ${Colors.day.primary.lighter} 0%, ${
    Colors.day.primary.darker
  } 100%);`,
  evening: `linear-gradient(180deg, ${Colors.evening.primary.lighter} 0%, ${
    Colors.evening.primary.darker
  } 100%);`,
  night: `linear-gradient(180deg, ${Colors.night.primary.lighter} 0%, ${
    Colors.night.primary.darker
  } 100%);`
};

const getHeight = () => {

}

const ChartContainer = styled.div`
height: 180px;
width: 280px;
margin: auto;
margin-top: 30px;
border-left: 1px solid #5b5e89;
border-bottom: 1px solid #5b5e89;
display: flex;
`

const Bar = styled.div`
  flex:1;
  background: ${ props=> SCENERY_MAP[props.period]};
  margin-left: 16px;
`

class Chart extends React.PureComponent {

  render() {
    const { period } = this.props;
    return (
      <ChartContainer>
        <Bar period={period}/>
        <Bar period={period}/>
        <Bar period={period}/>
        <Bar period={period}/>
        <Bar period={period}/>
        <Bar period={period}/>
        <Bar period={period}/>
        <Bar period={period}/>
      </ChartContainer>
    )
  }
}

export default Chart;
