import styles from "./innerContainer.module.css";

const InnerContainer = ({ children }) => {
  return <div className={styles.InnerContainer}>{children}</div>;
};

export default InnerContainer;
