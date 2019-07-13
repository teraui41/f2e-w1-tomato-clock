import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { Colors } from '../constants/colors.config'

const innerMenuItem = ({ className, text, icon, onClick }) =>
  <span className={className} onClick={onClick}>
    <Icon icon={icon}/>
    <span>{text}</span>
  </span>;

const activeStyle = `
  color: ${Colors.dayPrimary.main};
`

const MenuItem = styled(innerMenuItem)`
  color: ${Colors.white};
  display: block;
  font-size: 1.2rem;
  padding-bottom: 1rem;
  cursor: pointer;
  transition: all .5s ease;
  ${({ id, activeId }) => {
    return (id === activeId)
      ? activeStyle
      : ''
  }}

  &:hover {
    margin-top: -5px;
    margin-bottom: 5px;
  }

  & > i {
    vertical-align: middle;
    width: 56px;
    font-size: 1.6rem;
  }
`

const MenuBox = styled.div`
  flex: 2;
  z-index: 1;
  padding: 4rem 3.8rem;
`

class Menu extends React.PureComponent {
  render() {
    const { activeId } = this.props;

    return (
      <MenuBox>
        <MenuItem id='clock' icon='clock-o' text='TOMATO' activeId={activeId}/>
        <MenuItem id='todolist' icon='list-ul' text='TODO LIST' activeId={activeId}/>
        <MenuItem id='analytics' icon='bar-chart' text='ANALYTICS' activeId={activeId}/>
      </MenuBox>
    )
  }
}

export default Menu;
