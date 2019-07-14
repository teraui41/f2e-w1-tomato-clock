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

  componentDidMount() {
    this.inteval = setInterval(()=>{
    const { value } = this.state;

    const minValue = 0;
    const maxValue = 10;
    const boundedValue = Math.min(Math.max(value, minValue), maxValue);
    const valueRadio = (boundedValue - minValue) / (maxValue - minValue);

    if(valueRadio >= 1) {
      clearInterval(this.interval);
    } 

    if(value === 6) {
      this.setState(state=>({...state, circleType: 'eveningGredient' }));
    }

      this.setState(state=>({...state, value: ++this.state.value, valueRadio }));
    }, 1000)
  }

  render() {
    const { value, valueRadio, circleType } = this.state;


    console.log(this.state.value);

    return (
      <ClockCircleContainer>
        <Circle valueRadio={valueRadio} circleType={circleType}/>
      </ClockCircleContainer>
    )
  }
}

export default ClockCircle;
