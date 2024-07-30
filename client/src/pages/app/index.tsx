// pages/paste-url.tsx
import React, { useState } from 'react';
import styles from '@/styles/App.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';


interface playlist {
  _id: string,
  name: string,
  link: string,
  image: string,
  pdf: string,
  address: string,
  createdAt: string,
}

const PasteURL = () => {
  const [key, setkey] = useState("");
  const router = useRouter();

  const fetchVideo = async() => {
    try {
      const response = await axios.get('/api/playlist', { params: { link:key } });
      
      if (response.data._id) {
        router.push('/app/content/' + response.data._id);
      }
    } catch (err) {
      console.log('Failed to fetch information. Please check the URL and try again.');
    }

  }

  return (
    <div className={styles.container}>
      <h1>Paste the URL</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="https://www.youtube.com/watch.." className={styles.input} value={key} onChange={(e) => setkey(e.target.value)}/>
        <button className={styles.copyButton}>
           <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15.75v3.75A2.25 2.25 0 0010.5 21.75h9A2.25 2.25 0 0021.75 19.5v-9a2.25 2.25 0 00-2.25-2.25H15.75M8.25 15.75H6A2.25 2.25 0 013.75 13.5v-9A2.25 2.25 0 016 2.25h9a2.25 2.25 0 012.25 2.25v2.25M8.25 15.75L21 3M15.75 21H21"
            />
          </svg>
        </button>
      </div>
      <button className={styles.searchButton} onClick={fetchVideo}>Search</button>
    </div>
  );
};

export default PasteURL;

PasteURL.useLayout = true;
