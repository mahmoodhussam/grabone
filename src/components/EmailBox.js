import React from "react";
import { FiMail } from "react-icons/fi";
import styles from "../styles/EmailBox.module.css";
function EmailBox() {
  return (
    <div className={styles.container}>
      <h2 className={styles.search_text}>
        Get the best deals delivered direct to your inbox each day
      </h2>
      <div className={styles.email_subscription_container}>
        <div className={styles.email_subscription_search}>
          <div className={styles.search_icon}>
            <FiMail size={25} color="#ccc" />
          </div>
          <input
            className={styles.email_input}
            placeholder="Enter email address"
          />
        </div>
        <button className={styles.email_sub_btn}>Subscribe</button>
      </div>
    </div>
  );
}

export default EmailBox;
