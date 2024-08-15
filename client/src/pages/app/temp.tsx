// pages/video-submission.tsx
import React from 'react';
import styles from '@/styles/Playlist.module.css';

const VideoSubmission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoDetails}>
        <img src="/learn-react-thumbnail.jpg" alt="React Tutorial Thumbnail" className={styles.thumbnail} />
        <div className={styles.details}>
          <h2>React Tutorial For Beginners</h2>
          <p>2.8M views - 1 year ago</p>
          <p>Programming with Mosh</p>
          <p>Master React 18 with TypeScript 🚀 Build amazing front-end apps with this beginner-friendly tutorial. Want the ultimate guide to React?</p>
          <p>Beginner</p>
          <p>23 chapters</p>
        </div>
      </div>
      <div className={styles.submission}>
        <label htmlFor="requirements">Submission Requirements</label>
        <input type="text" id="requirements" name="requirements" />
        <label htmlFor="link">Submission Link</label>
        <input type="text" id="link" name="link" />
      </div>
    </div>
  );
};

export default VideoSubmission;

VideoSubmission.useLayout = true;