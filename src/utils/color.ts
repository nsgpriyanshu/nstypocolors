export const COLOR_CODES = {
  // Primary Colors
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  pink: '\x1b[38;5;213m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  black: '\x1b[38;5;232m',
  // Bright Colors
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[38;5;40m',
  brightPink: '\x1b[38;5;219m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',
  brightWhite: '\x1b[97m',
  // Pastel and Aesthetic Colors
  pastelRed: '\x1b[38;5;1m',
  pastelPink: '\x1b[38;5;205m',
  pastelBlue: '\x1b[38;5;111m',
  pastelGreen: '\x1b[38;5;157m',
  pastelYellow: '\x1b[38;5;229m',
  pastelOrange: '\x1b[38;5;216m',
  pastelLavender: '\x1b[38;5;141m',
  pastelCoral: '\x1b[38;5;209m',
  pastelMint: '\x1b[38;5;49m',
  // Background Colors
  backPastelRed: '\x1b[48;5;1m',
  backPastelPink: '\x1b[48;5;205m',
  backPastelBlue: '\x1b[48;5;111m',
  backPastelGreen: '\x1b[48;5;157m',
  backPastelYellow: '\x1b[48;5;229m',
  backPastelOrange: '\x1b[48;5;216m',
  backPastelLavender: '\x1b[48;5;141m',
  backPastelCoral: '\x1b[48;5;209m',
  backPastelMint: '\x1b[48;5;49m',

  // Success Gradient Colors
  // Dark blue to magenta transition
  blue1: '\x1b[38;5;18m', // Very dark blue
  blue2: '\x1b[38;5;19m', // Dark blue
  blue3: '\x1b[38;5;20m', // Deep blue
  blue4: '\x1b[38;5;21m', // Bright blue
  blue5: '\x1b[38;5;27m', // Cyan-ish blue
  blue6: '\x1b[38;5;33m', // Light blue
  blue7: '\x1b[38;5;39m', // Sky blue
  blue8: '\x1b[38;5;45m', // Bluish-magenta
  // Transition to magenta
  magenta1: '\x1b[38;5;91m', // Medium-dark magenta
  magenta2: '\x1b[38;5;127m', // Medium magenta
  magenta3: '\x1b[38;5;163m', // Bright magenta
  magenta4: '\x1b[38;5;199m', // Lighter magenta
  // Transition to pink
  pink1: '\x1b[38;5;200m', // Soft pink
  pink2: '\x1b[38;5;206m', // Light pink
  pink3: '\x1b[38;5;212m', // Brighter pink
  pink4: '\x1b[38;5;218m', // Vibrant pink
  pink5: '\x1b[38;5;225m', // Very light pink
} as const

export type ColorKey = keyof typeof COLOR_CODES

/**
 * Applies a color to a given message.
 * @param message The message to color.
 * @param colorCode The ANSI color code to apply.
 * @returns The colored message.
 */
export function applyColor(message: string, colorCode: string): string {
  return `${colorCode}${message}${COLOR_CODES.reset}`
}
