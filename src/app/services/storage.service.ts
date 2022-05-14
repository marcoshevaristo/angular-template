import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {}

  public clear(): void {
    sessionStorage.clear();
    localStorage.clear();
  }

  public clearSession(): void {
    sessionStorage.clear();
  }

  public get(key: string): any {
    const storageItem = localStorage.getItem(key);
    try {
      return storageItem ? JSON.parse(storageItem) : '';
    } catch (e) {
      return storageItem;
    }
  }

  public set(key: string, value: any): void {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public getSession(key: string): any {
    const storageItem = sessionStorage.getItem(key);
    try {
      return storageItem ? JSON.parse(storageItem) : '';
    } catch (e) {
      return storageItem;
    }
  }

  public setSession(key: string, value: any): void {
    sessionStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  }

  public removeSession(key: string): void {
    sessionStorage.removeItem(key);
  }
}
