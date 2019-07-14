import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { Colors } from '../constants/colors.config'

const innerMenuItem = ({ className, text, icon, ...props }) =>
  <span className={className} {...props}>
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

  onClick = ({ currentTarget: { id}}) => {
    this.props.setActiveId(id);
  }

  render() {
    const { activeId } = this.props;

    return (
      <MenuBox>
        <MenuItem id='clock' icon='clock-o' text='TOMATO' activeId={activeId} onClick={this.onClick}/>
        <MenuItem id='todos' icon='list-ul' text='TODO LIST' activeId={activeId}  onClick={this.onClick}/>
        <MenuItem id='report' icon='bar-chart' text='ANALYTICS' activeId={activeId}  onClick={this.onClick}/>
      </MenuBox>
    )
  }
}

export default Menu;
