import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const ClockCircleContainer = styled.div`
  position: relative;
  height: 600px;
  width: 500px;
`

class ClockCircle extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }



  render() {
    const { valueRadio, circleType } = this.props;
    return (
      <ClockCircleContainer>
        <Circle valueRadio={valueRadio} circleType={circleType}/>
      </ClockCircleContainer>
    )
  }
}

export default ClockCircle;
