import React from "react";
import styles from "../styles/Card.module.css";
import { RiHeartAddLine } from "react-icons/ri";
function Card({
  title,
  subTitle,
  city,
  description,
  price,
  prevPrice,
  numOfBought,
  image,
  badge,
  containerWidth,
  imageHeight,
}) {
  return (
    <div className={styles.container} style={{ width: { containerWidth } }}>
      <div
        className={styles.card_image_container}
        style={{ height: { imageHeight } }}
      >
        <img className={styles.card_image} src={image} />
        <div className={styles.badge_container}>
          <span className={styles.badge_text}>{badge}</span>
        </div>
        <div className={styles.card_description}>
          <span className={styles.card_description_text}>{description}</span>
        </div>
      </div>
      <div className={styles.card_info_container}>
        <div className={styles.card_info}>
          <span className={styles.card_info_title}>{title}</span>
          <span className={styles.card_info_sub_title}>{subTitle}</span>
          <span className={styles.card_info_city}>{city}</span>
        </div>
        <div className={styles.card_info_price_container}>
          <div className={styles.card_info_price_bought_number_container}>
            <span className={styles.card_info_price_bought_number}>
              {numOfBought} bought
            </span>
          </div>
          <div className={styles.card_info_price}>
            <div className={styles.card_info_price_previous}>
              <span className={styles.card_info_price_previous_text}>
                {prevPrice}$
              </span>
            </div>
            <div className={styles.card_info_price_current}>
              <span className={styles.card_info_price_current_text}>
                {price}$
              </span>
              <span className={styles.card_info_price_from}>from</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card_love}>
        <RiHeartAddLine size={25} />
      </div>
    </div>
  );
}

export default Card;
