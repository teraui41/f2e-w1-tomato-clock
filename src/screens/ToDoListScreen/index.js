import React from "react";
import styled from "styled-components";
import ToDoItem from './ToDoItem'
import { Panel, PanelTitle } from '../../components/Panel';
import { DataContainer, ContentContainer} from "../../components/Containers";

class ToDoListScreen extends React.PureComponent {
  render() {
    const { activeId } = this.props;

    return (
      <ContentContainer contentId='todo' activeId={activeId}>
        <DataContainer>
          <Panel>
            <PanelTitle>To-Do</PanelTitle>
            <ToDoItem content={'kdahfkd'} />
            <ToDoItem content={'kdahfkd'} />
            <ToDoItem content={'kdahfkd'} />
          </Panel>
        </DataContainer>
        <DataContainer>
          <Panel>
            <PanelTitle>Done</PanelTitle>
            <ToDoItem isDone content={'kdahfkd'} />
            <ToDoItem isDone content={'kdahfkd'} />
            <ToDoItem isDone content={'kdahfkd'} />
          </Panel>
        </DataContainer>
      </ContentContainer>
    );
  }
}

export default ToDoListScreen;
