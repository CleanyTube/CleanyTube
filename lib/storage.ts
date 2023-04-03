import AsyncStorage from '@react-native-async-storage/async-storage'

export class Storage {
  static async setItem(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, this.toSafeValue(value))
    } catch (e) {
      console.error(e)
    }
  }

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

  static async getStringItem(key: string) {
    return this.internalGet(key)
  }

  static async getStringItems(...keys: string[]) {
    const items = await this.internalMultiGet(...keys)
    return items?.map(([key, value]) => ({ key, value }))
  }

  static async getNumericItem(key: string) {
    return Number(await this.internalGet(key))
  }

  static async getNumericItems(...keys: string[]) {
    const items = await this.internalMultiGet(...keys)
    return items?.map(([key, value]) => ({ key, value: Number(value) }))
  }

  static async getBooleanItem(key: string) {
    return (await this.internalGet(key)) === 'true'
  }

  static async getBooleanItems(...keys: string[]) {
    const items = await this.internalMultiGet(...keys)
    return items?.map(([key, value]) => ({ key, value: value === 'true' }))
  }

  static async getObjectItem<T>(
    key: string
  ): Promise<unknown extends T ? any : T> {
    const item = await this.internalGet(key)
    return item ? JSON.parse(item) : null
  }

  static async getObjectItems<T>(...keys: string[]): Promise<
    {
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

  private static async internalGet(key: string) {
    try {
      return AsyncStorage.getItem(key)
    } catch (e) {
      console.error(e)
    }
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
      AsyncStorage.multiRemove(keys)
    } catch (e) {
      console.error(e)
    }
  }

  static async clear() {
    try {
      AsyncStorage.clear()
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
