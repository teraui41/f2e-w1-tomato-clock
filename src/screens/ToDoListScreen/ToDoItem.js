import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const ItemContainer = styled.div`
  width: 400px;
  margin: auto;
  padding: 10px 0px;
  padding-left: 15px;
  border-top: 1px solid #5b5e89;
  color: #fff;
  font-size: 1.2rem;
  & i {
    font-size: .6rem;
    vertical-align: middle;
    padding-right: 10px;
  }
  & i:last-child {
    font-size: 1.2rem;
    float: right;

  }
  & span {
    text-decoration-line: ${props=> props.isDone ? 'line-through': 'none'};
  }
`

class ToDoItem extends React.PureComponent {


  render() {
    const { isDone, content } = this.props;

    const iconName = isDone ? 'circle' : 'circle-o';

    return (
      <ItemContainer isDone={isDone}>
        <Icon icon={iconName} />
        <span>{content}</span>
        <Icon hide={!isDone} icon='check' />
      </ItemContainer>
    )
  }
}

export default ToDoItem;