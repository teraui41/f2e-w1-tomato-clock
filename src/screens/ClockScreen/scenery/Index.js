import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../constants/colors.config';

const SCENERY_MAP = {
  dayGradient: `linear-gradient(180deg, ${Colors.dayPrimary.lighter} 0%, ${Colors.dayPrimary.darker} 100%);`,
  eveningGradient: `linear-gradient(180deg, ${Colors.eveningPrimary.lighter} 0%, ${Colors.eveningPrimary.darker} 100%);`,
  nightGradient: `linear-gradient(180deg, ${Colors.nightPrimary.lighter} 0%, ${Colors.nightPrimary.darker} 100%);`
}

const SceneryContainer = styled.div`
  background: ${SCENERY_MAP['dayGradient']};
  position: absolute;
  width: 450px;
  height: 100%;
  right: 0px;
`;

class Scenery extends React.PureComponent {
  render() {
    return (
      <SceneryContainer>
        
      </SceneryContainer>
    )
  }
}

export default Scenery;
