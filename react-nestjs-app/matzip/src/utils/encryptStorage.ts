import EncryptedStorage from 'react-native-encrypted-storage';

async function setEncryptStorage<T>(key: string, data: T) {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
}

async function getEncryptStorage<T>(key: string): Promise<T | null> {
  const storagedData = await EncryptedStorage.getItem(key);
  return storagedData ? (JSON.parse(storagedData) as T) : null;
}

async function removeEncryptStorage(key: string): Promise<void> {
  const data = await getEncryptStorage(key);
  if (data) {
    await EncryptedStorage.removeItem(key);
  }
}

export {setEncryptStorage, getEncryptStorage, removeEncryptStorage};
