// pages/import-playlist.js or pages/import-playlist.tsx
import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Create.module.css';

export default function Creator() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Import your playlist</h1>
        <div className={styles.inputGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name of the playlist or video</label>
            <input type="text" id="name" name="name" required placeholder="Enter the name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="link">Link to the playlist or video</label>
            <input type="url" id="link" name="link" required placeholder="Enter the link" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="image">Upload an image (NFT)</label>
            <input type="file" id="image" name="image" accept="image/*" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="pdf">Upload submission requirements (PDF)</label>
            <input type="file" id="pdf" name="pdf" accept="application/pdf" required />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

Creator.useLayout = true;
