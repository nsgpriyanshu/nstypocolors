import { describe, beforeEach, afterEach, test, expect, vi, type MockInstance } from 'vitest'
import * as nstypocolors from '../src/index'
import { COLOR_CODES } from '../src/utils/color'

describe('nstypocolors pastel logging functions', () => {
  let consoleSpy: MockInstance

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  function expectPastelLog(color: string, message: string) {
    const output = consoleSpy.mock.calls[0][0] as string
    expect(output).toContain(color)
    expect(output).toContain(message)
    expect(output).toContain(COLOR_CODES.reset)
  }

  test('logPastelRed prints pastel red text', () => {
    nstypocolors.logPastelRed('Hello')
    expectPastelLog(COLOR_CODES.pastelRed, 'Hello')
  })

  test('logPastelPink prints pastel pink text', () => {
    nstypocolors.logPastelPink('Hello')
    expectPastelLog(COLOR_CODES.pastelPink, 'Hello')
  })

  test('logPastelBlue prints pastel blue text', () => {
    nstypocolors.logPastelBlue('Hello')
    expectPastelLog(COLOR_CODES.pastelBlue, 'Hello')
  })

  test('logPastelGreen prints pastel green text', () => {
    nstypocolors.logPastelGreen('Hello')
    expectPastelLog(COLOR_CODES.pastelGreen, 'Hello')
  })

  test('logPastelYellow prints pastel yellow text', () => {
    nstypocolors.logPastelYellow('Hello')
    expectPastelLog(COLOR_CODES.pastelYellow, 'Hello')
  })

  test('logPastelOrange prints pastel orange text', () => {
    nstypocolors.logPastelOrange('Hello')
    expectPastelLog(COLOR_CODES.pastelOrange, 'Hello')
  })
})
