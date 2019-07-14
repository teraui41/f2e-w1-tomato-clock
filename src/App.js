import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import Menu from './containers/MenuContainer';
import ClockContainer from './containers/ClockContainer';
import ReportContainer from './containers/ReportContainer';
import TodoListContainer from './containers/TodoListContainer';

const ID_MAP = ['clock', 'todos', 'report'];

const Container = styled.div`
  background-color: #181b44;
  height: 100vh;
  width: 100vw;
  display: flex;  
  align-items: center;
  justify-content: center;
`

const Panel = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1080px;
  max-height: 680px;
  background-color: #242962;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.46);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: #1e2253;
    bottom: 0px;
    z-index: 1;
  }
`

const Content = styled.div`
  flex: 5.5;
  z-index: 1;
  position: relative;
  overflow: hidden;

`

const ContentSelector = styled.div`
  position: relative;
  height: 100%;
  margin-top: -${({ selectedIndex }) => selectedIndex * 680 }px;
  transition: margin-top .8s ease;
`

const App = props => {

  const { activeId, setActiveId } = props;

  const selectedIndex = ID_MAP.indexOf(activeId);

  return (
    <Container>
      <Panel>
        <Menu activeId={activeId} setActiveId={setActiveId}/>
        <Content>
          <ContentSelector selectedIndex={selectedIndex}>
            <ClockContainer />
            <TodoListContainer />
            <ReportContainer />
          </ContentSelector>
        </Content>
      </Panel>
    </Container >
  )
}

App.propTypes = {

}

export default App;
