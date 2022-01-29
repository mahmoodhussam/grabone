import React from "react";
import Card from "./Card";
import DiscoverNav from "./DiscoverNav";
import fruit from "../assests/images/fruit.jpg";
import styles from "../styles/DiscoverSection.module.css";
function DiscoverSection() {
  return (
    <section className={styles.container}>
      <DiscoverNav />
      <Card
        image={fruit}
        title="HelloFresh Special Offer"
        subTitle="HelloFresh"
        city="Rosedale"
        numOfBought={49}
        price={43.93}
        prevPrice={93.93}
        badge="FREE DELIVERY"
        description="HelloFresh Special Offer - Up to $50 OFF Your First Box, $80 OFF Your First Two Boxes, or $100 OFF Your First Four Boxes - Your Choice of Meat & Veggie, Veggie or Family-Friendly Recipes Available"
        containerWidth={"33.33%"}
        imageHeight={"350px"}
      />
      <Card
        image={fruit}
        title="HelloFresh Special Offer"
        subTitle="HelloFresh"
        city="Rosedale"
        numOfBought={49}
        price={43.93}
        prevPrice={93.93}
        badge="FREE DELIVERY"
        description="HelloFresh Special Offer - Up to $50 OFF Your First Box, $80 OFF Your First Two Boxes, or $100 OFF Your First Four Boxes - Your Choice of Meat & Veggie, Veggie or Family-Friendly Recipes Available"
      />
    </section>
  );
}

export default DiscoverSection;
