import { applyColor, COLOR_CODES, ColorKey } from './color'
import * as readline from 'readline'

/**
 * Prompts the user to specify colors in the terminal.
 * @returns {Promise<string[]>} A promise that resolves to an array of selected colors.
 */
export function getUserSelectedColors(): Promise<string[]> {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    const defaultColors = [
      COLOR_CODES.magenta,
      COLOR_CODES.pink,
      COLOR_CODES.blue,
      COLOR_CODES.green,
      COLOR_CODES.yellow,
      COLOR_CODES.red,
    ]

    rl.question(
      `What colors do you want for the gradient? (Enter comma-separated values or press Enter for default VIBGYOR colors):\nAvailable options: ${Object.keys(COLOR_CODES).join(', ')}\n`,
      answer => {
        if (!answer.trim()) {
          console.log('Using default colors.')
          rl.close()
          resolve(defaultColors)
        } else {
          const selectedColors = answer
            .split(',')
            .map(color => color.trim() as ColorKey)
            .filter((color): color is ColorKey => color in COLOR_CODES)

          if (selectedColors.length === 0) {
            console.warn('Invalid colors selected. Using default colors.')
            rl.close()
            resolve(defaultColors)
          } else {
            rl.close()
            resolve(selectedColors.map(color => COLOR_CODES[color]))
          }
        }
      },
    )
  })
}

/**
 * Logs a message in user-selected gradient colors.
 * @param message The message to log.
 */
export async function gradient(message: string): Promise<void> {
  const userColors = await getUserSelectedColors()

  const gradientMessage = message
    .split('')
    .map((char, index) => applyColor(char, userColors[index % userColors.length]))
    .join('')

  console.log(gradientMessage)
}
