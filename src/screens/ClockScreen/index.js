import React from 'react';
import styled from 'styled-components';
import Scenery from './Scenery';
import ClockCircle from './Clock';
import TomatoCap from './TomatoCap';
import ClockControl from './ClockControl';
import { ContentContainer } from '../../components/Containers'

class ClockScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      valueRadio: 0,
      circleType: 'dayGradient'
    }
  }

  componentDidMount() {
    this.interval = setInterval(()=>{
    const { value } = this.state;

    const minValue = 0;
    const maxValue = 10;
    const boundedValue = Math.min(Math.max(value, minValue), maxValue);
    const valueRadio = (boundedValue - minValue) / (maxValue - minValue);

    if(valueRadio >= 1) {
      clearInterval(this.interval);
    } 

    if(value === 6) {
      this.setState(state=>({...state, circleType: 'eveningGradient' }));
    }

      this.setState(state=>({...state, value: ++this.state.value, valueRadio }));
    }, 1000)
  }

  render() {
    const { activeId, period } = this.props;
    const { valueRadio } = this.state;

    return (
      <ContentContainer contentId='clock' activeId={activeId}>
        <Scenery period={period}/>
        <ClockCircle valueRadio={valueRadio} period={period}/>
        <ClockControl period={period}/>
        <TomatoCap />
      </ContentContainer>
    )
  }
}

export default ClockScreen;
