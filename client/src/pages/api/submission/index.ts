// pages/api/submit.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address, link, status = 'not marked', content, creatorAddress } = req.body;

  if (!address || !link || !content || !creatorAddress) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('certube');
    const collection = db.collection('submissions');

    const result = await collection.insertOne({
      address,
      link,
      status,
      playlist: content,
      creatorAddress,
      createdAt: new Date(),
    });

    return res.status(201).json({ message: 'Submission saved', result });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to save submission' });
  }
}
