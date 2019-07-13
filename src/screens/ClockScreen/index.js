import React from 'react';
import styled from 'styled-components';
import Scenery from './Scenery/Index';
import ClockCircle from './Clock';

const ClockContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

class ClockScreen extends React.PureComponent {

  render() {
    return (
      <ClockContainer>
        <Scenery />
        <ClockCircle />
      </ClockContainer>
    )
  }
}

export default ClockScreen;
