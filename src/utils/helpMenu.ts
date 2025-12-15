import { COLOR_CODES } from './color'

export function showHelpMenu() {
  console.log(`
nstypocolors CLI — Beautiful Terminal Colors
---------------------------------------------

Usage:
  nstc "<message>" <option>

Examples:
  nstc "Hello World" --red
  nstc "Success!" --success
  nstc "Background!" --back-pastel-blue
  nstc "Pastel Text" --pastel-green
  nstc "Error occurred!" --error
  nstc "Rainbow Message" --rainbow

---------------------------------------------
Available Color Options:

PRIMARY COLORS:
  --red               Red
  --green             Green
  --blue              Blue
  --pink              Pink
  --yellow            Yellow
  --magenta           Magenta
  --cyan              Cyan
  --white             White
  --black             Black

BRIGHT COLORS:
  --bright-red        Bright Red
  --bright-green      Bright Green
  --bright-pink       Bright Pink
  --bright-yellow     Bright Yellow
  --bright-blue       Bright Blue
  --bright-magenta    Bright Magenta
  --bright-cyan       Bright Cyan
  --bright-white      Bright White

PASTEL COLORS:
  --pastel-red        Pastel Red
  --pastel-pink       Pastel Pink
  --pastel-blue       Pastel Blue
  --pastel-green      Pastel Green
  --pastel-yellow     Pastel Yellow
  --pastel-orange     Pastel Orange
  --pastel-lavender   Pastel Lavender
  --pastel-coral      Pastel Coral
  --pastel-mint       Pastel Mint

BACKGROUND PASTELS:
  --back-pastel-red       Background Pastel Red
  --back-pastel-pink      Background Pastel Pink
  --back-pastel-blue      Background Pastel Blue
  --back-pastel-green     Background Pastel Green
  --back-pastel-yellow    Background Pastel Yellow
  --back-pastel-orange    Background Pastel Orange
  --back-pastel-lavender  Background Pastel Lavender
  --back-pastel-coral     Background Pastel Coral
  --back-pastel-mint      Background Pastel Mint

GRADIENT PRESETS:
  --gradient          Default rainbow gradient
  --success           Success — Green → Mint → Soft Cyan
  --warn              Yellow / Orange gradient
  --error             Red intense gradient
  --info              Cyan / Blue gradient
  --build             Blue → Magenta → Pink gradient

---------------------------------------------
Help:
  nstc help
  nstc --help

For documentation: https://github.com/nsgpriyanshu/nstypocolors
  `)
}
