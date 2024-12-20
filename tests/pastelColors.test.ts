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

  // Test for pastel red
  test('logPastelRed should print a message in pastel red', () => {
    const message = 'Hello, pastel red world!'
    nstypocolors.logPastelRed(message)
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLOR_CODES.pastelRed}${message}${COLOR_CODES.reset}`,
    )
  })

  // Test for pastel pink
  test('logPastelPink should print a message in pastel pink', () => {
    const message = 'Hello, pastel pink world!'
    nstypocolors.logPastelPink(message)
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLOR_CODES.pastelPink}${message}${COLOR_CODES.reset}`,
    )
  })

  // Test for pastel blue
  test('logPastelBlue should print a message in pastel blue', () => {
    const message = 'Hello, pastel blue world!'
    nstypocolors.logPastelBlue(message)
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLOR_CODES.pastelBlue}${message}${COLOR_CODES.reset}`,
    )
  })

  // Test for pastel green
  test('logPastelGreen should print a message in pastel green', () => {
    const message = 'Hello, pastel green world!'
    nstypocolors.logPastelGreen(message)
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLOR_CODES.pastelGreen}${message}${COLOR_CODES.reset}`,
    )
  })

  // Test for pastel yellow
  test('logPastelYellow should print a message in pastel yellow', () => {
    const message = 'Hello, pastel yellow world!'
    nstypocolors.logPastelYellow(message)
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLOR_CODES.pastelYellow}${message}${COLOR_CODES.reset}`,
    )
  })

  // Test for pastel orange
  test('logPastelOrange should print a message in pastel orange', () => {
    const message = 'Hello, pastel orange world!'
    nstypocolors.logPastelOrange(message)
    expect(consoleSpy).toHaveBeenCalledWith(
      `${COLOR_CODES.pastelOrange}${message}${COLOR_CODES.reset}`,
    )
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
