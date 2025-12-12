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
  logGradient,
  logSuccess,
  logWarning,
  logError,
  logInfo,
} from './index'
import { showHelpMenu } from './utils/helpMenu'
import { argv } from 'process'

// Parse CLI arguments
const args = argv.slice(2)
const message = args[0]
const option = args[1]

if (message === 'help' || message === '--help' || option === '--help') {
  showHelpMenu()
  process.exit(0)
}

// Default message & option if nothing provided
const finalMessage = message || 'nstypocolors CLI running successfully!'
const finalOption = option || '--success'

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
  case '--success':
    logSuccess(finalMessage)
    break

  case '--warn':
  case '--warning':
    logWarning(finalMessage)
    break

  case '--error':
    logError(finalMessage)
    break

  case '--info':
    logInfo(finalMessage)
    break

  // Default gradient
  case '--gradient':
    logGradient(finalMessage)
    break

  default:
    logSuccess(finalMessage)
    break
}
