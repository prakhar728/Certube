import { useOCAuth } from "@opencampus/ocid-connect-js";
import styles from '@/styles/ConnectButton.module.css';
import { useEffect, useState } from "react";

const AddressButton = () => {
    const { ocAuth } = useOCAuth();
    const [userName, setuserName] = useState("");

    const copyAddressToClipboard = async () => {
        await navigator.clipboard.writeText(ocAuth.getAuthInfo().eth_address);
    };

    useEffect(() => {
      if(ocAuth && ocAuth.getAuthInfo) {
        setuserName(ocAuth.getAuthInfo().edu_username)
      }
    }, [ocAuth])
    

    return (
        <button className={styles.connectButton} onClick={copyAddressToClipboard}>
        <img className={styles.icon} src="/OpenCampusLogo.png" alt="OpenCampus Logo" />
        <span>
            {userName}
        </span>
        </button>
    );
};

export default AddressButton;
