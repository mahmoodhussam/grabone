import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "../styles/SecondaryNav.module.css";
function SecondaryNav() {
  const [categoriesNavOpen, setCategoriesNavOpen] = useState(false);
  const [categoriesItems, setCategoriesItems] = useState([
    {
      title: "Activities, Events & Outdoors",
      items: [
        {
          title: "Adventure & Outdoors",
          description: "Bungy Jumping, Camping, Horse Riding ...",
        },
        {
          title: "Fun & Leisure",
          description: "Amusement Parks, Bowling, Bus ...",
        },
        {
          title: "Kids Activities",
          description: "Kid's Camps, Kid's Classes ...",
        },
      ],
    },
    {
      title: "Automotive",
      items: [
        {
          title: "Automotive Parts & Accessories",
          description: "Automotive Accessories, Car Parts...",
        },
        {
          title: "Car Electronics",
          description: "Car Alarms, Car Amplifiers, Car GPS ...",
        },
        {
          title: "Wash, Repairs & Maintenance",
          description: "Automotive Servicing, Car Wash...",
        },
      ],
    },
    {
      title: "Baby, Kids & Toys",
      items: [
        {
          title: "Baby Essentials ",
          description: "Baby Feeding, Baby Gates, Baby Health",
        },
        {
          title: "Baby Gear",
          description: "Car Alarms, Baby Gates, Baby Health ...",
        },
        {
          title: "Clothing & Accessories - Boys",
          description: "Boys Accessories, Boys Bags, Boys Bodysuits ...",
        },
        {
          title: "Toys",
          description: "Action Figures & Accessories, Bikes ...",
        },
      ],
    },
  ]);
  const [categoryItems, setCategoryItems] = useState(categoriesItems[0]);
  return (
    <div className={styles.wrapper}>
      {categoriesNavOpen && (
        <div
          className={styles.categories_menu_overlay}
          onClick={() => {
            setCategoriesNavOpen(false);
          }}
        ></div>
      )}
      {categoriesNavOpen && (
        <div className={styles.dropdown_content}>
          <div className={styles.dropdown_content_categories}>
            {categoriesItems.map((item) => (
              <div
                className={styles.dropdown_content_categories_title}
                onClick={() => {
                  setCategoryItems(item);
                }}
              >
                <a
                  className={`${
                    styles.dropdown_content_categories_title_text
                  } ${
                    item.title == categoryItems.title && styles.title_active
                  }`}
                >
                  {item.title}
                </a>
                <span
                  className={styles.dropdown_content_categories_title_arrow}
                >
                  {" > "}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.dropdown_content_category_items}>
            <span className={styles.dropdown_content_category_items_title}>
              {categoryItems.title}
            </span>
            {categoryItems.items.map((item) => (
              <>
                <div className={styles.dropdown_content_category_item}>
                  <p
                    className={styles.dropdown_content_category_item_sub_title}
                  >
                    {item.title}
                  </p>
                  <p
                    className={
                      styles.dropdown_content_category_item_sub_title_desc
                    }
                  >
                    {item.description}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
      <div className={styles.container}>
        <ul className={styles.secondary_left_side}>
          <li className={styles.secondary_left_side_item}>
            <div
              className={styles.secondary_left_side_item_sub_nav}
              onClick={() => {
                setCategoriesNavOpen(!categoriesNavOpen);
              }}
            >
              <span>Browse Categories</span>
              <MdOutlineKeyboardArrowDown
                color="#01b2ee"
                size={40}
                style={{ paddingTop: 5 }}
              />
            </div>
          </li>
          <li className={styles.secondary_left_side_item}>What's New</li>
          <li className={styles.secondary_left_side_item}>Trending</li>
          <li className={styles.secondary_left_side_item}>For You</li>
        </ul>
        <div className={styles.secondary_right_side}>
          <div className={styles.secondary_input_container}>
            <BsSearch color="#4F5864" size={25} />
            <input
              placeholder="Search GrabOne"
              className={styles.secondary_search_input}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondaryNav;
