import React from 'react';
import styled from 'styled-components';
import { Wave1, Wave2 } from './Nature';
import { Colors } from '../../../constants/colors.config';

const SCENERY_MAP = {
  day: `linear-gradient(180deg, ${Colors.day.primary.lighter} 0%, ${Colors.day.primary.darker} 100%);`,
  evening: `linear-gradient(180deg, ${Colors.evening.primary.lighter} 0%, ${Colors.evening.primary.darker} 100%);`,
  night: `linear-gradient(180deg, ${Colors.night.primary.lighter} 0%, ${Colors.night.primary.darker} 100%);`
}

const SceneryContainer = styled.div`
  position: absolute;
  width: 450px;
  height: 100%;
  right: 0px;
`;

const NightScenery = styled.div`
background: ${SCENERY_MAP['night']}
position: absolute;
width: 450px;
height: 100%;
top: 0;
right: 0px;
opacity: ${props=> props.period === 'night' ? 1: 0}
transition: opacity 5s ease;
`

const EveningScenery = styled.div`
background: ${SCENERY_MAP['evening']}
position: absolute;
width: 450px;
height: 100%;
top: 0;
right: 0px;
opacity: ${props=> props.period === 'evening' ? 1: 0}
transition: opacity 5s ease;
`

const DayScenery = styled.div`
background: ${SCENERY_MAP['day']}
position: absolute;
width: 450px;
height: 100%;
top: 0;
right: 0px;
opacity: ${props=> props.period === 'day' ? 1: 0}
transition: opacity 5s ease;
`

class Scenery extends React.PureComponent {
  render() {
    const { period } = this.props;

    return (
      <SceneryContainer>
        <NightScenery period={period}/>
        <EveningScenery period={period}/>
        <DayScenery period={period}/>
        <Wave1 />
        <Wave2 />
      </SceneryContainer>
    )
  }
}

export default Scenery;
