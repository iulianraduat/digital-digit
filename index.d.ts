import * as React from 'react';

export interface DigitalDigitProps extends React.Props<DigitalDigit> {
  color: string;
  digit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

declare class DigitalDigit extends React.Component<DigitalDigitProps> {}

export interface DigitalDigitRawProps extends React.Props<DigitalDigitRaw> {
  a?: boolean;
  b?: boolean;
  c?: boolean;
  color: string;
  d?: boolean;
  e?: boolean;
  f?: boolean;
  g?: boolean;
}

declare class DigitalDigitRaw extends React.Component<DigitalDigitRawProps> {}

declare module 'digital-digit' {}

export default DigitalDigit;
export { DigitalDigit, DigitalDigitRaw };
