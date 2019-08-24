import * as React from 'react';

const DigitalDigitRaw: React.FC<DigitalDigitRawProps> = ({ a, b, c, color, d, e, f, g, opacitySegment }) => (
  <svg height="100%" viewBox="-1 -1 88 146">
    {hel(13, 0, color, opacitySegment, a)}
    {vel(0, 11, color, opacitySegment, b)}
    {vel(66, 11, color, opacitySegment, c)}
    {hel(13, 62, color, opacitySegment, d)}
    {vel(0, 73, color, opacitySegment, e)}
    {vel(66, 73, color, opacitySegment, f)}
    {hel(13, 124, color, opacitySegment, g)}
  </svg>
);

const vel = (x: number, y: number, color: string, opacitySegment?: number, filled?: boolean) => (
  <polygon
    points={getPoints(x, y, [[0, 10], [0, 50], [10, 60], [20, 50], [20, 10], [10, 0]])}
    style={getStyle(color, opacitySegment, filled)}
  />
);

const hel = (x: number, y: number, color: string, opacitySegment?: number, filled?: boolean) => (
  <polygon
    points={getPoints(x, y, [[10, 0], [50, 0], [60, 10], [50, 20], [10, 20], [0, 10]])}
    style={getStyle(color, opacitySegment, filled)}
  />
);

const getPoints = (x: number, y: number, points: number[][]) => {
  let str = '';
  points.forEach(([xx, yy]: any) => (str += `${xx + x},${yy + y} `));
  return str;
};

const getStyle = (color: string, opacitySegment?: number, filled?: boolean): React.CSSProperties => ({
  fill: filled ? color : 'none',
  opacity: filled ? 1 : opacitySegment === undefined ? 0.3 : opacitySegment,
  stroke: color,
  strokeWidth: 1
});

interface DigitalDigitRawProps extends React.Props<any> {
  a?: boolean;
  b?: boolean;
  c?: boolean;
  color: string;
  d?: boolean;
  e?: boolean;
  f?: boolean;
  g?: boolean;
  opacitySegment?: number;
}

export default DigitalDigitRaw;
