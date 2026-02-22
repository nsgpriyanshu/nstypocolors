import { describe, beforeEach, afterEach, test, expect, vi, type MockInstance } from 'vitest'
import * as nstypocolors from '../src/index'
import { COLOR_CODES } from '../src/utils/color'

describe('nstypocolors bright color logging functions', () => {
  let consoleSpy: MockInstance

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  function expectBrightColorLog(color: string, message: string) {
    const output = consoleSpy.mock.calls[0][0] as string
    expect(output).toContain(color)
    expect(output).toContain(message)
    expect(output).toContain(COLOR_CODES.reset)
  }

  test('logBrightRed prints bright red text', () => {
    nstypocolors.logBrightRed('Hello')
    expectBrightColorLog(COLOR_CODES.brightRed, 'Hello')
  })

  test('logBrightGreen prints bright green text', () => {
    nstypocolors.logBrightGreen('Hello')
    expectBrightColorLog(COLOR_CODES.brightGreen, 'Hello')
  })

  test('logBrightPink prints bright pink text', () => {
    nstypocolors.logBrightPink('Hello')
    expectBrightColorLog(COLOR_CODES.brightPink, 'Hello')
  })

  test('logBrightYellow prints bright yellow text', () => {
    nstypocolors.logBrightYellow('Hello')
    expectBrightColorLog(COLOR_CODES.brightYellow, 'Hello')
  })

  test('logBrightBlue prints bright blue text', () => {
    nstypocolors.logBrightBlue('Hello')
    expectBrightColorLog(COLOR_CODES.brightBlue, 'Hello')
  })

  test('logBrightMagenta prints bright magenta text', () => {
    nstypocolors.logBrightMagenta('Hello')
    expectBrightColorLog(COLOR_CODES.brightMagenta, 'Hello')
  })

  test('logBrightCyan prints bright cyan text', () => {
    nstypocolors.logBrightCyan('Hello')
    expectBrightColorLog(COLOR_CODES.brightCyan, 'Hello')
  })

  test('logBrightWhite prints bright white text', () => {
    nstypocolors.logBrightWhite('Hello')
    expectBrightColorLog(COLOR_CODES.brightWhite, 'Hello')
  })
})
