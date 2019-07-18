import React from 'react';
import styled from 'styled-components';
import NightScenery from './NightScenery';
import { Wave1, Wave2 } from './Nature';
import { EveningScenery, DayScenery } from './DayScenery';

const SceneryContainer = styled.div`
  position: absolute;
  width: 450px;
  height: 100%;
  right: 0px;
`;

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
