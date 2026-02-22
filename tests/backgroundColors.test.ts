import { describe, beforeEach, afterEach, test, expect, vi, type MockInstance } from 'vitest'
import * as nstypocolors from '../src/index'
import { COLOR_CODES } from '../src/utils/color'

describe('nstypocolors background pastel logging functions', () => {
  let consoleSpy: MockInstance

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  function expectBackgroundLog(bgColor: string, message: string) {
    const output = consoleSpy.mock.calls[0][0] as string
    expect(output).toContain(bgColor)
    expect(output).toContain(message)
    expect(output).toContain(COLOR_CODES.reset)
  }

  test('logBackPastelRed prints pastel red background', () => {
    nstypocolors.logBackPastelRed('Hello')
    expectBackgroundLog(COLOR_CODES.backPastelRed, 'Hello')
  })

  test('logBackPastelPink prints pastel pink background', () => {
    nstypocolors.logBackPastelPink('Hello')
    expectBackgroundLog(COLOR_CODES.backPastelPink, 'Hello')
  })

  test('logBackPastelBlue prints pastel blue background', () => {
    nstypocolors.logBackPastelBlue('Hello')
    expectBackgroundLog(COLOR_CODES.backPastelBlue, 'Hello')
  })

  test('logBackPastelGreen prints pastel green background', () => {
    nstypocolors.logBackPastelGreen('Hello')
    expectBackgroundLog(COLOR_CODES.backPastelGreen, 'Hello')
  })

  test('logBackPastelYellow prints pastel yellow background', () => {
    nstypocolors.logBackPastelYellow('Hello')
    expectBackgroundLog(COLOR_CODES.backPastelYellow, 'Hello')
  })

  test('logBackPastelOrange prints pastel orange background', () => {
    nstypocolors.logBackPastelOrange('Hello')
    expectBackgroundLog(COLOR_CODES.backPastelOrange, 'Hello')
  })

  test('logBackPastelLavender prints pastel lavender background', () => {
    nstypocolors.logBackPastelLavender('Hello')
    expectBackgroundLog(COLOR_CODES.backPastelLavender, 'Hello')
  })

  test('logBackPastelCoral prints pastel coral background', () => {
    nstypocolors.logBackPastelCoral('Hello')
    expectBackgroundLog(COLOR_CODES.backPastelCoral, 'Hello')
  })

  test('logBackPastelMint prints pastel mint background', () => {
    nstypocolors.logBackPastelMint('Hello')
    expectBackgroundLog(COLOR_CODES.backPastelMint, 'Hello')
  })
})
