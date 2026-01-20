#!/usr/bin/env node
import {
  logRed,
  logGreen,
  logBlue,
  logPink,
  logYellow,
  logMagenta,
  logCyan,
  logWhite,
  logBlack,
  logBrightRed,
  logBrightGreen,
  logBrightPink,
  logBrightYellow,
  logBrightBlue,
  logBrightMagenta,
  logBrightCyan,
  logBrightWhite,
  logPastelRed,
  logPastelPink,
  logPastelBlue,
  logPastelGreen,
  logPastelYellow,
  logPastelOrange,
  logPastelLavender,
  logPastelCoral,
  logPastelMint,
  logBackPastelRed,
  logBackPastelPink,
  logBackPastelBlue,
  logBackPastelGreen,
  logBackPastelYellow,
  logBackPastelOrange,
  logBackPastelLavender,
  logBackPastelCoral,
  logBackPastelMint,
} from './index'
import {
  logError,
  logInfo,
  logBuild,
  logDefault,
  logWarn,
  logSuccess,
} from './utils/gradientPresets'
import { showHelpMenu } from './utils/helpMenu'
import { argv } from 'process'
import { logRainbow } from './utils/rainbow'
import { setDefaultColor, getDefaultColor, clearDefaultColor } from './utils/config'

// Parse CLI arguments
const args = argv.slice(2)
const message = args[0]
const option = args[1]

if (message === 'help' || message === '--help' || option === '--help') {
  showHelpMenu()
  process.exit(0)
}

// Handle setdefault command
if (message === 'setdefault') {
  if (option) {
    setDefaultColor(option)
    logSuccess(`✓ Default color set to: ${option}`)
  } else {
    console.log('Usage: nstc setdefault <color-option>')
    console.log('Example: nstc setdefault --build')
  }
  process.exit(0)
}

// Handle cleardefault command
if (message === 'cleardefault') {
  clearDefaultColor()
  logSuccess('✓ Default color cleared')
  process.exit(0)
}

// Handle getdefault command
if (message === 'getdefault') {
  const defaultColor = getDefaultColor()
  if (defaultColor) {
    console.log(`Current default color: ${defaultColor}`)
  } else {
    console.log('No default color set')
  }
  process.exit(0)
}

// Default message & option if nothing provided
const finalMessage = message || 'nstypocolors CLI installed successfully!'
let finalOption = option || '--default'

// Use saved default color if no option provided and default is set
if (!option && message && !message.startsWith('--')) {
  const savedDefault = getDefaultColor()
  if (savedDefault) {
    finalOption = savedDefault
  }
}

// ------------------------------------------------------
//  MAIN COLOR SWITCH
// ------------------------------------------------------
switch (finalOption) {
  // Primary Colors
  case '--red':
    logRed(finalMessage)
    break

  case '--green':
    logGreen(finalMessage)
    break

  case '--blue':
    logBlue(finalMessage)
    break

  case '--pink':
    logPink(finalMessage)
    break

  case '--yellow':
    logYellow(finalMessage)
    break

  case '--magenta':
    logMagenta(finalMessage)
    break

  case '--cyan':
    logCyan(finalMessage)
    break

  case '--white':
    logWhite(finalMessage)
    break

  case '--black':
    logBlack(finalMessage)
    break

  // Bright Colors
  case '--bright-red':
    logBrightRed(finalMessage)
    break

  case '--bright-green':
    logBrightGreen(finalMessage)
    break

  case '--bright-pink':
    logBrightPink(finalMessage)
    break

  case '--bright-yellow':
    logBrightYellow(finalMessage)
    break

  case '--bright-blue':
    logBrightBlue(finalMessage)
    break

  case '--bright-magenta':
    logBrightMagenta(finalMessage)
    break

  case '--bright-cyan':
    logBrightCyan(finalMessage)
    break

  case '--bright-white':
    logBrightWhite(finalMessage)
    break

  // Pastel Colors
  case '--pastel-red':
    logPastelRed(finalMessage)
    break

  case '--pastel-pink':
    logPastelPink(finalMessage)
    break

  case '--pastel-blue':
    logPastelBlue(finalMessage)
    break

  case '--pastel-green':
    logPastelGreen(finalMessage)
    break

  case '--pastel-yellow':
    logPastelYellow(finalMessage)
    break

  case '--pastel-orange':
    logPastelOrange(finalMessage)
    break

  case '--pastel-lavender':
    logPastelLavender(finalMessage)
    break

  case '--pastel-coral':
    logPastelCoral(finalMessage)
    break

  case '--pastel-mint':
    logPastelMint(finalMessage)
    break

  // Background Pastel Colors
  case '--back-pastel-red':
    logBackPastelRed(finalMessage)
    break

  case '--back-pastel-pink':
    logBackPastelPink(finalMessage)
    break

  case '--back-pastel-blue':
    logBackPastelBlue(finalMessage)
    break

  case '--back-pastel-green':
    logBackPastelGreen(finalMessage)
    break

  case '--back-pastel-yellow':
    logBackPastelYellow(finalMessage)
    break

  case '--back-pastel-orange':
    logBackPastelOrange(finalMessage)
    break

  case '--back-pastel-lavender':
    logBackPastelLavender(finalMessage)
    break

  case '--back-pastel-coral':
    logBackPastelCoral(finalMessage)
    break

  case '--back-pastel-mint':
    logBackPastelMint(finalMessage)
    break

  // Gradient Presets
  case '--build':
    logBuild(finalMessage)
    break

  case '--success':
    logSuccess(finalMessage)
    break

  case '--warn':
    logWarn(finalMessage)
    break

  case '--error':
    logError(finalMessage)
    break

  case '--info':
    logInfo(finalMessage)
    break

  case '--rainbow':
    logRainbow(finalMessage)
    break

  // Default rainbow
  default:
    logDefault(finalMessage)
    break
}
