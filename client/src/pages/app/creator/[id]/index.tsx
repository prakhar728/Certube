// pages/dashboard.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from '@/styles/CreatorDashboard.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Users',
        data: [65, 59, 80, 81, 56, 55, 40, 85, 90, 100, 115, 130],
        fill: false,
        borderColor: '#42a5f5',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'My Content Overview',
        color: '#fff',
        font: {
          size: 20,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
        },
      },
      y: {
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <div className={styles.overview}>
          {/* <div className={styles.cardContainer}>
              <div className={styles.card}>
              <h3>Total Users</h3>
              <p>150</p>
              <span>+12.5%</span>
              </div>
              <div className={styles.card}>
              <h3>Users who gained Certificates</h3>
              <p>50</p>
              <span>+6.5%</span>
              </div>
          </div> */}
          <div className={styles.chartContainer}>
            <Line data={data} options={options} />
          </div>
        </div>
        
        {/* <div className={styles.analytics}>
          <h3>NFT Analytics</h3>
          <div className={styles.pieChart}>
            <div className={styles.pieContainer}>
              <div className={styles.pieSegment} style={{ background: 'conic-gradient(#42a5f5 75%, #4caf50 0)' }}>
                <div className={styles.pieLabel}>75%</div>
              </div>
            </div>
            <div className={styles.pieLegend}>
              <p><span style={{ backgroundColor: '#42a5f5' }} /> NFT Claimed 75%</p>
              <p><span style={{ backgroundColor: '#4caf50' }} /> NFT Unclaimed 25%</p>
            </div>
          </div>
        </div> */}
        <div className={styles.myContent}>
          <h3>My Content</h3>
          <div className={styles.playlist}>
            <div className={styles.playlistItem}>
              <img src="/path/to/thumbnail1.jpg" alt="Playlist Thumbnail" />
              <div className={styles.playlistInfo}>
                <p>Playlist name</p>
                <p>Short description</p>
                <p>Public</p>
              </div>
            </div>
            <div className={styles.playlistItem}>
              <img src="/path/to/thumbnail2.jpg" alt="Playlist Thumbnail" />
              <div className={styles.playlistInfo}>
                <p>Playlist name</p>
                <p>Short description</p>
                <p>Private</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contentImport}>

      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.useLayout = true;
