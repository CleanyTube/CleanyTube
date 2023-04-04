export class Logger {
  context?: string
  isDevMode = __DEV__

  constructor(context: string) {
    this.context = context
  }

  log(...args: any[]) {
    if (this.isDevMode) console.log(this.context ?? '', ...args)
  }

  info(...args: any[]) {
    if (this.isDevMode) console.info(this.context ?? '', ...args)
  }

  warn(...args: any[]) {
    if (this.isDevMode) console.warn(this.context ?? '', ...args)
  }

  debug(...args: any[]) {
    if (this.isDevMode) console.debug(this.context ?? '', ...args)
  }

  error(...args: any[]) {
    if (this.isDevMode) console.error(this.context ?? '', ...args)
  }
}
