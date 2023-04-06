import styles from "./error-message.module.css";
import errorImg from "./error.gif";

const ErrorMessage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Oops! All heroes have left</p>
      <img className={styles.img} src={errorImg} alt="error" />
    </div>
  );
};

export default ErrorMessage;
