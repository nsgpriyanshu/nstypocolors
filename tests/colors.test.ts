import { describe, beforeEach, afterEach, test, expect, vi, type MockInstance } from 'vitest'
import * as nstypocolors from '../src/index'
import { COLOR_CODES } from '../src/utils/color'

describe('nstypocolors basic logging functions', () => {
  let consoleSpy: MockInstance

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  function expectColorLog(color: string, message: string) {
    const output = consoleSpy.mock.calls[0][0] as string
    expect(output).toContain(color)
    expect(output).toContain(message)
    expect(output).toContain(COLOR_CODES.reset)
  }

  test('logRed prints red text', () => {
    nstypocolors.logRed('Hello')
    expectColorLog(COLOR_CODES.red, 'Hello')
  })

  test('logGreen prints green text', () => {
    nstypocolors.logGreen('Hello')
    expectColorLog(COLOR_CODES.green, 'Hello')
  })

  test('logPink prints pink text', () => {
    nstypocolors.logPink('Hello')
    expectColorLog(COLOR_CODES.pink, 'Hello')
  })

  test('logYellow prints yellow text', () => {
    nstypocolors.logYellow('Hello')
    expectColorLog(COLOR_CODES.yellow, 'Hello')
  })

  test('logBlue prints blue text', () => {
    nstypocolors.logBlue('Hello')
    expectColorLog(COLOR_CODES.blue, 'Hello')
  })

  test('logMagenta prints magenta text', () => {
    nstypocolors.logMagenta('Hello')
    expectColorLog(COLOR_CODES.magenta, 'Hello')
  })

  test('logCyan prints cyan text', () => {
    nstypocolors.logCyan('Hello')
    expectColorLog(COLOR_CODES.cyan, 'Hello')
  })

  test('logWhite prints white text', () => {
    nstypocolors.logWhite('Hello')
    expectColorLog(COLOR_CODES.white, 'Hello')
  })

  test('logBlack prints black text', () => {
    nstypocolors.logBlack('Hello')
    expectColorLog(COLOR_CODES.black, 'Hello')
  })
})
