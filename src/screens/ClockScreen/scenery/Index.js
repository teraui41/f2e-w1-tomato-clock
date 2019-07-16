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
  background: ${({period}) => SCENERY_MAP[period]};
  position: absolute;
  width: 450px;
  height: 100%;
  right: 0px;
`;

class Scenery extends React.PureComponent {
  render() {
    const { period } = this.props;

    return (
      <SceneryContainer period={period}>
        <Wave1 />
        <Wave2 />
      </SceneryContainer>
    )
  }
}

export default Scenery;
