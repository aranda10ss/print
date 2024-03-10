const defaultConfig = {
  colors: true,
  timestamp: false,
  level: true
}

const colors = {
  INFO: '\x1b[32m',
  WARN: '\x1b[33m',
  ERROR: '\x1b[31m'
}

class Logger {
  constructor(config = {}) {
    this.config = { ...defaultConfig, ...config }
  }

  log(level, message) {
    const { colors: useColors, timestamp, level: useLevel } = this.config
    const upperCaseLevel = level.toUpperCase()
    const color = useColors ? colors[upperCaseLevel] || '' : ''
    const timestampStr = timestamp ? `[${new Date().toLocaleTimeString()}]` : ''
    const levelStr = useLevel ? `[${upperCaseLevel}]` : ''

    console.log(`${color}${timestampStr} ${levelStr} ${message}\x1b[0m`)
  }
}

export { Logger }
