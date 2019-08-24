import * as React from 'react';
import DigitalDigitRaw from './DigitalDigitRaw';

const DigitalDigit: React.FC<DigitalDigitProps> = ({ color, digit }) => {
  switch (digit) {
    case 0:
      return <DigitalDigitRaw a={true} b={true} c={true} e={true} f={true} g={true} color={color} />;

    case 1:
      return <DigitalDigitRaw c={true} f={true} color={color} />;

    case 2:
      return <DigitalDigitRaw a={true} c={true} d={true} e={true} g={true} color={color} />;

    case 3:
      return <DigitalDigitRaw a={true} c={true} d={true} f={true} g={true} color={color} />;

    case 4:
      return <DigitalDigitRaw b={true} c={true} d={true} f={true} color={color} />;

    case 5:
      return <DigitalDigitRaw a={true} b={true} d={true} f={true} g={true} color={color} />;

    case 6:
      return <DigitalDigitRaw a={true} b={true} d={true} e={true} f={true} g={true} color={color} />;

    case 7:
      return <DigitalDigitRaw a={true} c={true} f={true} color={color} />;

    case 8:
      return <DigitalDigitRaw a={true} b={true} c={true} d={true} e={true} f={true} g={true} color={color} />;

    case 9:
      return <DigitalDigitRaw a={true} b={true} c={true} d={true} f={true} g={true} color={color} />;

    default:
      return <div />;
  }
};

interface DigitalDigitProps {
  color: string;
  digit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

export default DigitalDigit;
