import React from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import Menu from "./containers/MenuContainer";
import TodoSelector from "./components/TodoSelector";
import ClockContainer from "./containers/ClockContainer";
import ReportContainer from "./containers/ReportContainer";
import TodoListContainer from "./containers/TodoListContainer";
import { Colors } from "./constants/colors.config";

const ID_MAP = ["clock", "todo", "report"];

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  background-color: #181b44;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    content: "";
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: #1e2253;
    bottom: 0px;
    z-index: 1;
  }
`;

const Content = styled.div`
  flex: 5.6;
  z-index: 1;
  position: relative;
  overflow: hidden;
`;

const ContentSelector = styled.div`
  position: relative;
  height: 100%;
  margin-top: -${({ selectedIndex }) => selectedIndex * 680}px;
  transition: margin-top 0.8s ease;
`;

const ControlPanel = styled.div`
  flex: 3;
  z-index: 1;
  position: relative;
`;

const Motto = styled.div`
  margin-left: 50px;
  font-size: 1.3rem;
  background-image: linear-gradient(
    45deg,
    ${({ colorSetting }) => colorSetting.darker},
    ${({ colorSetting }) => colorSetting.lighter}
  );
  color: #fff;
  padding: 8px 15px;
  line-height: 24px;
  margin-top: -20px;
  letter-spacing: 2px;
  width: 250px;
`;

const App = props => {
  const { period, todoList, activeId, selectedId, setActiveId, addToDoToDoing, isPlaying } = props;

  const selectedIndex = ID_MAP.indexOf(activeId);

  const colorSetting = Colors[period].primary;

  return (
    <Container>
      <Panel>
        <ControlPanel>
          <Menu
            colorSetting={colorSetting}
            activeId={activeId}
            setActiveId={setActiveId}
          />
          <Motto colorSetting={colorSetting}>Work hard, play hard.</Motto>
          <TodoSelector selectedId={selectedId} isPlaying={isPlaying} todoList={todoList} addToDoToDoing={addToDoToDoing} />
        </ControlPanel>
        <Content>
          <ContentSelector selectedIndex={selectedIndex}>
            <ClockContainer activeId={activeId} />
            <TodoListContainer activeId={activeId} />
            <ReportContainer activeId={activeId} />
          </ContentSelector>
        </Content>
      </Panel>
    </Container>
  );
};

App.propTypes = {};

export default App;
