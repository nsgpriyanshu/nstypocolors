<div align="center">

# nstypocolors

<img src="./assets/nstc.png" alt="nstypocolors Icon" width="250" height="250" />

[![npm version](https://img.shields.io/npm/v/nstypocolors?color=crimson&logo=npm)](https://www.npmjs.com/package/nstypocolors)
![Downloads](https://img.shields.io/npm/dt/nstypocolors?style=flat)
[![Discord](https://img.shields.io/discord/855781247480496130.svg?color=5865F2&logo=discord&logoColor=white)](https://discord.gg/7SAcEv7MDd)
[![GitHub contributors](https://img.shields.io/github/contributors/nsgpriyanshu/creatorsworld.svg?color=af52de)](https://github.com/nsgpriyanshu/creatorsworld/graphs/contributors)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/nsgpriyanshu/nstypocolors)
[![CodeQL](https://github.com/nsgpriyanshu/nstypocolors/actions/workflows/codeql.yml/badge.svg)](https://github.com/nsgpriyanshu/nstypocolors/actions/workflows/codeql.yml)
![Last Commit](https://img.shields.io/github/last-commit/nsgpriyanshu/nstypocolors)

</div>

Minimal color and gradient logging utilities for modern TypeScript projects.

---

## Features

- Comprehensive color support: standard, bright, pastel, and background colors
- Special gradient effects including rainbow and success animations
- Integrated CLI tool (`nstc`) for direct terminal usage
- Help documentation and command reference
- Persistent default color configuration
- Full TypeScript support with strong type safety

---

## Installation

```bash
npm install nstypocolors
```

---

## Usage

### TypeScript/JavaScript

```ts
import { logRed, logGreen, logBlue, logSuccess } from 'nstypocolors'

logRed('This is red')
logGreen('This is green')
logBlue('This is blue')
logSuccess('Success message with gradient effect')
```

---

## CLI Reference

The package includes a command-line interface accessible via `nstc`.

### Basic Syntax

```bash
nstc "Your message" --color-flag
```

### Available Options

| Flag         | Description                |
| ------------ | -------------------------- |
| `--red`      | Red text                   |
| `--green`    | Green text                 |
| `--blue`     | Blue text                  |
| `--gradient` | Rainbow gradient effect    |
| `--success`  | Success gradient (default) |
| `help`       | Display help documentation |

---

## Help Documentation

View all available commands and options:

```bash
nstc help
```

---

## Example Usage

### Help Menu

<img src="./assets/examples/help-menu.png" alt="Help Menu Screenshot" width="600" />

### Terminal Output

<img src="./assets/examples/terminal-output.png" alt="Terminal Output Screenshot" width="600" />

---

> [!NOTE]
> **Coming Soon — Default Color Configuration**
>
> Set a persistent default color to avoid repeatedly passing color flags in every command.
>
> ### Planned Usage
>
> ```bash
> nstc set-default --green
> ```
>
> ### Reset Default
>
> ```bash
> nstc clear-default
> ```
>
> The default configuration will be stored locally in your home directory as a JSON file and applied automatically when no color flag is provided.
>
> _This feature is under development and will be available in an upcoming release._

## Available Colors

**Standard:** Red, Green, Pink, Yellow, Blue, Magenta, Cyan, White, Black

**Bright:** Bright Red, Bright Green, Bright Yellow, Bright Blue, Bright Magenta, Bright Cyan, Bright White

**Pastel:** Pastel Blue, Pastel Pink, Pastel Mint, Pastel Lavender, Pastel Coral, Pastel Yellow, Pastel Red, Pastel Green, Pastel Cyan, Pastel White

**Background:** Back Pastel Blue, Back Pastel Pink, Back Pastel Red, Back Pastel Green, Back Pastel Yellow, Back Pastel Mint, Back Pastel Coral, Back Pastel Lavender

---

## Gradient Effects

```ts
logGradient('Rainbow gradient text')
logSuccess('Success gradient text')
```

---

## Community Support

For assistance or contributions, connect with the community:

**Discord:** [https://discord.gg/vRXgWaar2G](https://discord.gg/vRXgWaar2G)

---

## Developer

<!--
<img src="https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/icons/colourfull-pfp.jpg" width="50" height="50" style="border-radius: 50%;" /> -->

[![nsgpriyanshu](https://img.shields.io/badge/Developer-nsgpriyanshu-author.svg?color=f10a0a)](https://nsgpriyanshu.github.io)
