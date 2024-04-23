# nstypocolors

<img src="./assets/nstypocoloricon.png" alt="My Colors Icon" width="250" height="250" />

[![npm version](https://img.shields.io/npm/v/nstypocolors)](https://www.npmjs.com/package/nstypocolors)
![Downloads](https://img.shields.io/npm/dt/nstypocolors?style=flat)
![Last Commit](https://img.shields.io/github/last-commit/nsgpriyanshu/nstypocolors)

`nstypocolors` is a TypeScript package that provides colorful console logs for TypeScript developers. It allows you to log messages with different colors in the console, making it easier to debug and understand your logs.

## Features

- Log messages with different colors such as red, green, yellow, blue, magenta, cyan, and white.
- Designed specifically for TypeScript, ensuring strong type safety and compatibility.

## Installation

You can install `nstypocolors` via npm:

```bash
npm install nstypocolors
```

## Usage

To start using nstypocolors, import the desired functions into your TypeScript project

```ts
import {
  logRed,
  logGreen,
  logPink,
  logYellow,
  logBlue,
  logMagenta,
  logCyan,
  logWhite,
  logBlack,
} from "nstypocolors";
```

Now you can use the provided functions to log colorful messages:

```ts
logRed("This is a red message");
logGreen("This is a green message");
logPink("This is a pink message");
logYellow("This is a yellow message");
logBlue("This is a blue message");
logMagenta("This is a magenta message");
logCyan("This is a cyan message");
logWhite("This is a white message");
logBlack("This is a black message");
```

Similarly, you can use bright and pastel colors

```ts
import { logBrightRed, logPastelGreen } from "nstypocolors";

// Log message in bright colors
logBrightRed("This is a bright red message!");

// Log message in pastel colors
logPastelGreen("This is a pastel green message!");
```

> [!TIP]
> Consider importing only the necessary colors to streamline your code and reduce unnecessary clutter. By importing only the colors you need, you can enhance readability and maintainability, ensuring that your code remains clean and efficient.

## Our Colors

The `nstypocolors` package provides a variety of colors that you can use for colorful console logging. Here are the available colors:

- **Red**: Logs a message in red.
- **Green**: Logs a message in green.
- **Pink**: Logs a message in pink.
- **Yellow**: Logs a message in yellow.
- **Blue**: Logs a message in blue.
- **Magenta**: Logs a message in magenta.
- **Cyan**: Logs a message in cyan.
- **White**: Logs a message in white.
- **Black**: Logs a message in black.

In addition to the standard colors, the package also provides bright and pastel colors:

- **Bright Colors**:

  - **Bright Red**: Logs a message in bright red.
  - **Bright Green**: Logs a message in bright green.
  - **Bright Yellow**: Logs a message in bright yellow.
  - **Bright Blue**: Logs a message in bright blue.
  - **Bright Magenta**: Logs a message in bright magenta.
  - **Bright Cyan**: Logs a message in bright cyan.
  - **Bright White**: Logs a message in bright white.

- **Pastel Colors**:
  - **Pastel Red**: Logs a message in pastel red.
  - **Pastel Green**: Logs a message in pastel green.
  - **Bright Pink**: Logs a message in bright pink.
  - **Pastel Yellow**: Logs a message in pastel yellow.
  - **Pastel Blue**: Logs a message in pastel blue.
  - **Pastel Magenta**: Logs a message in pastel magenta.
  - **Pastel Cyan**: Logs a message in pastel cyan.
  - **Pastel White**: Logs a message in pastel white.
  - **Pastel Pink**: Logs a message in pastel pink.
  - **Pastel Lavender**: Logs a message in pastel lavender.
  - **Pastel Coral**: Logs a message in pastel coral.
  - **Pastel Mint**: Logs a message in pastel mint.

You can use the provided functions to log messages in these colors, adding a vibrant and visually appealing touch to your console output.

## Contact

You can join our discord server for support [Discord Server](https://discord.com/invite/J5aZUUnwCh)

## Thank You

I hope this package will help you, happy coding.
