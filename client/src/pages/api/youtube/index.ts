// pages/api/fetch-details.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const API_KEY = process.env.YOUTUBE_API_KEY;

const getYoutubeVideoInfo = async (videoId: string) => {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`;
  const response = await axios.get(url);
  const video = response.data.items[0];
  return {
    title: video.snippet.title,
    description: video.snippet.description,
    thumbnail: video.snippet.thumbnails.high.url,
    viewCount: video.statistics.viewCount,
    channelTitle: video.snippet.channelTitle,
    publishedAt: video.snippet.publishedAt,
  };
};

const getYoutubePlaylistInfo = async (playlistId: string) => {
  const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${API_KEY}`;
  const response = await axios.get(url);
  const playlist = response.data.items[0];
  return {
    title: playlist.snippet.title,
    description: playlist.snippet.description,
    thumbnail: playlist.snippet.thumbnails.high.url,
    channelTitle: playlist.snippet.channelTitle,
    publishedAt: playlist.snippet.publishedAt,
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('certube');
    const collection = db.collection('playlists');
    
    const playlist = await collection.findOne({ _id: new ObjectId(id) });
    
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }
    
    const { link: youtubeLink } = playlist;

    const videoMatch = youtubeLink.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
    const playlistMatch = youtubeLink.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/playlist\?list=([^&]+)/);

    if (videoMatch) {
      const videoId = videoMatch[1];
      const videoInfo = await getYoutubeVideoInfo(videoId);
      return res.status(200).json({ ...playlist, youtubeDetails: videoInfo });
    } else if (playlistMatch) {
      const playlistId = playlistMatch[1];
      const playlistInfo = await getYoutubePlaylistInfo(playlistId);
      return res.status(200).json({ ...playlist, youtubeDetails: playlistInfo });
    } else {
      return res.status(400).json({ error: 'URL is not a valid YouTube video or playlist URL' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
}
