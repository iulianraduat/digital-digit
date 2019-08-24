import DigitalDigit from '../src/DigitalDigit';
import DigitalDigitRaw from '../src/DigitalDigitRaw';
import React from 'react';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: '90vh',
  margin: 10,
  textAlign: 'center'
};

const color = '#448844';

storiesOf('DigitalDigit', module)
  .add('with digit 0', () => (
    <div style={style}>
      <DigitalDigit digit={0} color={color} />
    </div>
  ))
  .add('with digit 1', () => (
    <div style={style}>
      <DigitalDigit digit={1} color={color} />
    </div>
  ))
  .add('with digit 2', () => (
    <div style={style}>
      <DigitalDigit digit={2} color={color} />
    </div>
  ))
  .add('with digit 3', () => (
    <div style={style}>
      <DigitalDigit digit={3} color={color} />
    </div>
  ))
  .add('with digit 4', () => (
    <div style={style}>
      <DigitalDigit digit={4} color={color} />
    </div>
  ))
  .add('with digit 5', () => (
    <div style={style}>
      <DigitalDigit digit={5} color={color} />
    </div>
  ))
  .add('with digit 6', () => (
    <div style={style}>
      <DigitalDigit digit={6} color={color} />
    </div>
  ))
  .add('with digit 7', () => (
    <div style={style}>
      <DigitalDigit digit={7} color={color} />
    </div>
  ))
  .add('with digit 8', () => (
    <div style={style}>
      <DigitalDigit digit={8} color={color} />
    </div>
  ))
  .add('with digit 9', () => (
    <div style={style}>
      <DigitalDigit digit={9} color={color} />
    </div>
  ))
  .add('with opacity of segment 1', () => (
    <div style={style}>
      <DigitalDigit digit={4} color={color} opacitySegment={1} />
    </div>
  ))
  .add('with opacity of segment 0', () => (
    <div style={style}>
      <DigitalDigit digit={4} color={color} opacitySegment={0} />
    </div>
  ));

storiesOf('DigitalDigitRaw', module)
  .add('with no segment highlighted', () => (
    <div style={style}>
      <DigitalDigitRaw color={color} />
    </div>
  ))
  .add('with segment a', () => (
    <div style={style}>
      <DigitalDigitRaw a={true} color={color} />
    </div>
  ))
  .add('with segment b', () => (
    <div style={style}>
      <DigitalDigitRaw b={true} color={color} />
    </div>
  ))
  .add('with segment c', () => (
    <div style={style}>
      <DigitalDigitRaw c={true} color={color} />
    </div>
  ))
  .add('with segment d', () => (
    <div style={style}>
      <DigitalDigitRaw d={true} color={color} />
    </div>
  ))
  .add('with segment e', () => (
    <div style={style}>
      <DigitalDigitRaw e={true} color={color} />
    </div>
  ))
  .add('with segment f', () => (
    <div style={style}>
      <DigitalDigitRaw f={true} color={color} />
    </div>
  ))
  .add('with segment g', () => (
    <div style={style}>
      <DigitalDigitRaw g={true} color={color} />
    </div>
  ));
