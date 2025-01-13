import { applyColor, COLOR_CODES } from './color'

/**
 * Logs a message in a gradient using pink, magenta, and blue colors.
 * @param message - The message to log in gradient colors.
 */
export function logSuccess(message: string): void {
  const gradientColors: string[] = [
    COLOR_CODES.blue1, // Very dark blue
    COLOR_CODES.blue2, // Dark blue
    COLOR_CODES.blue3, // Deep blue
    COLOR_CODES.blue4, // Bright blue
    COLOR_CODES.blue5, // Cyan-ish blue
    COLOR_CODES.blue6, // Light blue
    COLOR_CODES.blue7, // Sky blue
    COLOR_CODES.blue8, // Bluish-magenta
    COLOR_CODES.magenta1, // Medium-dark magenta
    COLOR_CODES.magenta2, // Medium magenta
    COLOR_CODES.magenta3, // Bright magenta
    COLOR_CODES.magenta4, // Lighter magenta
    COLOR_CODES.pink1, // Soft pink
    COLOR_CODES.pink2, // Light pink
    COLOR_CODES.pink3, // Brighter pink
    COLOR_CODES.pink4, // Vibrant pink
    COLOR_CODES.pink5, // Very light pink
  ]

  const gradientMessage = message
    .split('') // Split the message into characters
    .map((char, index) => applyColor(char, gradientColors[index % gradientColors.length])) // Apply colors cyclically
    .join('') // Rejoin characters

  console.log('\n' + gradientMessage) // Log the gradient message
}
