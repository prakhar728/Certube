// pages/api/playlist/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('certube');

  if (req.method === 'POST') {
    const { name, link, image, pdf, address } = req.body;
    
    const collection = db.collection('playlists');
    const result = await collection.insertOne({
      name,
      link,
      image,
      pdf,
      address,
      createdAt: new Date(),
    });

    res.status(201).json({ message: 'Playlist saved', result });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
