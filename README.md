# digital-digit

A digital digit which can display any digit from 0 to 9 and a component which be used to create a custom sign by lighting different segments of it

---

## Demo

You can access the storybook for these components [here](https://iulian-radu-at.github.io/digital-digit/).

## Props

There are two components. One for displaying digits (DigitalDigit) and one generic (DigitalDigitRaw) used by the first component.

### Props accepted by DigitalDigit

| Name  | Type   | Required | Default | Description               |
|-------|--------|----------|---------|---------------------------|
| color | string | yes      | -       | The color of the segments |
| digit | 0 .. 9 | yes      | -       | The digit to be displayed |

### Props accepted by DigitalDigitRaw

| Name  | Type    | Required | Default | Description             |
|-------|---------|----------|---------|-------------------------|
| a     | boolean | no       | false   | The top segment         |
| b     | boolean | no       | false   | The upper left segment  |
| c     | boolean | no       | false   | The upper right segment |
| color | string  | yes      | -       | The color of segments   |
| d     | boolean | no       | false   | The middle segment      |
| e     | boolean | no       | false   | The lower left segment  |
| f     | boolean | no       | false   | The lower right segment |
| g     | boolean | no       | false   | The bottom segment      |

All segments set to true will be filled with the specified color.

---

## Versions

| DigitalDigit _uses_ | React  |
|--------------------:|:------:|
|               1.0.x | 16.9.0 |

### About versioning schema used for DigitalDigit

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of DigitalDigit or DigitalDigitRaw
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of DigitalDigit or DigitalDigitRaw

---

## Example

Displaying a digit:

```js
import * as React from "react";
import DigitalDigit from "digital-digit";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DigitalDigit
          digit={2}
          color="black"
        />
      </div>
    );
  }
}

export default App;
```

Displaying the digit 4 using the raw component:

```js
import * as React from "react";
import { DigitalDigitRaw } from "digital-digit";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DigitalDigitRaw
          b={true}
          c={true}
          d={true}
          f={true}
          color="black"
        />
      </div>
    );
  }
}

export default App;
```

---

## Changelog

### 1.0.0

- digital-digit is made publicly available

