// import { applyColor, COLOR_CODES, ColorKey } from './color'
// import * as readline from 'readline'

// /**
//  * Prompts the user to specify colors in the terminal.
//  * @returns {Promise<string[]>} A promise that resolves to an array of selected colors.
//  */
// export function getUserSelectedColors(): Promise<string[]> {
//   return new Promise(resolve => {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     })

//     const defaultColors = [
//       COLOR_CODES.magenta,
//       COLOR_CODES.pink,
//       COLOR_CODES.blue,
//       COLOR_CODES.green,
//       COLOR_CODES.yellow,
//       COLOR_CODES.red,
//     ]

//     rl.question(
//       `\nWhat colors do you want for the gradient?\n` +
//         `Enter comma-separated values or press Enter for default VIBGYOR colors.\n` +
//         `Available options: ${Object.keys(COLOR_CODES).join(', ')}\n\n`,
//       answer => {
//         if (!answer.trim()) {
//           console.log('\nUsing default colors: VIBGYOR.')
//           rl.close()
//           resolve(defaultColors)
//         } else {
//           const selectedColors = answer
//             .split(',')
//             .map(color => color.trim() as ColorKey)
//             .filter((color): color is ColorKey => color in COLOR_CODES)

//           if (selectedColors.length === 0) {
//             console.warn('\nInvalid colors selected. Using default colors: VIBGYOR.')
//             rl.close()
//             resolve(defaultColors)
//           } else {
//             console.log('\nUsing your selected colors.')
//             rl.close()
//             resolve(selectedColors.map(color => COLOR_CODES[color]))
//           }
//         }
//       },
//     )
//   })
// }

// gradient.ts

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
