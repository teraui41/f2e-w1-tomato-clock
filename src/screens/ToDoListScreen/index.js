import React from "react";
import styled from "styled-components";
import ContentContainer from "../../components/ContentContainer";
import ToDoItem from './ToDoItem'

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
  padding-left: 15px;
  margin: auto;
`;



class ToDoListScreen extends React.PureComponent {
  render() {
    return (
      <ContentContainer>
        <ToDoContainer>
          <Panel>
            <PanelTitle>To-Do</PanelTitle>
            <ToDoItem content={'kdahfkd'} />
            <ToDoItem content={'kdahfkd'} />
            <ToDoItem content={'kdahfkd'} />
          </Panel>
        </ToDoContainer>
        <ToDoContainer>
          <Panel>
            <PanelTitle>Done</PanelTitle>
            <ToDoItem isDone content={'kdahfkd'} />
            <ToDoItem isDone content={'kdahfkd'} />
            <ToDoItem isDone content={'kdahfkd'} />
          </Panel>
        </ToDoContainer>
      </ContentContainer>
    );
  }
}

export default ToDoListScreen;
