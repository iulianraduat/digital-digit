import * as React from 'react';
import DigitalDigitRaw from './DigitalDigitRaw';

const DigitalDigit: React.FC<DigitalDigitProps> = ({ color, digit, opacitySegment }) => {
  switch (digit) {
    case 0:
      return (
        <DigitalDigitRaw
          a={true}
          b={true}
          c={true}
          e={true}
          f={true}
          g={true}
          color={color}
          opacitySegment={opacitySegment}
        />
      );

    case 1:
      return <DigitalDigitRaw c={true} f={true} color={color} opacitySegment={opacitySegment} />;

    case 2:
      return (
        <DigitalDigitRaw a={true} c={true} d={true} e={true} g={true} color={color} opacitySegment={opacitySegment} />
      );

    case 3:
      return (
        <DigitalDigitRaw a={true} c={true} d={true} f={true} g={true} color={color} opacitySegment={opacitySegment} />
      );

    case 4:
      return <DigitalDigitRaw b={true} c={true} d={true} f={true} color={color} opacitySegment={opacitySegment} />;

    case 5:
      return (
        <DigitalDigitRaw a={true} b={true} d={true} f={true} g={true} color={color} opacitySegment={opacitySegment} />
      );

    case 6:
      return (
        <DigitalDigitRaw
          a={true}
          b={true}
          d={true}
          e={true}
          f={true}
          g={true}
          color={color}
          opacitySegment={opacitySegment}
        />
      );

    case 7:
      return <DigitalDigitRaw a={true} c={true} f={true} color={color} opacitySegment={opacitySegment} />;

    case 8:
      return (
        <DigitalDigitRaw
          a={true}
          b={true}
          c={true}
          d={true}
          e={true}
          f={true}
          g={true}
          color={color}
          opacitySegment={opacitySegment}
        />
      );

    case 9:
      return (
        <DigitalDigitRaw
          a={true}
          b={true}
          c={true}
          d={true}
          f={true}
          g={true}
          color={color}
          opacitySegment={opacitySegment}
        />
      );

    default:
      return <div />;
  }
};

interface DigitalDigitProps {
  color: string;
  digit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  opacitySegment?: number;
}

export default DigitalDigit;
