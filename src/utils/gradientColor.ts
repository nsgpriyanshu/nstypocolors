import { applyColor, COLOR_CODES } from './color'

/**
 * Logs a message with a gradient effect in shades of green (for success).
 * @param message The message to log.
 */
export function gradientColor(message: string): void {
  const greenShades: string[] = [
    COLOR_CODES.green, // Light green
    COLOR_CODES.brightGreen, // Bright green
    COLOR_CODES.pastelGreen, // Pastel green
  ]

  const gradientMessage = message
    .split('') // Split message into individual characters
    .map((char, index) => applyColor(char, greenShades[index % greenShades.length])) // Apply gradient
    .join('') // Rejoin the characters into a string

  console.log(gradientMessage) // Log the gradient message
}
