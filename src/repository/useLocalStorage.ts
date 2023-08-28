import { LocalStorageResult } from "@/models/repository/use-local-storage";

const useLocalStorage = <T>(key?: string): LocalStorageResult<T> => {
  const setItem = (_value: T, _key?: string) => {
    try {
      const value = JSON.stringify(_value);
      localStorage.setItem(key || _key, value);
    } catch (error) {
      // do nothing
    }
  };

  const getItem = (_key?: string) => {
    const whichKey = key || _key;
    const value = localStorage.getItem(whichKey);
    if (value) {
      const rawValue = localStorage.getItem(whichKey);
      return JSON.parse(rawValue);
    }

    return null;
  };

  const removeItem = (_key?: string) => {
    localStorage.removeItem(key || _key);
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useLocalStorage;
