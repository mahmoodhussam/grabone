import React from "react";
import styles from "../styles/Footer.module.css";
import { GrFacebookOption, GrYoutube } from "react-icons/gr";
import { BsFillPhoneFill, BsPhone, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import EmailBox from "./EmailBox";
import { FiMail } from "react-icons/fi";
function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.container_footer_info}>
        <div className={styles.social_media}>
          <h3>Follow us on</h3>
          <div className={styles.icon_container}>
            <div className={styles.icon}>
              <GrFacebookOption color="#fff" size={20} />
            </div>
            <div className={styles.icon}>
              <BsTwitter color="#fff" />
            </div>
            <div className={styles.icon}>
              <FaInstagram color="#fff" />
            </div>
            <div className={styles.icon}>
              <GrYoutube color="#fff" />
            </div>
          </div>
          <h4>Get app exclusive deals</h4>
          <button className={styles.app_btn}>
            <BsPhone color="#fff" size={25} style={{ marginRight: "5px" }} />{" "}
            <span>Download our App</span>
          </button>
        </div>
        <div>
          <h2 className={styles.footer_header_list}>GrabOne</h2>
          <ul className={styles.footer_list}>
            <li>
              <a>GrabOne</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Terms & Returns</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Gift Cards</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles.footer_header_list}>My Account</h2>
          <ul className={styles.footer_list}>
            <li>
              <a>My Account</a>
            </li>
            <li>
              <a>My Cart</a>
            </li>
            <li>
              <a>My Coupons</a>
            </li>
            <li>
              <a>My Coupons</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles.footer_header_list}>Merchants</h2>
          <ul className={styles.footer_list}>
            <li>
              <a>Run a Deal</a>
            </li>
            <li>
              <a>Merchant Centre</a>
            </li>
          </ul>
        </div>
        <div className={styles.news_letter}>
          <h2 className={styles.footer_header_list}>Newsletter Signup</h2>
          <h5 className={styles.footer_sub_header_list}>
            Sign up for our daily emails and we'll send you all the best deals,
            tailored for you.
          </h5>
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
      </div>
      <h4 className={styles.copy_right_container}>
        <span className={styles.copy_right_text}>Privacy Policy</span> © 2022
        GrabOne Limited
      </h4>
    </footer>
  );
}

export default Footer;
