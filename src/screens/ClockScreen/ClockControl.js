import React from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import isEmpty from "lodash/isEmpty";
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
  top: 352px;
  left: 106px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: ${Colors.white};
  width: 300px;
  font-weight: bold;
  text-align: center;
`;

const DoneButton = styled.span`
  position: absolute;
  top: 573px;
  left: 103px;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
  color: ${Colors.white};
  width: 300px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const BasicTomatoNumber = ({ className, tomatoes }) => (
  <div className={className}>{tomatoes.join(" ")}</div>
);

const TomatoNumber = styled(BasicTomatoNumber)`
  width: 400px;
  top: 381px;
  text-align: center;
  padding-left: 53px;
  position: absolute;
  color: ${Colors.white};
`;


class ClockControl extends React.PureComponent {
  
  onClick = () => {
    this.props.onDoneClick();
  };

  render() {
    const {
      active,
      countingTime,
      startCounting,
      isPlaying,
      period,
      content,
      tomatoes
    } = this.props;

    const currentTime = moment(countingTime).format("mm:ss");

    return (
      <div>
        <BellIcon active={active} />
        <TimeCounter>{currentTime}</TimeCounter>
        <TodoInfo>{content}</TodoInfo>
        <PlayButton
          period={period}
          isPlaying={isPlaying}
          onClick={startCounting}
        />
        <TomatoNumber tomatoes={tomatoes} />
        <DoneButton onClick={this.onClick}>Done</DoneButton>
      </div>
    );
  }
}

export default ClockControl;
