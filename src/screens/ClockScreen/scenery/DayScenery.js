import React from 'react';
import styled from "styled-components";
import { Cloud } from './Nature';
import { Colors } from "../../../constants/colors.config";

const SCENERY_MAP = {
  day: `linear-gradient(180deg, ${Colors.day.primary.lighter} 0%, ${Colors.day.primary.darker} 100%);`,
  evening: `linear-gradient(180deg, ${Colors.evening.primary.lighter} 0%, ${Colors.evening.primary.darker} 100%);`,
  night: `linear-gradient(180deg, ${Colors.night.primary.lighter} 0%, ${Colors.night.primary.darker} 100%);`
}

const BasicDayScenery = ({ className }) => {
  return (
    <div className={className} >
      <Cloud scale={'-0.3, 0.3'} style={{ marginTop: 30, marginLeft: -180}}/>
      <Cloud scale={'0.4, 0.4'} style={{ marginTop: 0, marginLeft: 180}}/>
      <Cloud scale={'0.5, 0.5'} style={{ marginTop: 80, marginLeft: 120}}/>
    </div>
  )
}

export const EveningScenery = styled(BasicDayScenery)`
background: ${SCENERY_MAP['evening']}
position: absolute;
width: 450px;
height: 100%;
top: 0;
right: 0px;
opacity: ${props=> props.period === 'evening' ? 1: 0}
transition: opacity 5s ease;
`

export const DayScenery = styled(BasicDayScenery)`
background: ${SCENERY_MAP['day']}
position: absolute;
width: 450px;
height: 100%;
top: 0;
right: 0px;
opacity: ${props=> props.period === 'day' ? 1: 0}
transition: opacity 5s ease;
`