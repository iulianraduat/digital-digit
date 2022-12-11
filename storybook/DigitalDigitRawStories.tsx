import { ComponentMeta, ComponentStory, storiesOf } from '@storybook/react';
import React from 'react';
import DigitalDigitRaw from '../src/DigitalDigitRaw';

const style: React.CSSProperties = {
  height: '90vh',
  margin: 10,
  textAlign: 'center',
};

const color = '#448844';

export default {
  title: 'DigitalDigitRaw',
  component: DigitalDigitRaw,
} as ComponentMeta<typeof DigitalDigitRaw>;

export const WithNoSegmentHighlighted: ComponentStory<typeof DigitalDigitRaw> =
  () => (
    <div style={style}>
      <DigitalDigitRaw color={color} />
    </div>
  );

export const WithSegmentA: ComponentStory<typeof DigitalDigitRaw> = () => (
  <div style={style}>
    <DigitalDigitRaw a={true} color={color} />
  </div>
);

export const WithSegmentB: ComponentStory<typeof DigitalDigitRaw> = () => (
  <div style={style}>
    <DigitalDigitRaw b={true} color={color} />
  </div>
);

export const WithSegmentC: ComponentStory<typeof DigitalDigitRaw> = () => (
  <div style={style}>
    <DigitalDigitRaw c={true} color={color} />
  </div>
);

export const WithSegmentD: ComponentStory<typeof DigitalDigitRaw> = () => (
  <div style={style}>
    <DigitalDigitRaw d={true} color={color} />
  </div>
);

export const WithSegmentE: ComponentStory<typeof DigitalDigitRaw> = () => (
  <div style={style}>
    <DigitalDigitRaw e={true} color={color} />
  </div>
);

export const WithSegmentF: ComponentStory<typeof DigitalDigitRaw> = () => (
  <div style={style}>
    <DigitalDigitRaw f={true} color={color} />
  </div>
);

export const WithSegmentG: ComponentStory<typeof DigitalDigitRaw> = () => (
  <div style={style}>
    <DigitalDigitRaw g={true} color={color} />
  </div>
);
