import { applyColor, COLOR_CODES } from './color'

/**
 * Logs a message in VIBGYOR colors.
 * @param message The message to log.
 */
export function rainbow(message: string): void {
  const vibgyorColors: string[] = [
    COLOR_CODES.magenta,
    COLOR_CODES.pink,
    COLOR_CODES.blue,
    COLOR_CODES.green,
    COLOR_CODES.yellow,
    COLOR_CODES.red,
    COLOR_CODES.red,
  ]

  const rainbowMessage = message
    .split('')
    .map((char, index) => applyColor(char, vibgyorColors[index % vibgyorColors.length]))
    .join('')

  console.log(rainbowMessage)
}
