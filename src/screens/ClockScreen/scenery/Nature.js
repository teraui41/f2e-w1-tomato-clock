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
