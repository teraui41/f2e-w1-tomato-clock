import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Colors } from "../../constants/colors.config";

const Gradient_MAP = {
  dayGradient: {
    start: Colors.dayCircle.darker,
    stop: Colors.dayCircle.lighter
  },
  eveningGradient: {
    start: Colors.eveningCircle.darker,
    stop: Colors.eveningCircle.lighter
  },
  nightGradient: {
    start: Colors.nightCircle.darker,
    stop: Colors.nightCircle.lighter
  }
};

const PAUSE_LEFT = `
  35 22,
  45 22,
  45 57,
  35 57
`;

const PAUSE_RIGHT = `
  55 22,
  65 22,
  65 57,
  55 57
`;

const PLAY_LEFT = `
  40 18,
  70 40,
  70 40,
  40 62
`;

const PLAY_RIGHT = `
  55 22
`;

const Svg = styled.svg`
  position: absolute;
  top: 410px;
  left: 204px;
`;

class PlayButton extends React.PureComponent {
  static propTypes = {
    circleType: propTypes.oneOf([
      "dayGradient",
      "eveningGradient",
      "nightGradient"
    ])
  };

  static defaultProps = {
    isPay: true,
    circleType: "dayGradient"
  };

  constructor(props) {
    super(props);

    this.state = {
      isPlay: false
    };
  }

  onClick = () => {
    this.setState(state => ({ ...state, isPlay: !this.state.isPlay }));
  };

  render() {
    const { isPlay } = this.state;
    const { circleType } = this.props;

    const Gradient = Gradient_MAP[circleType];

    const PLAY_BUTTON_LEFT = isPlay ? PLAY_LEFT : PAUSE_LEFT;
    const PLAY_BUTTON_RIGHT = isPlay ? PLAY_RIGHT : PAUSE_RIGHT;

    return (
      <Svg width='100px' height='100px' onClick={this.onClick}>
        <defs>
          <linearGradient id='gradient2' gradientTransform="rotate(90)">
            <stop
              offset='0%'
              stopColor={Gradient.stop}
              style={{ transition: "5s ease" }}
            />
            <stop
              offset='100%'
              stopColor={Gradient.start}
              style={{ transition: "5s ease" }}
            />
          </linearGradient>
        </defs>
        <circle cx='50' cy='40' r='35' strokeWidth='25' fill='#fff' />
        <polygon
          points={PLAY_BUTTON_LEFT}
          stroke='url(#gradient2)'
          fill='url(#gradient2)'
          style={{
            transition: "all .5s ease"
          }}
        />
        <polygon
          points={PLAY_BUTTON_RIGHT}
          stroke='url(#gradient2)'
          fill='url(#gradient2)'
          style={{
            transition: "all .5s ease"
          }}
        />
      </Svg>
    );
  }
}

export default PlayButton;
