import React from "react";
import styled from 'styled-components'

const WAVE_1= `m-4.5,683.4375c0,-2 0,-68 0.5,-68.4375c-0.5,0.4375 26.5,-25.5625 82.5,-24.5625c56,1 259,50 336,51c77,1 77,-14 76,-14c-1,0 -8,64 -8.5,63.5625c0.5,0.4375 -486.5,-5.5625 -486.5,-7.5625z`;
const WAVE_2 = `m-4.25,683.4375c0,-2 0,-68 0.5,-68.4375c-0.5,0.4375 37.5,27.4375 93.5,28.4375c56,1 249,-55 326,-54c77,1 76,38 75,38c-1,0 -8,64 -8.5,63.5625c0.5,0.4375 -486.5,-5.5625 -486.5,-7.5625z`;

const SVG = styled.svg`
height: 100%;
width: 100%;
position: absolute;
top: 0px;
left: 0px;
`

export const Wave1 = ({ ...props }) => {
  return (
    <SVG>
      <path fill='rgba(255,255,255,0.18)'>
        <animate id="anim11" begin="0s;anim12.end" attributeType="XML" attributeName='d' dur="5s" from={WAVE_1} to={WAVE_2} />
        <animate id="anim12" begin="anim11.end" attributeType="XML" attributeName='d' dur="4s" from={WAVE_2} to={WAVE_1} />
      </path>
    </SVG>
  );
};

export const Wave2 = ({ ...props }) => {
  return (
    <SVG style={{marginTop: 20}}>
      <path fill='rgba(255,255,255,0.18)'>
        <animate id="anim21" begin="0s;anim22.end" attributeType="XML" attributeName='d' dur="6s" from={WAVE_2} to={WAVE_1} />
        <animate id="anim22" begin="anim21.end" attributeType="XML" attributeName='d' dur="4s" from={WAVE_1} to={WAVE_2} />
      </path>
    </SVG>
  );
};

export const Cloud = ({ scale, style }) => {
  return (
    <svg viewBox="0 0 526.899 128" style={style} transform={`scale(${scale})`}>
      <defs>
        <linearGradient id="linear-gradient" x1="-0.907" y1="1" x2="0.789" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path fill='url(#linear-gradient)' data-name="Subtraction 1" className="cls-1" d="M556.957,128H30.058A75.633,75.633,0,0,1,43.976,87.067,76.193,76.193,0,0,1,77.071,60.7a75.952,75.952,0,0,1,69.259,5.873,132.72,132.72,0,0,1,47.452-48.2A131.392,131.392,0,0,1,261,0a132.888,132.888,0,0,1,27.849,2.943,131.338,131.338,0,0,1,48.983,21.709A132.984,132.984,0,0,1,357.743,42.2a103.853,103.853,0,0,1,48.011,1.313A102.856,102.856,0,0,1,450.48,68.841a103.525,103.525,0,0,1,16.146,20A162.322,162.322,0,0,1,556.955,128l0,0h0Z" transform="translate(-30.058 0)"/>
    </svg>
  )
}
