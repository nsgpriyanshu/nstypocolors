// Importing the necessary functions and constants
import * as nstypocolors from '../src/index'
import { COLORS } from '../src/index'

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

  // Test for background pastel red
  test('logBackPastelRed should print a message with a pastel red background', () => {
    const message = 'Hello, pastel red world!'
    nstypocolors.logBackPastelRed(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLORS.backPastelRed}${message}${COLORS.reset}`)
  })

  // Test for background pastel pink
  test('logBackPastelPink should print a message with a pastel pink background', () => {
    const message = 'Hello, pastel pink world!'
    nstypocolors.logBackPastelPink(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLORS.backPastelPink}${message}${COLORS.reset}`)
  })

  // Test for background pastel blue
  test('logBackPastelBlue should print a message with a pastel blue background', () => {
    const message = 'Hello, pastel blue world!'
    nstypocolors.logBackPastelBlue(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLORS.backPastelBlue}${message}${COLORS.reset}`)
  })

  // Test for background pastel green
  test('logBackPastelGreen should print a message with a pastel green background', () => {
    const message = 'Hello, pastel green world!'
    nstypocolors.logBackPastelGreen(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLORS.backPastelGreen}${message}${COLORS.reset}`)
  })

  // Test for background pastel yellow
  test('logBackPastelYellow should print a message with a pastel yellow background', () => {
    const message = 'Hello, pastel yellow world!'
    nstypocolors.logBackPastelYellow(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLORS.backPastelYellow}${message}${COLORS.reset}`)
  })

  // Test for background pastel orange
  test('logBackPastelOrange should print a message with a pastel orange background', () => {
    const message = 'Hello, pastel orange world!'
    nstypocolors.logBackPastelOrange(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLORS.backPastelOrange}${message}${COLORS.reset}`)
  })

  // Test for background pastel lavender
  test('logBackPastelLavender should print a message with a pastel lavender background', () => {
    const message = 'Hello, pastel lavender world!'
    nstypocolors.logBackPastelLavender(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLORS.backPastelLavender}${message}${COLORS.reset}`)
  })

  // Test for background pastel coral
  test('logBackPastelCoral should print a message with a pastel coral background', () => {
    const message = 'Hello, pastel coral world!'
    nstypocolors.logBackPastelCoral(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLORS.backPastelCoral}${message}${COLORS.reset}`)
  })

  // Test for background pastel mint
  test('logBackPastelMint should print a message with a pastel mint background', () => {
    const message = 'Hello, pastel mint world!'
    nstypocolors.logBackPastelMint(message)
    expect(consoleSpy).toHaveBeenCalledWith(`${COLORS.backPastelMint}${message}${COLORS.reset}`)
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
