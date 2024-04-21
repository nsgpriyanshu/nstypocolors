// Import necessary modules and utilities
import { applyColor } from "./utils/color";

// Define different color codes
export const COLORS = {
 // Primary Colors
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  pink: "\x1b[38;5;213m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  black: "\x1b[38;5;232m",
  // Bright Colors
  brightRed: "\x1b[91m",
  brightGreen: "\x1b[38;5;40m",
  brightPink: "\x1b[38;5;219m",
  brightYellow: "\x1b[93m",
  brightBlue: "\x1b[94m",
  brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m",
  brightWhite: "\x1b[97m",
  //Pastel and Aesthetic Colors
  pastelRed: "\x1b[38;5;1m",
  pastelPink: "\x1b[38;5;205m",
  pastelBlue: "\x1b[38;5;111m",
  pastelGreen: "\x1b[38;5;157m",
  pastelYellow: "\x1b[38;5;229m",
  pastelOrange: "\x1b[38;5;216m",
  pastelLavender: "\x1b[38;5;141m",
  pastelCoral: "\x1b[38;5;209m",
  pastelMint: "\x1b[38;5;49m",
};

// Define functions to log messages with colors

// Primary Colors

export function logRed(message: string): void {
  console.log(applyColor(message, COLORS.red));
}

export function logGreen(message: string): void {
  console.log(applyColor(message, COLORS.green));
}

export function logYellow(message: string): void {
  console.log(applyColor(message, COLORS.yellow));
}

export function logBlue(message: string): void {
  console.log(applyColor(message, COLORS.blue));
}

export function logMagenta(message: string): void {
  console.log(applyColor(message, COLORS.magenta));
}

export function logCyan(message: string): void {
  console.log(applyColor(message, COLORS.cyan));
}

export function logWhite(message: string): void {
  console.log(applyColor(message, COLORS.white));
}

// Bright Colors

export function logBrightRed(message: string): void {
  console.log(applyColor(message, COLORS.brightRed));
}

export function logBrightGreen(message: string): void {
  console.log(applyColor(message, COLORS.brightGreen));
}

export function logBrightYellow(message: string): void {
  console.log(applyColor(message, COLORS.brightYellow));
}

export function logBrightBlue(message: string): void {
  console.log(applyColor(message, COLORS.brightBlue));
}

export function logBrightMagenta(message: string): void {
  console.log(applyColor(message, COLORS.brightMagenta));
}

export function logBrightCyan(message: string): void {
  console.log(applyColor(message, COLORS.brightCyan));
}

export function logBrightWhite(message: string): void {
  console.log(applyColor(message, COLORS.brightWhite));
}

//Pastel and Aesthetic Colors

export function logPastelPink(message: string): void {
  console.log(applyColor(message, COLORS.pastelPink));
}

export function logPastelBlue(message: string): void {
  console.log(applyColor(message, COLORS.pastelBlue));
}

export function logPastelGreen(message: string): void {
  console.log(applyColor(message, COLORS.pastelGreen));
}

export function logPastelYellow(message: string): void {
  console.log(applyColor(message, COLORS.pastelYellow));
}

export function logPastelOrange(message: string): void {
  console.log(applyColor(message, COLORS.pastelOrange));
}

export function logPastelLavender(message: string): void {
  console.log(applyColor(message, COLORS.pastelLavender));
}

export function logPastelCoral(message: string): void {
  console.log(applyColor(message, COLORS.pastelCoral));
}

export function logPastelMint(message: string): void {
  console.log(applyColor(message, COLORS.pastelMint));
}

// Add a success message log statement at the end of the file
if (require.main === module) {
  console.log("nstypocolors has started successfully!");
}

// Add a log function for available colours for inspection

import { COLOR_CODES } from "./utils/color";

// Primary Colors
console.log(applyColor("Successfully loaded Reset", COLOR_CODES.reset));
console.log(applyColor("Successfully loaded Red", COLOR_CODES.red));
console.log(applyColor("Successfully loaded Green", COLOR_CODES.green));
console.log(applyColor("Successfully loaded Pink", COLOR_CODES.pink));
console.log(applyColor("Successfully loaded Yellow", COLOR_CODES.yellow));
console.log(applyColor("Successfully loaded Blue", COLOR_CODES.blue));
console.log(applyColor("Successfully loaded Magenta", COLOR_CODES.magenta));
console.log(applyColor("Successfully loaded Cyan", COLOR_CODES.cyan));
console.log(applyColor("Successfully loaded White", COLOR_CODES.white));
console.log(applyColor("Successfully loaded Black", COLOR_CODES.black));

// Bright Colors
console.log(
  applyColor("Successfully loaded Bright Red", COLOR_CODES.brightRed),
);
console.log(
  applyColor("Successfully loaded Bright Green", COLOR_CODES.brightGreen),
);
console.log(
  applyColor("Successfully loaded Bright Pink", COLOR_CODES.brightPink),
);
console.log(
  applyColor("Successfully loaded Bright Yellow", COLOR_CODES.brightYellow),
);
console.log(
  applyColor("Successfully loaded Bright Blue", COLOR_CODES.brightBlue),
);
console.log(
  applyColor("Successfully loaded Bright Magenta", COLOR_CODES.brightMagenta),
);
console.log(
  applyColor("Successfully loaded Bright Cyan", COLOR_CODES.brightCyan),
);
console.log(
  applyColor("Successfully loaded Bright White", COLOR_CODES.brightWhite),
);

// Pastel and Aesthetic Colors
console.log(
  applyColor("Successfully loaded Pastel Red", COLOR_CODES.pastelRed),
);
console.log(
  applyColor("Successfully loaded Pastel Pink", COLOR_CODES.pastelPink),
);
console.log(
  applyColor("Successfully loaded Pastel Blue", COLOR_CODES.pastelBlue),
);
console.log(
  applyColor("Successfully loaded Pastel Green", COLOR_CODES.pastelGreen),
);
console.log(
  applyColor("Successfully loaded Pastel Yellow", COLOR_CODES.pastelYellow),
);
console.log(
  applyColor("Successfully loaded Pastel Orange", COLOR_CODES.pastelOrange),
);
console.log(
  applyColor("Successfully loaded Pastel Lavender", COLOR_CODES.pastelLavender),
);
console.log(
  applyColor("Successfully loaded Pastel Coral", COLOR_CODES.pastelCoral),
);
console.log(
  applyColor("Successfully loaded Pastel Mint", COLOR_CODES.pastelMint),
);
