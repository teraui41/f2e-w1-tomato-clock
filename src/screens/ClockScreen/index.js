import React from "react";
import styled from "styled-components";
import Scenery from "./Scenery";
import ClockCircle from "./Clock";
import TomatoCap from "./TomatoCap";
import ClockControl from "./ClockControl";
import { ContentContainer } from "../../components/Containers";
import {
  INIT_DAY_TIME,
  EVENING_TIME,
  INIT_NIGHT_TIME
} from "../../constants/common";

class ClockScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.interval = null;

    this.state = {
      value: 0,
      valueRadio: 0,
      circleType: "dayGradient"
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    if (this.interval !== null) clearInterval(this.interval);
  }

  startCounting = () => {
    const { isPlaying } = this.props;

    if (isPlaying) {
      this.stopCounting();
      return;
    }

    this.minusSecond();

    this.interval = setInterval(() => {
      this.minusSecond();
    }, 1000);
  };

  stopCounting = () => {
    if (this.interval !== null) clearInterval(this.interval);
    this.props.stopCounting();
  };

  minusSecond = () => {
    this.props.minusSecond();

    const { countingTime, period } = this.props;

    const minValue = 0;
    const maxValue = period === "night" ? INIT_NIGHT_TIME : INIT_DAY_TIME;
    const boundedValue = Math.min(Math.max(countingTime, minValue), maxValue);
    const valueRadio =
      (maxValue - boundedValue - minValue) / (maxValue - minValue);

    this.setState(state => ({
      ...state,
      valueRadio
    }));

    if (countingTime <= 0 && period === "night") {
      this.props.setPeriod("day");
      this.props.resetCounting(INIT_DAY_TIME);
      this.props.stopCounting();
      clearInterval(this.interval);
      return;
    }

    if (countingTime <= 0) {
      this.props.setPeriod("night");
      this.props.resetCounting(INIT_NIGHT_TIME);
    }

    if (countingTime === EVENING_TIME) {
      this.props.setPeriod("evening");
    }
  };

  render() {
    const {
      activeId,
      period,
      resetCounting,
      selectedId,
      countingTime,
      todoList,
      isPlaying
    } = this.props;
    console.log("TCL: ClockScreen -> render -> selectedId", selectedId)

    const { valueRadio } = this.state;

    return (
      <ContentContainer contentId='clock' activeId={activeId}>
        <Scenery period={period} />
        <ClockCircle valueRadio={valueRadio} period={period} />
        <ClockControl
          period={period}
          isPlaying={isPlaying}
          countingTime={countingTime}
          todoList={todoList}
          selectedId={selectedId}
          startCounting={this.startCounting}
          stopCounting={this.stopCounting}
          resetCounting={resetCounting}
        />
        <TomatoCap />
      </ContentContainer>
    );
  }
}

export default ClockScreen;
