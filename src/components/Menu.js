import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { Colors } from "../constants/colors.config";

const innerMenuItem = ({ className, colorSetting, text, activeId, icon, ...props }) => (
  <span className={className} {...props}>
    <Icon icon={icon} />
    <span>{text}</span>
  </span>
);

const MenuItem = styled(innerMenuItem)`
  font-size: ${({ id, activeId }) => (id === activeId ? "1.4rem" : "1.2rem")};
  color: ${({ id, activeId, colorSetting }) =>
    id === activeId ? colorSetting.lighter : Colors.white};
  display: block;
  padding-bottom: 1rem;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    margin-top: -5px;
    margin-bottom: 5px;
  }

  & > i {
    vertical-align: middle;
    width: 56px;
    font-size: 1.6rem;
  }
`;

const MenuBox = styled.div`
  flex: 2;
  z-index: 1;
  padding: 4rem 3.8rem;
`;

class Menu extends React.PureComponent {
  onClick = ({ currentTarget: { id } }) => {
    this.props.setActiveId(id);
  };

  render() {
    const { activeId, colorSetting } = this.props;

    return (
      <MenuBox>
        <MenuItem
          id='clock'
          icon='clock-o'
          text='TOMATO'
          activeId={activeId}
          colorSetting={colorSetting}
          onClick={this.onClick}
        />
        <MenuItem
          id='todo'
          icon='list-ul'
          text='TODO LIST'
          activeId={activeId}
          colorSetting={colorSetting}
          onClick={this.onClick}
        />
        <MenuItem
          id='report'
          icon='bar-chart'
          text='ANALYTICS'
          activeId={activeId}
          colorSetting={colorSetting}
          onClick={this.onClick}
        />
      </MenuBox>
    );
  }
}

export default Menu;
