import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { Panel, PanelTitle } from "../../components/Panel";
import { DataContainer, ContentContainer } from "../../components/Containers";

const EmptyContent = styled.div`
  width: 400px;
  margin: auto;
  padding: 10px 0px;
  padding-left: 15px;
  border-top: 1px solid #5b5e89;
  color: #fff;
  font-size: 1.2rem;
`;

const ListBox = styled.div`
  height: 220px;
  width: 100%;
  overflow: auto;
`;

class ToDoListScreen extends React.PureComponent {
  render() {
    const { activeId, doneList, todoList } = this.props;

    return (
      <ContentContainer contentId='todo' activeId={activeId}>
        <DataContainer>
          <Panel>
            <PanelTitle>To-Do</PanelTitle>
            <ListBox>
              {todoList.isEmpty() ? <EmptyContent> . . . </EmptyContent> : null}
              {todoList.map(todo => (
                <ToDoItem
                  key={`Todo${todo.get('id')}`}
                  content={todo.get('content')}
                />
              ))}
            </ListBox>
          </Panel>
        </DataContainer>
        <DataContainer>
          <Panel>
            <PanelTitle>Done</PanelTitle>
            <ListBox>
              {doneList.isEmpty() ? <EmptyContent> . . . </EmptyContent> : null}
              {doneList.map(todo => (
                <ToDoItem
                  key={`Todo${todo.get("id")}`}
                  content={todo.get("content")}
                  isDone
                />
              ))}
            </ListBox>
          </Panel>
        </DataContainer>
      </ContentContainer>
    );
  }
}

export default ToDoListScreen;
