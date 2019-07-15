import React from "react";
import styled from "styled-components";
import ContentContainer from "../../components/ContentContainer";

const ToDoContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
`;

const Panel = styled.div`
  flex: 1;
  padding: 35px;
`;

const PanelTitle = styled.div`
  width: 400px;
  height: 40px;
  background-color: #5b5e89;
  text-align: left;
  line-height: 40px;
  font-size: 1.2rem;
  font-weight: bold;
  letter-space: 2ox;
  color: #fff;
  padding-left: 20px;
  margin: auto;
`;



class ToDoListScreen extends React.PureComponent {
  render() {
    return (
      <ContentContainer>
        <ToDoContainer>
          <Panel>
            <PanelTitle>To-Do</PanelTitle>
          </Panel>
        </ToDoContainer>
        <ToDoContainer>
          <Panel>
            <PanelTitle>Done</PanelTitle>
          </Panel>
        </ToDoContainer>
      </ContentContainer>
    );
  }
}

export default ToDoListScreen;
