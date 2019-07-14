import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Colors } from '../../../constants/colors.config';

const CircleContainer = styled.div`
  width: 100%;
  height: 100%;
`

const GREDIENT_MAP = {
  dayGredient: { start: Colors.dayCircle.lighter, stop: Colors.dayCircle.darker },
  eveningGredient: { start: Colors.eveningCircle.lighter, stop: Colors.eveningCircle.darker },
  nightGredient: { start: Colors.nightCircle.lighter, stop: Colors.nightCircle.darker }
}

class Circle extends React.PureComponent {

  static propTypes = {
    valueRadio: propTypes.number,
    circleType: propTypes.oneOf([
      'dayGredient', 'eveningGredient', 'nightGredient'
    ])
  }

  static defaultProps = {
    valueRadio: 0,
    circleType: 'dayGredient'
  }

  render() {
    const { circleType, valueRadio } = this.props;
    const gredient = GREDIENT_MAP[circleType];


    const diameter = Math.PI * 2 * 200;
    const diameterRadio = diameter * valueRadio;

    return (
      <CircleContainer>
        <svg height="100%" width="100%">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gredient.stop} style={{transition: '5s ease'}}/>
              <stop offset="100%" stopColor={gredient.start} style={{transition: '5s ease'}}/>
            </linearGradient>
          </defs>
          <circle
            cx="250" cy="280" r="200" strokeWidth="25" fill="none" />

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

            stroke="url(#gradient)" strokeWidth="25" fill="none"
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

           stroke="#fff" strokeWidth="40" fill="none"
         />
        </svg>
      </CircleContainer>
    )
  }
}

export default Circle;
