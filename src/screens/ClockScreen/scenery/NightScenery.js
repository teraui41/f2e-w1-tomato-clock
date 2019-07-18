import React from 'react';
import styled from "styled-components";
import { Colors } from "../../../constants/colors.config";

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

const BasicNightView = ({ className }) => (
  <div className={className}>
    <div className='meteorBox'>
      <div className='meteor' />
      <div className='meteor' />
      <div className='meteor' />
      <div className='meteor' />
      <div className='meteor' />
      <div className='meteor' />
    </div>
    <div className='moon' />
    <div className='starBox'>
      <div className='star' />
      <div className='star' />
      <div className='star' />
      <div className='star' />
      <div className='star' />
    </div>
  </div>
);

const NightScenery = styled(BasicNightView)`
background: ${SCENERY_MAP["night"]}
position: absolute;
width: 450px;
height: 100%;
top: 0;
overflow: hidden;
right: 0px;
opacity: ${props => (props.period === "night" ? 1 : 0)}
transition: opacity 5s ease;
.meteor {
  position: absolute;
  top: 0;
  left: 75vh;
  margin-top: -30vh;
  width: 100vh;
  height: 2px;
  background: linear-gradient(to right, rgba(255, 255, 255, .5) 0%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(-40deg);
  animation: meteorAppear 2s infinite;

  &:nth-child(2n+1) {
      margin-left: -50vh;
      animation: meteorAppear 2s -1s infinite;
  }

  &:nth-child(3n+2) {
      margin-left: -100vh;
      animation: meteorAppear 2s -1.2s infinite;
  }

  &:nth-child(4n+3) {
      margin-left: -20vh;
      animation: meteorAppear 2s -1.5s infinite;
  }

  &:nth-child(5n+4) {
      margin-left: 20vh;
      animation: meteorAppear 2s -.7s infinite;
  }

  &:nth-child(6n+5) {
      margin-left: 40vh;
      animation: meteorAppear 2s -.3s infinite;
  }
}

@keyframes meteorAppear {
  to {
      top: 100vh;
      left: 0;
      width: 10vh;
      opacity: 0;
  }
}

.moon {
  position: absolute;
  width: 4vh;
  height: 4vh;
  top: 20%;
  left: 60%;
  border-radius: 100%;
  box-shadow: 1.75vh 1.75vh 0 1vh rgba(240, 231, 248, 1);
  filter: drop-shadow(0 0 20px rgba(250, 230, 255, .5)) drop-shadow(0 0 30px rgba(250, 230, 255, .9)) drop-shadow(0 0 40px rgba(250, 230, 255, 1));
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 100%;
  background: white;
  top: 1vh;
  left: 10vw;
  box-shadow: 0 0 2px rgba(240, 231, 248, 1);
  animation: starBlink 3s alternate infinite;
  
  &:nth-child(2n+1) {
      margin-top: 21vh;
      margin-left: 45vw;
      animation: starBlink 3s -1s alternate infinite;
  }    
  &:nth-child(3n+2) {
      margin-top: 11vh;
      margin-left: 19vw;
      animation: starBlink 3s -1.3s alternate infinite;
  }    
  &:nth-child(4n+3) {
      margin-top: 2vh;
      margin-left: 62vw;
      animation: starBlink 3s -1.7s alternate infinite;
  }    
  &:nth-child(5n+4) {
      margin-top: 28vh;
      margin-left: 2vw;
      animation: starBlink 3s -2.1s alternate infinite;
  }    
  &:nth-child(6n+5) {
      margin-top: 55vh;
      margin-left: 29vw;
      animation: starBlink 3s -2.7s alternate infinite;
  }
}


@keyframes starBlink {
  90% {
      opacity: .5;
  }
      100% {
      opacity: 0;
  }
}
`;

export default NightScenery;
