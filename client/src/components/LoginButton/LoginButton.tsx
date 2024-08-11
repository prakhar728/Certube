import { useOCAuth } from "@opencampus/ocid-connect-js";
import styles from '@/styles/ConnectButton.module.css';

const LoginButton = () => {
  const { ocAuth } = useOCAuth();

  const handleLogin = async () => {
    await ocAuth.signInWithRedirect({
      state: "opencampus",
    });
  };

  return (
    <button className={styles.connectButton} onClick={handleLogin}>
      <img className={styles.icon} src="/OpenCampusLogo.png" alt="OpenCampus Logo" />
      <span>Connect OCID</span>
    </button>
  );
};

export default LoginButton;
