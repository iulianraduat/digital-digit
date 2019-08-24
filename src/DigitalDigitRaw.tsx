import * as React from 'react';

const DigitalDigitRaw: React.FC<DigitalDigitRawProps> = ({ a, b, c, color, d, e, f, g }) => (
  <svg width="100%" height="100%" viewBox="-1 -1 88 146">
    {hel(13, 0, color, a)}
    {vel(0, 11, color, b)}
    {vel(66, 11, color, c)}
    {hel(13, 62, color, d)}
    {vel(0, 73, color, e)}
    {vel(66, 73, color, f)}
    {hel(13, 124, color, g)}
  </svg>
);

const vel = (x: number, y: number, color: string, filled?: boolean) => (
  <polygon
    points={getPoints(x, y, [[0, 10], [0, 50], [10, 60], [20, 50], [20, 10], [10, 0]])}
    style={getStyle(color, filled)}
  />
);

const hel = (x: number, y: number, color: string, filled?: boolean) => (
  <polygon
    points={getPoints(x, y, [[10, 0], [50, 0], [60, 10], [50, 20], [10, 20], [0, 10]])}
    style={getStyle(color, filled)}
  />
);

const getPoints = (x: number, y: number, points: number[][]) => {
  let str = '';
  points.forEach(([xx, yy]: any) => (str += `${xx + x},${yy + y} `));
  return str;
};

const getStyle = (color: string, filled?: boolean): React.CSSProperties => ({
  fill: filled ? color : 'none',
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
}

export default DigitalDigitRaw;
