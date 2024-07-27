// pages/api/playlist/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('certube');

  switch (req.method) {
    case 'POST':
        console.log(req.body);
            
      const { name, link, image, pdf, address } = req.body;
    
      console.log(name, link);
      
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
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
