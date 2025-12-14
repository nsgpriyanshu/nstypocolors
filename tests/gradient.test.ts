import { logSuccess, logError, logInfo, logWarning, logDefault } from '../src/utils/gradientPresets'

describe('Gradient color logging', () => {
  let consoleSpy: jest.SpyInstance

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  test('logSuccess uses only purple → pink colors', () => {
    logSuccess('Success')

    const output = consoleSpy.mock.calls[0][0] as string

    // Must contain ANSI escape
    expect(output).toMatch(/\x1b\[38;5;\d+m/)

    // Should NOT contain green or yellow ranges
    expect(output).not.toMatch(/\x1b\[38;5;(46|82|118|154|190)m/)
  })

  test('logError uses red → orange colors only', () => {
    logError('Error')

    const output = consoleSpy.mock.calls[0][0] as string

    // Red & orange ANSI ranges
    expect(output).toMatch(/\x1b\[38;5;(196|160|202|208|214)m/)

    // Should not contain blue or cyan
    expect(output).not.toMatch(/\x1b\[38;5;(33|39|45|51)m/)
  })

  test('logInfo uses blue → cyan colors only', () => {
    logInfo('Info')

    const output = consoleSpy.mock.calls[0][0] as string

    expect(output).toMatch(/\x1b\[38;5;(20|33|39|45|51)m/)
    expect(output).not.toMatch(/\x1b\[38;5;(196|208|229)m/)
  })

  test('logWarning uses yellow → orange colors only', () => {
    logWarning('Warn')

    const output = consoleSpy.mock.calls[0][0] as string

    expect(output).toMatch(/\x1b\[38;5;(229|220|208)m/)
    expect(output).not.toMatch(/\x1b\[38;5;(33|127|196)m/)
  })

  test('logDefault applies red → white gradient', () => {
    logDefault('Default')

    const output = consoleSpy.mock.calls[0][0] as string

    expect(output).toMatch(/\x1b\[38;5;(196|203|210|217|224|231)m/)
  })

  test('gradients work for very small words', () => {
    expect(() => logSuccess('OK')).not.toThrow()
    expect(() => logError('No')).not.toThrow()
    expect(() => logInfo('Hi')).not.toThrow()
    expect(() => logWarning('!')).not.toThrow()
  })

  test('gradient covers entire message length', () => {
    const msg = 'GradientTest'
    logSuccess(msg)

    const output = consoleSpy.mock.calls[0][0] as string
    const colorCount = (output.match(/\x1b\[38;5;\d+m/g) || []).length

    expect(colorCount).toBe(msg.length)
  })
})
