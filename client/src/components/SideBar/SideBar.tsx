// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { CiVideoOn } from 'react-icons/ci';
import { FaFileImport } from 'react-icons/fa6';
import { MdDashboard } from 'react-icons/md';
import { IoBookSharp } from 'react-icons/io5';
import { RiGalleryFill } from 'react-icons/ri';

import styles from '@/styles/Sidebar.module.css';
import { useSidebarContext } from '@/context/SidebarContext';

interface SubMenuItem {
  icon: JSX.Element;
  label: string;
  link: string;
}

interface MenuItem {
  icon: JSX.Element;
  label: string;
  link?: string;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    icon: <IoBookSharp />,
    label: 'Learner',
    subItems: [
      { icon: <RiGalleryFill />, label: 'NFTs', link: '/projects/project2' },
      { icon: <MdDashboard />, label: 'Dashboard', link: '/projects/project1' },
    ],
  },
  {
    icon: <CiVideoOn />,
    label: 'Studio',
    subItems: [
      { icon: <FaFileImport />, label: 'Import', link: '/projects/project1' },
      { icon: <MdDashboard />, label: 'Dashboard', link: '/projects/project2' },
    ],
  },
];

const Sidebar: React.FC = () => {
  const { selected, setSelected } = useSidebarContext();

  const handleClick = (label: string) => {
    setSelected(label);
  };

  return (
    <div className={styles.sidebar}>
      {menuItems.map((item) => (
        <div key={item.label} className={styles.menuItem}>
          <div
            className={`${styles.menuItemLabel} ${selected === item.label ? styles.active : ''}`}
            onClick={() => handleClick(item.label)}
          >
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.label}>{item.label}</div>
          </div>
          {item.subItems && (
            <div className={styles.subMenu}>
              {item.subItems.map((subItem) => (
                <Link href={subItem.link} key={subItem.label}>
                  <div
                    className={`${styles.subMenuItem} ${selected === item.label + subItem.label ? styles.active : ''}`}
                    onClick={() => handleClick(item.label + subItem.label)}
                  >
                    <div className={styles.icon}>{subItem.icon}</div>
                    <div className={styles.label}>{subItem.label}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
