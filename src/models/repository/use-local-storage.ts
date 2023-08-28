export interface LocalStorageResult<T> {
  getItem: (key?: string) => T | null;
  setItem: (value: T, key?: string) => void;
  removeItem: (key: string) => void;
}
