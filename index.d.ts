import * as React from 'react';

export interface DigitalDigitProps {
  color: string;
  digit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  opacitySegment?: number;
}

declare class DigitalDigit extends React.Component<DigitalDigitProps> {}

export interface DigitalDigitRawProps {
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

declare class DigitalDigitRaw extends React.Component<DigitalDigitRawProps> {}

declare module 'digital-digit' {}

export default DigitalDigit;
export { DigitalDigit, DigitalDigitRaw };
