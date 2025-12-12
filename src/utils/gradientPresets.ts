import { applyColor, COLOR_CODES } from './color'

/**
 * Cycles through a color array and applies colors to each character.
 */
function gradientify(message: string, colors: string[]): string {
  return message
    .split('')
    .map((char, i) => applyColor(char, colors[i % colors.length]))
    .join('')
}

/**
 * Success — Blue → Magenta → Pink
 */
export function logSuccess(message: string): void {
  const colors = [
    COLOR_CODES.blue3,
    COLOR_CODES.blue5,
    COLOR_CODES.blue7,
    COLOR_CODES.magenta2,
    COLOR_CODES.magenta3,
    COLOR_CODES.pink2,
    COLOR_CODES.pink4,
  ]
  console.log('\n' + gradientify(message, colors))
}

/**
 * Warning — Yellow → Orange → Red
 */
export function logWarning(message: string): void {
  const colors = [
    COLOR_CODES.pastelYellow,
    COLOR_CODES.brightYellow,
    COLOR_CODES.pastelOrange,
    COLOR_CODES.red,
    COLOR_CODES.brightRed,
  ]
  console.log('\n' + gradientify(message, colors))
}

/**
 * Error — Red → Magenta
 */
export function logError(message: string): void {
  const colors = [
    COLOR_CODES.red,
    COLOR_CODES.brightRed,
    COLOR_CODES.magenta1,
    COLOR_CODES.magenta3,
  ]
  console.log('\n' + gradientify(message, colors))
}

/**
 * Info — Cyan → Blue → White
 */
export function logInfo(message: string): void {
  const colors = [
    COLOR_CODES.cyan,
    COLOR_CODES.brightCyan,
    COLOR_CODES.blue5,
    COLOR_CODES.brightBlue,
    COLOR_CODES.white,
  ]
  console.log('\n' + gradientify(message, colors))
}
