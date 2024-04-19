// Import necessary modules and utilities
import { applyColor } from "./utils/color";

// Define different color codes
export const COLORS = {
  // Primary Colors
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  // Bright Colors
  brightRed: "\x1b[91m",
  brightGreen: "\x1b[92m",
  brightYellow: "\x1b[93m",
  brightBlue: "\x1b[94m",
  brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m",
  brightWhite: "\x1b[97m",
  //Pastel and Aesthetic Colors
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
// console.log("nstypocolors has started successfully!");
if (require.main === module) {
  console.log("nstypocolors has started successfully!");
}
