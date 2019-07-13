import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../constants/colors.config';

const CircleContainer = styled.div`
  width: 100%;
  height: 100%;
`

const GREDIENT_MAP = {
  dayGredient: { start: Colors.dayCircle.lighter, stop: Colors.dayCircle.darker },
  eveningGredient: { start: Colors.eveningCircle.lighter, stop: Colors.eveningCircle.darker },
  nightGredient: { start: Colors.nightCircle.lighter, stop: Colors.nightCircle.darker }
}

class Circle extends React.PureComponent {


  render() {
    const { circleType = 'dayGredient' } = this.props;
    const gredient = GREDIENT_MAP[circleType];

    return (
      <CircleContainer>
        <svg height="100%" width="100%">
          <defs>
            <linearGradient id="gradient" x1="0%"  y1="100%"  x2="100%"  y2="0%">
              <stop offset="0%" stopColor={gredient.stop} />
              <stop offset="100%" stopColor={gredient.start} />
            </linearGradient>
          </defs>
          <circle
            cx="255" cy="280" r="200" stroke="url(#gradient)" strokeWidth="25" fill="none"/>
        </svg>
      </CircleContainer>
    )
  }
}

export default Circle;
