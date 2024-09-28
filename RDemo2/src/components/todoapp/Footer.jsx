import styles from "./footer.module.css";

const Footer = ({ ct, tt }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>{ct} Completed</span>
      <span className={styles.item}>{tt} Total</span>
    </div>
  );
};

export default Footer;
