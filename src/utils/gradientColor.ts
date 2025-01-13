import { applyColor, COLOR_CODES } from './color'

/**
 * Logs a message in a gradient using default rainbow (VIBGYOR) colors.
 * @param message - The message to log in gradient colors.
 */
export function logGradient(message: string): void {
  const vibgyorColors: string[] = [
    COLOR_CODES.pastelLavender,
    COLOR_CODES.pastelPink,
    COLOR_CODES.pastelBlue,
    COLOR_CODES.pastelGreen,
    COLOR_CODES.pastelYellow,
    COLOR_CODES.pastelRed,
    COLOR_CODES.pastelOrange,
  ]

  const gradientMessage = message
    .split('') // Split the message into characters
    .map((char, index) => applyColor(char, vibgyorColors[index % vibgyorColors.length])) // Apply colors cyclically
    .join('') // Rejoin characters

  console.log('\n' + gradientMessage) // Log the gradient message
}
