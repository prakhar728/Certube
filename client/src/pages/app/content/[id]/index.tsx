// pages/paste-url.tsx
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Content.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import { ObjectId } from 'mongodb';

const PasteURL = () => {
  const [id, setId] = useState('');
  const [info, setInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [submissionLink, setSubmissionLink] = useState<string>('');
  const router = useRouter();
  const { address } = useAccount();

  const handleFetchInfo = async (id: string | string[] | undefined) => {
    try {
      const response = await axios.get('/api/youtube', { params: { id } });
      setInfo(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch information. Please check the ID and try again.');
      setInfo(null);
    }
  };

  const handleSubmission = async () => {
    // Handle the submission link here
    console.log('Submission link:', submissionLink);

    const data = {
      address: address,
      link: submissionLink,
      content: id,
      creatorAddress: info.address
    }

    try {
      const response = await axios.post('/api/submission', data);
      console.log(response.data);
    } catch (err) {
      console.log('Failed to make submission', err);
    }

  };

  useEffect(() => {
    if (router && router.query.id) {
      handleFetchInfo(router.query.id);
      if (typeof router.query.id == 'string')
        setId(router.query.id)
    }
  }, [router]);

  return (
    <div className={styles.container}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {info && (
        <>
          <div className={styles.content}>
            <img src={info.youtubeDetails.thumbnail} alt={info.title} className={styles.thumbnail} />
            
            <div className={styles.description}>
              <h2>{info.title}</h2>
              <p><strong>Channel:</strong> {info.channelTitle}</p>
              <p><strong>Published At:</strong> {new Date(info.publishedAt).toLocaleDateString()}</p>
              {info.description && <p><strong>Description:</strong> {info.description}</p>}
              {info.viewCount && <p><strong>View Count:</strong> {info.viewCount}</p>}
              {info.youtubeDetails && (
                <div>
                  <h3>YouTube Details</h3>
                  <p><strong>Title:</strong> {info.youtubeDetails.title}</p>
                  <p><strong>Channel:</strong> {info.youtubeDetails.channelTitle}</p>
                  <p><strong>Published At:</strong> {new Date(info.youtubeDetails.publishedAt).toLocaleDateString()}</p>
                  {info.youtubeDetails.description && <p><strong>Description:</strong> {info.youtubeDetails.description}</p>}
                  {info.youtubeDetails.viewCount && <p><strong>View Count:</strong> {info.youtubeDetails.viewCount}</p>}
                </div>
              )}
            </div>
          </div>

          <div className={styles.submission}>
            <h3>Submission Requirements</h3>
            <a href={info.pdf} target="_blank" rel="noopener noreferrer">View Submission Requirements</a>

            <h3>Make Submission</h3>
            <input
              type="text"
              placeholder="Enter your submission URL"
              value={submissionLink}
              onChange={(e) => setSubmissionLink(e.target.value)}
            />
            <button onClick={handleSubmission}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PasteURL;

PasteURL.useLayout = true;
