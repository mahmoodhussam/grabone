import React from "react";
import styles from "../styles/DiscoverNav.module.css";
function DiscoverNav() {
  return (
    <aside className={styles.container}>
      <h1 className={styles.aside_header}>Discover</h1>
      <ul className={styles.aside_list}>
        <li className={styles.aside_list_item}>
          <a className={styles.aside_list_item_link}>
            <span className={styles.aside_list_item_text}>
              Featured Auckland deals
            </span>
          </a>
        </li>
        <li className={styles.aside_list_item}>
          <a className={styles.aside_list_item_link}>
            <span className={styles.aside_list_item_text}>Collections</span>
            <span className={styles.aside_list_item_number}>46</span>
          </a>
        </li>
        <li className={styles.aside_list_item}>
          <a className={styles.aside_list_item_link}>
            <span className={styles.aside_list_item_text}>
              Activities, Events & Outdoors
            </span>
            <span className={styles.aside_list_item_number}>238</span>
          </a>
        </li>
        <li className={styles.aside_list_item}>
          <a className={styles.aside_list_item_link}>
            <span className={styles.aside_list_item_text}>Picked for You</span>
            <span className={styles.aside_list_item_number}>238</span>
          </a>
        </li>
        <li className={styles.aside_list_item}>
          <a className={styles.aside_list_item_link}>
            <span className={styles.aside_list_item_text}>Store</span>
            <span className={styles.aside_list_item_number}>2608</span>
          </a>
        </li>
        <li className={styles.aside_list_item}>
          <a className={styles.aside_list_item_link}>
            <span className={styles.aside_list_item_text}>
              Restaurants, Bars, Cafes
            </span>
            <span className={styles.aside_list_item_number}>20</span>
          </a>
        </li>
        <li className={styles.aside_list_item}>
          <a className={styles.aside_list_item_link}>
            <span className={styles.aside_list_item_text}>
              Beauty, Massage & Spa
            </span>
            <span className={styles.aside_list_item_number}>248</span>
          </a>
        </li>
        <li className={styles.aside_list_item}>
          <a className={styles.aside_list_item_link}>
            <span className={styles.aside_list_item_text}>House & Garden</span>
            <span className={styles.aside_list_item_number}>1340</span>
          </a>
        </li>
        <li className={styles.aside_list_item}>
          <a className={styles.aside_list_item_link}>
            <span className={styles.aside_list_item_text}>
              Fitness & Sports
            </span>
            <span className={styles.aside_list_item_number}>151</span>
          </a>
        </li>
        <li className={styles.aside_list_item}>
          <a className={styles.aside_list_item_link}>
            <span className={styles.aside_list_item_text}>Automotive</span>
            <span className={styles.aside_list_item_number}>90</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default DiscoverNav;
