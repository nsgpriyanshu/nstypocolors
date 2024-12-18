// Importing the necessary functions and constants
import * as nstypocolors from '../src/index'
import { COLOR_CODES } from '../src/utils/color'

describe('nstypocolors logging functions', () => {
  let consoleSpy: jest.SpyInstance

  // Before each test, set up a spy on console.log
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation((...args: any[]) => {})
  })

  // After each test, restore the original console.log implementation
  afterEach(() => {
    consoleSpy.mockRestore()
  })

  // Test for red
  test('logRed should print a message in red', () => {
    const message = 'Hello, red world!'
    nstypocolors.logRed(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLOR_CODES.red}${message}${COLOR_CODES.reset}`)
  })

  // Test for green
  test('logGreen should print a message in green', () => {
    const message = 'Hello, green world!'
    nstypocolors.logGreen(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLOR_CODES.green}${message}${COLOR_CODES.reset}`)
  })

  // Test for pink
  test('logPink should print a message in pink', () => {
    const message = 'Hello, pink world!'
    nstypocolors.logPink(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLOR_CODES.pink}${message}${COLOR_CODES.reset}`)
  })

  // Test for yellow
  test('logYellow should print a message in yellow', () => {
    const message = 'Hello, yellow world!'
    nstypocolors.logYellow(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLOR_CODES.yellow}${message}${COLOR_CODES.reset}`)
  })

  // Test for blue
  test('logBlue should print a message in blue', () => {
    const message = 'Hello, blue world!'
    nstypocolors.logBlue(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLOR_CODES.blue}${message}${COLOR_CODES.reset}`)
  })

  // Test for magenta
  test('logMagenta should print a message in magenta', () => {
    const message = 'Hello, magenta world!'
    nstypocolors.logMagenta(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLOR_CODES.magenta}${message}${COLOR_CODES.reset}`)
  })

  // Test for cyan
  test('logCyan should print a message in cyan', () => {
    const message = 'Hello, cyan world!'
    nstypocolors.logCyan(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLOR_CODES.cyan}${message}${COLOR_CODES.reset}`)
  })

  // Test for white
  test('logWhite should print a message in white', () => {
    const message = 'Hello, white world!'
    nstypocolors.logWhite(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLOR_CODES.white}${message}${COLOR_CODES.reset}`)
  })

  // Test for black
  test('logblack should print a message in black', () => {
    const message = 'Hello, black world!'
    nstypocolors.logBlack(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLOR_CODES.black}${message}${COLOR_CODES.reset}`)
  })

  // Add other tests as needed
  test('Startup message is logged', () => {
    // Define the type of consoleOutput as an array of strings
    const consoleOutput: string[] = []

    // Temporarily override the consoleSpy mock implementation to push outputs to consoleOutput
    consoleSpy.mockImplementation((output: any) => consoleOutput.push(output))

    // Import the index file again to trigger the startup message
    require('../src/index')

    // Debug output to inspect the contents of consoleOutput
    console.log('consoleOutput:', consoleOutput)

    // Assert that the startup message is in the consoleOutput array
    expect(consoleOutput).toContain('nstypocolors has started successfully!')
  })
})
