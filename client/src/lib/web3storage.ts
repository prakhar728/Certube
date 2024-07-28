// lib/web3Storage.ts
import { create } from '@web3-storage/w3up-client';

export async function makeStorageClient() {
  const client = await create();
  return client;
}
