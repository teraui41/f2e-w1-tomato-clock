import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #141426;
  height: 100vh;
  width: 100vw;
  display: flex;  
  align-items: center;
  justify-content: center;
`

const Panel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1080px;
  max-height: 680px;
  background-color: #222648;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.46);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: #1c203f;
    bottom: 0px;
  }
`

const Menu = styled.div`
`

const MenuItem = styled.div`
`

const App = () => {
  return (
    <Container>
      <Menu>
        <MenuItem/>
      </Menu>
      <Panel>

      </Panel>
    </Container>
  )
}

export default App;
