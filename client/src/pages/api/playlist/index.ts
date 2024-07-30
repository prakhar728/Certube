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

  } else if (req.method === 'GET') {

    const { link } = req.query;

    if (!link || typeof link !== 'string') {
      return res.status(400).json({ error: 'Invalid link' });
    }
  
    try {
      const collection = db.collection('playlists');
      const playlist = await collection.findOne({ link });
  
      if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
  
      return res.status(200).json(playlist);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch data from database' });
    }

  }  else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
