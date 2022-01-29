import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import { FiMail } from "react-icons/fi";
import { BiUser, BiDownArrow } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function Header() {
  const [userOpen, setUserOpen] = useState(false);
  const [location, setLocation] = useState(false);
  return (
    <>
      {(userOpen || location) && (
        <div
          className={styles.overlay}
          onClick={() => {
            setUserOpen(false);
            setLocation(false);
          }}
        ></div>
      )}
      <header className={styles.header}>
        <div className={styles.header_logo_container}>
          <h1 className={styles.header_logo_text}>GrabOne</h1>
        </div>
        <div className={styles.header_right_side_container}>
          <div className={styles.header_mail_container}>
            <FiMail color="#fff" size={30} />
            <h5 className={styles.header_right_side_text}>subscribe</h5>
          </div>
          <div
            className={styles.header_user_container}
            onClick={() => {
              setUserOpen(!userOpen);
              setLocation(false);
            }}
          >
            <div
              className={
                !userOpen
                  ? styles.header_user_item_without_arrow
                  : styles.header_user_item
              }
            >
              <BiUser color="#fff" size={30} />
              <MdOutlineKeyboardArrowDown color="#fff" size={20} />
            </div>

            {userOpen && (
              <div className={styles.dropdown_user_content}>
                <a href="#">My Account</a>
                <a href="#">Gifts</a>
                <a href="#">Profile</a>
                <a href="#">My Subscriptions</a>
                <a href="#">My Purchases</a>
                <a href="#">Login</a>
              </div>
            )}
          </div>
          <div className={styles.header_cart_container}>
            <IoCartOutline color="#fff" size={30} />
          </div>
          <div className={styles.header_heart_container}>
            <BsHeart color="#fff" size={30} />
          </div>

          <div
            className={styles.header_location_container}
            onClick={() => {
              setLocation(!location);
              setUserOpen(false);
            }}
          >
            <div
              className={
                location
                  ? styles.header_location_item
                  : styles.header_location_item_arrow
              }
            >
              <GoLocation color="#fff" size={30} />
              <button className={styles.dropbtn}>Auckland</button>
              <MdOutlineKeyboardArrowDown
                color="#fff"
                size={20}
                style={{ marginLeft: -15 }}
              />
            </div>

            <div className={styles.dropdown}>
              {location && (
                <div className={styles.dropdown_content}>
                  <a href="#">Auckland</a>
                  <a href="#">Waikato</a>
                  <a href="#">Wellington</a>
                  <a href="#">Northland</a>
                  <a href="#">Manawatu - Wanganui</a>
                  <a href="#">Tauranga</a>
                  <a href="#">Rotorua - Taupo</a>
                  <a href="#">Hawkes Bay</a>
                  <a href="#">Christchurch</a>
                  <a href="#">Taranaki</a>
                  <a href="#">Nelson - Marlborough</a>
                  <a href="#">Queenstown - Wanaka</a>
                  <a href="#">Dunedin - Invercargill</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
