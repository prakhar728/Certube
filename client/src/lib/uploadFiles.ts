// lib/uploadFiles.ts
import { makeStorageClient } from './web3storage';

export async function uploadFile(file: File): Promise<string> {
  const client = await makeStorageClient();
  const cid = await client.uploadDirectory([new File([file], file.name)]);
  return `https://${cid}.ipfs.w3s.link/${file.name}`;
}

export async function uploadImage(image: File): Promise<string> {
  const client = await makeStorageClient();
  const space = await client.createSpace('certube');
  await space.save();
  await client.setCurrentSpace(space.did());
console.log(typeof(image));

  const cid = await client.uploadFile(new File([image], 'certificate.png'));
  return `https://${cid}.ipfs.w3s.link/${image.name}`;
}
