import styles from '../styles/ErrorMessage.module.css';

export default function ErrorMessage({ error }) {
  return <p className={styles.errorMessage}>{error}</p>;
}
