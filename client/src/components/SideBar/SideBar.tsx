// components/Sidebar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Sidebar.module.css';

interface MenuItem {
  icon: JSX.Element;
  label: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { icon: <span>🏠</span>, label: 'Home', link: '/' },
  { icon: <span>📁</span>, label: 'Projects', link: '/projects' },
  { icon: <span>📧</span>, label: 'Contact', link: '/contact' },
  // Add more items as needed
];

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className={styles.sidebar}>
      {menuItems.map((item) => (
        <Link href={item.link} key={item.label}>
          <div
            className={`${styles.menuItem} ${selected === item.label ? styles.active : ''}`}
            onClick={() => setSelected(item.label)}
          >
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.label}>{item.label}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
