import { applyColor } from './color'

/**
 * Apply a multi-step gradient across a message
 * Only uses colors from the palette—no numeric interpolation
 */
function multiStepGradient(message: string, palette: number[]): string {
  const length = message.length
  if (length === 0) return ''

  return message
    .split('')
    .map((char, i) => {
      const t = i / (length - 1) // 0 → 1 across the message
      const idx = Math.floor(t * (palette.length - 1))
      const colorCode = palette[idx]
      return applyColor(char, `\x1b[38;5;${colorCode}m`)
    })
    .join('')
}

/**
 * Success — Purple → Pink
 */
export function logSuccess(message: string): void {
  const palette = [127, 163, 199, 200, 206, 212, 218, 225] // no blues, just purple → pink
  console.log('\n' + multiStepGradient(message, palette))
}

/**
 * Error — Red → Orange
 */
export function logError(message: string): void {
  const palette = [196, 160, 202, 208, 214] // red → orange
  console.log('\n' + multiStepGradient(message, palette))
}

/**
 * Info — Blue → Cyan
 */
export function logInfo(message: string): void {
  const palette = [20, 33, 39, 45, 51] // clean blue → cyan
  console.log('\n' + multiStepGradient(message, palette))
}

/**
 * Warning — Yellow → Orange
 */
export function logWarning(message: string): void {
  const palette = [229, 220, 208] // yellow → gold → orange
  console.log('\n' + multiStepGradient(message, palette))
}
