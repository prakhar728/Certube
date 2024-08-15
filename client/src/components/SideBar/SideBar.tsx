// components/Sidebar.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CiVideoOn } from 'react-icons/ci';
import { FaFileImport } from 'react-icons/fa6';
import { MdDashboard } from 'react-icons/md';
import { IoBookSharp } from 'react-icons/io5';
import { RiGalleryFill } from 'react-icons/ri';

import styles from '@/styles/Sidebar.module.css';
import { useSidebarContext } from '@/context/SidebarContext';
import { useOCAuth } from '@opencampus/ocid-connect-js';

interface SubMenuItem {
  icon: JSX.Element;
  label: string;
  link: string;
  requiresAuth?: boolean;
}

interface MenuItem {
  icon: JSX.Element;
  label: string;
  requiresAuth?: boolean;
  link?: string;
  subItems?: SubMenuItem[];
}

const Sidebar: React.FC = () => {
  const { selected, setSelected } = useSidebarContext();
  const { authState, ocAuth } = useOCAuth();
  const [userName, setuserName] = useState("");
  const [userAddres, setuserAddres] = useState("");

  useEffect(() => {
    if(ocAuth && ocAuth.getAuthInfo) {
      setuserName(ocAuth.getAuthInfo().edu_username);
      setuserAddres(ocAuth.getAuthInfo().eth_address);
    }
  }, [ocAuth])

  const allMenuItems: MenuItem[] = [
    {
      icon: <IoBookSharp />,
      label: 'Learner',
      subItems: [
        { icon: <RiGalleryFill />, label: 'NFTs', link: '/projects/project2', requiresAuth: true },
        { icon: <MdDashboard />, label: 'Dashboard', link: '/projects/project1' },
      ],
    },
    {
      icon: <CiVideoOn />,
      label: 'Studio',
      requiresAuth: true,
      subItems: [
        { icon: <FaFileImport />, label: 'Import', link: '/app/creator/123' },
        { icon: <MdDashboard />, label: 'Dashboard', link: `/app/creator/${userAddres}` },
      ],
    },
  ];

  const handleClick = (label: string) => {
    setSelected(label);
  };

  // Filter the menu items based on authentication state and requiresAuth property
  const menuItems = allMenuItems
    .filter(item => {
      // If the item requires authentication, check if the user is authenticated
      if (item.requiresAuth) {
        return authState.isAuthenticated;
      }
      return true;
    })
    .map(item => ({
      ...item,
      subItems: item.subItems?.filter(subItem => {
        // If the sub-item requires authentication, check if the user is authenticated
        if (subItem.requiresAuth) {
          return authState.isAuthenticated;
        }
        return true;
      }),
    }));

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
          {item.subItems && item.subItems.length > 0 && (
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
