import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../../components/ContentContainer'

const ReportContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: ${ 680 * 2 }px;
`

class ReportScreen extends React.PureComponent {
  render() {
    return (
      <ContentContainer>
        <span>ReportContainer</span>
      </ContentContainer>
    )
  }
}

export default ReportScreen;
