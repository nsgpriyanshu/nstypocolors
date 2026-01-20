import { homedir } from 'os'
import { join } from 'path'
import { readFileSync, writeFileSync, existsSync } from 'fs'

const CONFIG_FILE = join(homedir(), '.nstc-config.json')

interface Config {
  defaultColor: string | null
}

const DEFAULT_CONFIG: Config = {
  defaultColor: null,
}

/**
 * Load the configuration from the user's home directory
 */
export function loadConfig(): Config {
  try {
    if (existsSync(CONFIG_FILE)) {
      const data = readFileSync(CONFIG_FILE, 'utf-8')
      return JSON.parse(data)
    }
  } catch (error) {
    // If there's an error reading/parsing, return default config
  }
  return DEFAULT_CONFIG
}

/**
 * Save the configuration to the user's home directory
 */
export function saveConfig(config: Config): void {
  try {
    writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf-8')
  } catch (error) {
    console.error('Failed to save configuration:', error)
  }
}

/**
 * Set the default color
 */
export function setDefaultColor(colorOption: string): void {
  const config = loadConfig()
  config.defaultColor = colorOption
  saveConfig(config)
}

/**
 * Get the default color
 */
export function getDefaultColor(): string | null {
  const config = loadConfig()
  return config.defaultColor
}

/**
 * Clear the default color configuration
 */
export function clearDefaultColor(): void {
  const config = loadConfig()
  config.defaultColor = null
  saveConfig(config)
}
