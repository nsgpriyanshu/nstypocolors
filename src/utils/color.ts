// Define different ANSI color codes
export const COLOR_CODES = {
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

/**
 * Applies a color to a given message.
 * @param message The message to color.
 * @param colorCode The ANSI color code to apply.
 * @returns The colored message.
 */
export function applyColor(message: string, colorCode: string): string {
  return `${colorCode}${message}${COLOR_CODES.reset}`;
}
