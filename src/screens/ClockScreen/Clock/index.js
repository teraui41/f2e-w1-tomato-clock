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
    const { valueRadio, period } = this.props;
    return (
      <ClockCircleContainer>
        <Circle valueRadio={valueRadio} period={period}/>
      </ClockCircleContainer>
    )
  }
}

export default ClockCircle;
