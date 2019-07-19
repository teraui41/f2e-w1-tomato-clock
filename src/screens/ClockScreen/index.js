import React from "react";
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
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

const defaultState = {
  id: "",
  index: null,
  doneDate: null,
  content: "Set a mission to this pomodoro !",
  tomatoes: []
};

class ClockScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.interval = null;

    this.state = {
      value: 0,
      valueRadio: 0,
      ...defaultState
    };
  }

  componentDidUpdate(nextProps, nextState) {
    const { todoList, selectedId } = this.props;
    if (!isEmpty(selectedId) && (selectedId !== nextProps.selectedId)) {
      const index = todoList.findIndex(todo => todo.get("id") === selectedId);
      const todoItem = todoList.get(index).toJS();
      this.setState(state => ({ ...state, index, ...todoItem }));
    }
  }

  componentWillUnmount() {
    if (this.interval !== null) clearInterval(this.interval);
  }

  startCounting = () => {
    const { isPlaying, selectedId } = this.props;

    if(isEmpty(selectedId)){
      return;
    }

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

    const {
      countingTime,
      period,
      todoList,
      selectedId,
      updateTodo
    } = this.props;

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
      this.initClock();

      const index = todoList.findIndex(todo => todo.get("id") === selectedId);
      const currentTomato = todoList.getIn([index, "tomatoes"]);
      const tomatoes = [...currentTomato, "●"];
      updateTodo({ index, tomatoes });
      this.setState(state => ({ ...state, tomatoes }));

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

  initClock = () => {
    this.props.setPeriod("day");
    this.props.resetCounting(INIT_DAY_TIME);
    this.props.stopCounting();
    clearInterval(this.interval);
  };

  onDoneClick = () => {
    const { selectedId, deleteTodo, todoList } = this.props;

    if(isEmpty(selectedId))
      return;

    const index = todoList.findIndex(todo => todo.get("id") === selectedId);

    const todoItem = todoList.get(index).toJS();

    deleteTodo({ index, ...todoItem, doneDate: moment().format('YYYY-MM-DD') });

    this.setState(state=>({ state, ...defaultState }));

    this.initClock();
    this.props.initSelectedId()
  };

  render() {
    const {
      period,
      todoList,
      activeId,
      isPlaying,
      selectedId,
      deleteTodo,
      updateTodo,
      countingTime,
      resetCounting
    } = this.props;

    const { valueRadio, content, tomatoes } = this.state;

    return (
      <ContentContainer contentId='clock' activeId={activeId}>
        <Scenery period={period} />
        <ClockCircle valueRadio={valueRadio} period={period} />
        <ClockControl
          updateTodo={updateTodo}
          period={period}
          todoList={todoList}
          isPlaying={isPlaying}
          selectedId={selectedId}
          deleteTodo={deleteTodo}
          tomatoes={tomatoes}
          content={content}
          onDoneClick={this.onDoneClick}
          countingTime={countingTime}
          initClock={this.initClock}
          stopCounting={this.stopCounting}
          startCounting={this.startCounting}
          resetCounting={resetCounting}
        />
        <TomatoCap />
      </ContentContainer>
    );
  }
}

export default ClockScreen;
