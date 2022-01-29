import React from "react";
import Card from "./Card";
import image from "../assests/images/fit.jpg";
import styles from "../styles/CardSection.module.css";
function CardSection({ title, cards }) {
  return (
    <section className={styles.container}>
      <div className={styles.section_container}>
        <h3 className={styles.title}>{title}</h3>
        <button className={styles.view_more}>View More {" > "} </button>
      </div>
      <div className={styles.card_container}>{cards}</div>
    </section>
  );
}

export default CardSection;
