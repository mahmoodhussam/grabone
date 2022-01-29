import React from "react";
import styles from "../styles/CollectionCard.module.css";
import { RiHeartAddLine } from "react-icons/ri";
function CollectionCard({ title, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={image} className={styles.image} />
        <div className={styles.overlay_container}>
          <span className={styles.overlay_text}>{title}</span>
        </div>
      </div>
      <div className={styles.description_container}>
        <span className={styles.description_title}>{title}</span>
        <span className={styles.description_details}>Multiple deals</span>
        <button className={styles.description_button}>
          View Collection {" > "}
        </button>
      </div>
    </div>
  );
}

export default CollectionCard;
