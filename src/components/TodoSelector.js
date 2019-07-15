import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Colors } from '../constants/colors.config';

const Today = styled.div`
font-size: 3.2rem;
margin-top: 20px;
color: ${Colors.white}
`

const Date = styled.div`
font-size: 1.2rem;
margin-top: 5px;
width: 250px;
margin-left: 10px;
float: left;
color: ${Colors.white};
letter-spacing: 2px;
`

const SubTitle = styled.div`
`

const TodoCount = styled.span`
margin-top: 10px;
float: left;
color: ${Colors.white};
letter-spacing: 2px;
`

const TodoSelectorContainer = styled.div`
height: 50%;
width: 100%;
bottom: 0px;
position: absolute;
padding: 0px 0px 0px 50px;
`

const TodoList = styled.div`
height: 300px;
width: 100%;

`

class TodoSelector extends React.PureComponent {
  render() {
    return (
      <TodoSelectorContainer>
        <Today>Today</Today>
        <SubTitle>
          <Date>{moment().format('DD   MMMM YYYY')}</Date>
          <TodoCount>(6)</TodoCount>
        </SubTitle>
        <TodoList></TodoList>
      </TodoSelectorContainer>
    )
  }
}

export default TodoSelector;
