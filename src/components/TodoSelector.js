import React from "react";
import moment from "moment";
import styled from "styled-components";
import Icon from "../components/Icon";
import { Colors } from "../constants/colors.config";

const Today = styled.div`
  font-size: 3.2rem;
  margin-top: 20px;
  color: ${Colors.white};
`;

const Date = styled.div`
  font-size: 1.2rem;
  width: 250px;
  margin-left: 10px;
  float: left;
  color: ${Colors.white};
  letter-spacing: 2px;
`;

const SubTitle = styled.div`
  margin-top: 5px;
  height: 32px;
`;

const TodoCount = styled.span`
  float: left;
  color: ${Colors.white};
  letter-spacing: 2px;
`;

const TodoSelectorContainer = styled.div`
  height: 50%;
  width: 100%;
  bottom: 0px;
  position: absolute;
  padding: 0px 0px 0px 50px;
`;

const TodoList = styled.div`
  height: 150px;
  width: 100%;
  overflow: auto;
`;

const ToDoItem = ({ id, selectedId, content, isDoing }) => {
  const isSelected = id === selectedId;
  const iconName = isSelected ? (isDoing ? "play" : "pause") : "circle-o";

  return (
    <StyledToDoItem isSelected={isSelected}>
      <Icon icon={iconName} />
      <span>{content}</span>
    </StyledToDoItem>
  );
};

const StyledToDoItem = styled.div`
  padding: 14px 16px;
  color: ${props => (props.isSelected ? "#000" : Colors.white)}
  font-weight: bold;
  cursor: pointer;
  border-top: 1px solid #5b5e89;
  background-color: ${props =>
    props.isSelected ? Colors.white : "transparent"}
  transition: all .5s ease;
  &:hover {
    background-color: rgba(255,255,255, 0.2);
  }
  & span {
    letter-spacing: 2px;
  }
  & i {
    font-size: .8rem;
    vertical-align: middle;
    padding-right: 20px;
  }
`;

const PlusIcon = styled.span`
  font-size: 2.2rem;
  margin-right: 15px;
`;

const AddToDo = styled.div`
  color: ${Colors.white}
  font-size: 1.4rem;
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  width: 365px;
  padding-bottom: 20px;
  padding-left: 12px;
  vertical-align: middle;
  transition: all .5s ease;
  &:hover {
    background-color: rgba(255,255,255, 0.2);
  }
`;

class TodoSelector extends React.PureComponent {
  render() {
    const { selectedId, todoList } = this.props;

    return (
      <TodoSelectorContainer>
        <Today>Today</Today>
        <SubTitle>
          <Date>{moment().format("DD MMMM YYYY")}</Date>
          <TodoCount>(6)</TodoCount>
        </SubTitle>
        <TodoList>
          {todoList.map(todo => (
            <ToDoItem
              key={`layoutTodo${todo.get("id")}`}
              id={todo.get("id")}
              selectedId={selectedId}
              content={todo.get("content")}
            />
          ))}
        </TodoList>
        <AddToDo>
          <PlusIcon>+</PlusIcon>
          <span> Add a new mission</span>
        </AddToDo>
      </TodoSelectorContainer>
    );
  }
}

export default TodoSelector;
