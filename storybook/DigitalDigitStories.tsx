import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import DigitalDigit from '../src/DigitalDigit';

const style: React.CSSProperties = {
  height: '90vh',
  margin: 10,
  textAlign: 'center',
};

const color = '#448844';

export default {
  title: 'DigitalDigit',
  component: DigitalDigit,
} as ComponentMeta<typeof DigitalDigit>;

export const WithDigit0: ComponentStory<typeof DigitalDigit> = () => (
  <div style={style}>
    <DigitalDigit digit={0} color={color} />
  </div>
);

export const WithDigit1: ComponentStory<typeof DigitalDigit> = () => (
  <div style={style}>
    <DigitalDigit digit={1} color={color} />
  </div>
);

export const WithDigit2: ComponentStory<typeof DigitalDigit> = () => (
  <div style={style}>
    <DigitalDigit digit={2} color={color} />
  </div>
);

export const WithDigit3: ComponentStory<typeof DigitalDigit> = () => (
  <div style={style}>
    <DigitalDigit digit={3} color={color} />
  </div>
);

export const WithDigit4: ComponentStory<typeof DigitalDigit> = () => (
  <div style={style}>
    <DigitalDigit digit={4} color={color} />
  </div>
);

export const WithDigit5: ComponentStory<typeof DigitalDigit> = () => (
  <div style={style}>
    <DigitalDigit digit={5} color={color} />
  </div>
);

export const WithDigit6: ComponentStory<typeof DigitalDigit> = () => (
  <div style={style}>
    <DigitalDigit digit={6} color={color} />
  </div>
);

export const WithDigit7: ComponentStory<typeof DigitalDigit> = () => (
  <div style={style}>
    <DigitalDigit digit={7} color={color} />
  </div>
);

export const WithDigit8: ComponentStory<typeof DigitalDigit> = () => (
  <div style={style}>
    <DigitalDigit digit={8} color={color} />
  </div>
);

export const WithDigit9: ComponentStory<typeof DigitalDigit> = () => (
  <div style={style}>
    <DigitalDigit digit={9} color={color} />
  </div>
);

export const WithOpacityOfSegment1: ComponentStory<typeof DigitalDigit> =
  () => (
    <div style={style}>
      <DigitalDigit digit={4} color={color} opacitySegment={1} />
    </div>
  );

export const WithOpacityOfSegment0: ComponentStory<typeof DigitalDigit> =
  () => (
    <div style={style}>
      <DigitalDigit digit={4} color={color} opacitySegment={0} />
    </div>
  );
