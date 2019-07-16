import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Colors } from '../../../constants/colors.config';

const CircleContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Gradient_MAP = {
  day: { start: Colors.day.circle.lighter, stop: Colors.day.circle.darker },
  evening: { start: Colors.evening.circle.lighter, stop: Colors.evening.circle.darker },
  night: { start: Colors.night.circle.lighter, stop: Colors.night.circle.darker }
}

class Circle extends React.PureComponent {

  static propTypes = {
    valueRadio: propTypes.number,
    circleType: propTypes.oneOf([
      'dayGradient', 'eveningGradient', 'nightGradient'
    ])
  }

  static defaultProps = {
    valueRadio: 0,
    circleType: 'dayGradient'
  }

  render() {
    const { period, valueRadio } = this.props;
    const Gradient = Gradient_MAP[period];


    const diameter = Math.PI * 2 * 200;
    const diameterRadio = diameter * valueRadio;

    return (
      <CircleContainer>
        <svg height="100%" width="100%">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={Gradient.stop} style={{transition: '5s ease'}}/>
              <stop offset="100%" stopColor={Gradient.start} style={{transition: '5s ease'}}/>
            </linearGradient>
          </defs>
          <circle
            cx="254" cy="330" r="200" stroke="rgba(255,255,255, 0.1)" strokeWidth="28" fill="none" />
          <path
            d={`
            M 255, 130
            a 200,200 4 0 0 0, 400
            a 200,200 4 0 0 0, -400
           `}

            style={{
              strokeDasharray: `${diameterRadio}px ${diameter}px`,
              strokeDashoffset: '0px',
              strokeLinecap: 'round',
              transition: 'all 1s ease'
            }}

            stroke="url(#gradient)" strokeWidth="28" fill="none"
          />
          <path
           d={`
           M 252, 130
           a 200,200 4 0 0 0, 400
           a 200,200 4 0 0 0, -400
          `}

           style={{
             strokeDasharray: `1px ${diameter}px`,
             strokeDashoffset: `${- diameterRadio + 4}px`,
             strokeLinecap: 'round',
             transition: 'stroke-dashoffset 1s ease 0s'
           }}

           stroke="#fff" strokeWidth="42" fill="none"
         />
        </svg>
      </CircleContainer>
    )
  }
}

export default Circle;
