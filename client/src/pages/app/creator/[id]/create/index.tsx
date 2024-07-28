// pages/import-playlist.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Create.module.css';
import { useAccount } from 'wagmi';
import { uploadFile, uploadImage } from '@/lib/uploadFiles';

interface FormData {
  name: string;
  link: string;
  image: File | null;
  pdf: File | null;
  address: string;
}

export default function Creator() {
  const { address } = useAccount();
  
  const [form, setForm] = useState<FormData>({
    name: '',
    link: '',
    image: null,
    pdf: null,
    address: `${address}`
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prevForm) => ({ ...prevForm, [name]: files[0] }));
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let imageUrl = '';
    let pdfUrl = '';

    if (form.image) {
      imageUrl = await uploadFile(form.image);
    }

    if (form.pdf) {
      pdfUrl = await uploadFile(form.pdf);
    }

    const payload = {
      name: form.name,
      link: form.link,
      address: address,
      image: imageUrl,
      pdf: pdfUrl
    };

    const res = await fetch('/api/playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      console.log('Playlist saved');
      // Handle success
    } else {
      console.error('Error saving playlist');
      // Handle error
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Import your playlist</h1>
        <div className={styles.inputGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name of the playlist or video</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Enter the name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="link">Link to the playlist or video</label>
            <input type="url" id="link" name="link" value={form.link} onChange={handleChange} required placeholder="Enter the link" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="image">Upload an image (NFT)</label>
            <input type="file" id="image" name="image" onChange={handleChange} accept="image/*" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="pdf">Upload submission requirements (PDF)</label>
            <input type="file" id="pdf" name="pdf" onChange={handleChange} accept="application/pdf" />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

Creator.useLayout = true;
