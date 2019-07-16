import React from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import Icon from "../../components/Icon";
import { Colors } from "../../constants/colors.config";
import moment from "moment";

const innerBellIcon = ({ className, active }) => {
  const iconName = active ? "bell-o" : "bell-slash-o";

  return (
    <span className={className}>
      <Icon icon={iconName} />
    </span>
  );
};

const BellIcon = styled(innerBellIcon)`
  position: absolute;
  color: ${Colors.white};
  font-size: 1.6rem;
  cursor: pointer;
  top: 180px;
  left: 228px;
  padding: 10px;
  border-radius: 100px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.18);
  }
`;

const TimeCounter = styled.span`
  position: absolute;
  top: 230px;
  left: 120px;
  font-size: 6rem;
  letter-spacing: 10px;
  color: ${Colors.white};
`;

const TodoInfo = styled.span`
  position: absolute;
  top: 365px;
  left: 106px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: ${Colors.white};
  width: 300px;
  font-weight: bold;
  text-align: center;
`;

const CancelButton = styled.span`
  position: absolute;
  top: 580px;
  left: 100px;
  font-size: 1rem;
  letter-spacing: 1px;
  color: ${Colors.white};
  width: 300px;
  font-weight: bold;
  text-align: center;
`;

class ClockControl extends React.PureComponent {
  render() {
    const {
      active,
      currentTime: time,
      period,
      todoText = "The first thing to do today."
    } = this.props;

    const currentTime = moment(25* 60 * 1000).format("mm:ss");

    return (
      <div>
        <BellIcon active={active} />
        <TimeCounter>{currentTime}</TimeCounter>
        <TodoInfo>{todoText}</TodoInfo>
        <PlayButton period={period} />
        <CancelButton>Cancel</CancelButton>
      </div>
    );
  }
}

export default ClockControl;
