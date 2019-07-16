import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Colors } from "../../constants/colors.config";

const Gradient_MAP = {
  day: {
    start: Colors.day.circle.darker,
    stop: Colors.day.circle.lighter
  },
  evening: {
    start: Colors.evening.circle.darker,
    stop: Colors.evening.circle.lighter
  },
  night: {
    start: Colors.night.circle.darker,
    stop: Colors.night.circle.lighter
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
    period: propTypes.oneOf(["day", "evening", "night"])
  };

  static defaultProps = {
    isPay: true
  };

  render() {
    const { period, onClick, isPlaying } = this.props;

    const Gradient = Gradient_MAP[period];

    const PLAY_BUTTON_LEFT = isPlaying
      ? [PLAY_LEFT, PAUSE_LEFT]
      : [PAUSE_LEFT, PLAY_LEFT];
    const PLAY_BUTTON_RIGHT = isPlaying
      ? [PLAY_RIGHT, PAUSE_RIGHT]
      : [PAUSE_RIGHT, PLAY_RIGHT];

    return (
      <Svg id='playButton' width='100px' height='100px' onClick={onClick}>
        <defs>
          <linearGradient id='gradient2' gradientTransform='rotate(90)'>
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
          points={PLAY_BUTTON_LEFT[1]}
          stroke='url(#gradient2)'
          fill='url(#gradient2)'
          style={{
            transition: "all .5s ease"
          }}
        >
          <animate
            id='playLeft'
            begin='playButton.click'
            attributeType='XML'
            attributeName='points'
            dur='.2s'
            from={PLAY_BUTTON_LEFT[0]}
            to={PLAY_BUTTON_LEFT[1]}
          />
        </polygon>
        <polygon
          points={PLAY_BUTTON_RIGHT[1]}
          stroke='url(#gradient2)'
          fill='url(#gradient2)'
          style={{
            transition: "all .5s ease"
          }}
        >
          <animate
            id='playRight'
            begin='playButton.click'
            attributeType='XML'
            attributeName='points'
            dur='.2s'
            from={PLAY_BUTTON_RIGHT[0]}
            to={PLAY_BUTTON_RIGHT[1]}
          />
        </polygon>
      </Svg>
    );
  }
}

export default PlayButton;
