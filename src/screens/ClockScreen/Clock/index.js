import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const ClockCircleContainer = styled.div`
  position: relative;
  margin-top: 60px;
  height: 550px;
  width: 500px;
`

class ClockCircle extends React.PureComponent {
  render() {
    return (
      <ClockCircleContainer>
        <Circle />
      </ClockCircleContainer>
    )
  }
}

export default ClockCircle;
