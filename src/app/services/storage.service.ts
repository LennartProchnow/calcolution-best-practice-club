import { Injectable } from '@angular/core';

/**
 * This service is providing an api for a storage object
 */
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * Get value by key from storage
   *
   * @param key to search for
   */
  get(key: string): string | null {
    return window.sessionStorage.getItem(key);
  }

  /**
   * Set value by key to storage
   *
   * @param key to save
   * @param value to save
   */
  set(key: string, value: string): void {
    window.sessionStorage.setItem(key, value);
  }

  /**
   * Deletes all items from storage for this site
   */
  clear(): void {
    window.sessionStorage.clear();
  }

  /**
   * Deletes a entry in storage by key
   *
   * @param key to delete
   */
  delete(key: string) {
    window.sessionStorage.removeItem(key);
  }

}

