import AsyncStorage from '@react-native-async-storage/async-storage'

export class Storage {
  static async setItems(...args: [string, any][]) {
    try {
      const safeValues = args.map(([key, value]) => [
        key,
        this.toSafeValue(value),
      ]) as unknown as [string, string][]

      await AsyncStorage.multiSet(safeValues)
    } catch (e) {
      console.error(e)
    }
  }

  private static toSafeValue(item: any) {
    if (typeof item === 'string') return item
    if (typeof item === 'object') return JSON.stringify(item)
    return String(item)
  }

  static async getStringItems(...keys: string[]) {
    const items = await this.internalMultiGet(...keys)
    return items?.map(([key, value]) => ({ key, value }))
  }

  static async getNumericItems(...keys: string[]) {
    const items = await this.internalMultiGet(...keys)
    return items?.map(([key, value]) => ({ key, value: Number(value) }))
  }

  static async getBooleanItems(...keys: string[]) {
    const items = await this.internalMultiGet(...keys)
    return items?.map(([key, value]) => ({ key, value: value === 'true' }))
  }

  static async getObjectItems<T>(...keys: string[]): Promise<
    | {
        key: string
        value: unknown extends T ? any : T
      }[]
  > {
    const items = await this.internalMultiGet(...keys)
    return items?.map(([key, value]) => ({
      key,
      value: value ? JSON.parse(value) : null,
    }))
  }

  private static async internalMultiGet(...keys: string[]) {
    try {
      return AsyncStorage.multiGet(keys) ?? []
    } catch (e) {
      console.error(e)
      return []
    }
  }

  static async removeItems(...keys: string[]) {
    try {
      return AsyncStorage.multiRemove(keys)
    } catch (e) {
      console.error(e)
    }
  }

  static async clear() {
    try {
      return AsyncStorage.clear()
    } catch (e) {
      console.error(e)
    }
  }

  static async getKeys() {
    try {
      return AsyncStorage.getAllKeys()
    } catch (e) {
      console.error(e)
    }
  }
}
