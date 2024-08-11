import React, { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";
import LoginButton from '../LoginButton/LoginButton';
import { useOCAuth } from '@opencampus/ocid-connect-js';
import AddressButton from '../AddressButton/AddressButton';

const Header: React.FC = () => {
	const { authState } = useOCAuth();

  return (
    <header>
				<div className={styles.header}>
					<div className={styles.logo}>
						<Image
							src="/Logo.png"
							alt="WalletConnect Logo"
							height="100"
							width="100"
						/>
					</div>
					<div className={styles.buttons}>
						{authState.isAuthenticated ?
						<div>
							<AddressButton />
						</div>
						:
						<div>
							<LoginButton />
						</div>
						}
						
					</div>
				</div>
			</header>
  );
};

export default Header;
