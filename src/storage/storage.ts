import { logger } from "../utils/logger";

export class StorageManager {
  private static instance: StorageManager;

  private constructor() {}

  public static make(): StorageManager {
    if (!StorageManager.instance) {
      StorageManager.instance = new StorageManager();
    }
    return StorageManager.instance;
  }

  public async get(key: string): Promise<string> {
    try {
      const result = await chrome.storage.local.get([key]);
      return result[key];
    } catch (e: any) {
      logger.error(
        `[StorageManager] failed to get "${key}" from localStorage: `,
        e?.message
      );
      return "";
    }
  }

  public async set(key: string, value: string): Promise<boolean> {
    try {
      await chrome.storage.local.set({ key: value });
      return true;
    } catch (e: any) {
      logger.error(
        `[StorageManager] failed to set {"${key}" : "${value}"} from localStorage: `,
        e?.message
      );
      return false;
    }
  }
}

const storageManager = StorageManager.make();

export default storageManager;
