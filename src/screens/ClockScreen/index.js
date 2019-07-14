import React from 'react';
import styled from 'styled-components';
import Scenery from './Scenery/Index';
import ClockCircle from './Clock';
import ContentContainer from '../../components/ContentContainer'

class ClockScreen extends React.PureComponent {

  render() {
    return (
      <ContentContainer>
        <Scenery />
        <ClockCircle />
      </ContentContainer>
    )
  }
}

export default ClockScreen;
