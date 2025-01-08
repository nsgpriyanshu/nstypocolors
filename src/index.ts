// Import necessary modules and utilities
import { applyColor } from './utils/color'
import { COLOR_CODES } from './utils/color'
import { getUserSelectedColors } from './utils/gradientColor'

// Define functions to log messages with colors

// Primary Colors

export function logRed(message: string): void {
  console.log(applyColor(message, COLOR_CODES.red))
}

export function logGreen(message: string): void {
  console.log(applyColor(message, COLOR_CODES.green))
}

export function logPink(message: string): void {
  console.log(applyColor(message, COLOR_CODES.pink))
}

export function logYellow(message: string): void {
  console.log(applyColor(message, COLOR_CODES.yellow))
}

export function logBlue(message: string): void {
  console.log(applyColor(message, COLOR_CODES.blue))
}

export function logMagenta(message: string): void {
  console.log(applyColor(message, COLOR_CODES.magenta))
}

export function logCyan(message: string): void {
  console.log(applyColor(message, COLOR_CODES.cyan))
}

export function logWhite(message: string): void {
  console.log(applyColor(message, COLOR_CODES.white))
}

export function logBlack(message: string): void {
  console.log(applyColor(message, COLOR_CODES.black))
}

// Bright Colors

export function logBrightRed(message: string): void {
  console.log(applyColor(message, COLOR_CODES.brightRed))
}

export function logBrightGreen(message: string): void {
  console.log(applyColor(message, COLOR_CODES.brightGreen))
}

export function logBrightPink(message: string): void {
  console.log(applyColor(message, COLOR_CODES.brightPink))
}

export function logBrightYellow(message: string): void {
  console.log(applyColor(message, COLOR_CODES.brightYellow))
}

export function logBrightBlue(message: string): void {
  console.log(applyColor(message, COLOR_CODES.brightBlue))
}

export function logBrightMagenta(message: string): void {
  console.log(applyColor(message, COLOR_CODES.brightMagenta))
}

export function logBrightCyan(message: string): void {
  console.log(applyColor(message, COLOR_CODES.brightCyan))
}

export function logBrightWhite(message: string): void {
  console.log(applyColor(message, COLOR_CODES.brightWhite))
}

//Pastel and Aesthetic Colors

export function logPastelRed(message: string): void {
  console.log(applyColor(message, COLOR_CODES.pastelRed))
}

export function logPastelPink(message: string): void {
  console.log(applyColor(message, COLOR_CODES.pastelPink))
}

export function logPastelBlue(message: string): void {
  console.log(applyColor(message, COLOR_CODES.pastelBlue))
}

export function logPastelGreen(message: string): void {
  console.log(applyColor(message, COLOR_CODES.pastelGreen))
}

export function logPastelYellow(message: string): void {
  console.log(applyColor(message, COLOR_CODES.pastelYellow))
}

export function logPastelOrange(message: string): void {
  console.log(applyColor(message, COLOR_CODES.pastelOrange))
}

export function logPastelLavender(message: string): void {
  console.log(applyColor(message, COLOR_CODES.pastelLavender))
}

export function logPastelCoral(message: string): void {
  console.log(applyColor(message, COLOR_CODES.pastelCoral))
}

export function logPastelMint(message: string): void {
  console.log(applyColor(message, COLOR_CODES.pastelMint))
}

// Background Pastel Colors

export function logBackPastelRed(message: string): void {
  console.log(applyColor(message, COLOR_CODES.backPastelRed))
}

export function logBackPastelPink(message: string): void {
  console.log(applyColor(message, COLOR_CODES.backPastelPink))
}

export function logBackPastelBlue(message: string): void {
  console.log(applyColor(message, COLOR_CODES.backPastelBlue))
}

export function logBackPastelGreen(message: string): void {
  console.log(applyColor(message, COLOR_CODES.backPastelGreen))
}

export function logBackPastelYellow(message: string): void {
  console.log(applyColor(message, COLOR_CODES.backPastelYellow))
}

export function logBackPastelOrange(message: string): void {
  console.log(applyColor(message, COLOR_CODES.backPastelOrange))
}

export function logBackPastelLavender(message: string): void {
  console.log(applyColor(message, COLOR_CODES.backPastelLavender))
}

export function logBackPastelCoral(message: string): void {
  console.log(applyColor(message, COLOR_CODES.backPastelCoral))
}

export function logBackPastelMint(message: string): void {
  console.log(applyColor(message, COLOR_CODES.backPastelMint))
}

// Gradient Color
export async function gradient(message: string): Promise<void> {
  const userColors = await getUserSelectedColors()

  const gradientMessage = message
    .split('')
    .map((char, index) => applyColor(char, userColors[index % userColors.length]))
    .join('')

  console.log(gradientMessage)
}

//Add a success message log statement at the end of the file
if (require.main === module) {
  logBackPastelGreen('nstypocolors has started successfully!')
}
