import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import SecondaryNav from "../components/SecondaryNav";
import collection from "../assests/images/collection_card.jpg";
import DiscoverNav from "../components/DiscoverNav";
import CollectionCard from "../components/CollectionCard";
import EmailBox from "../components/EmailBox";
import Footer from "../components/Footer";
import DiscoverSection from "../components/DiscoverSection";
import CardSection from "../components/CardSection";
import sport from "../assests/images/fit.jpg";
import sea from "../assests/images/sea.jpg";
import store from "../assests/images/store.jpg";
import food from "../assests/images/food.jpg";
import house from "../assests/images/house.jpg";
import fitness from "../assests/images/fitness.jpg";
import car from "../assests/images/car.jpg";
const featuredCards = [
  <Card
    image={sport}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={sport}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={sport}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={sport}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
];
const collectionsCards = [
  <CollectionCard image={collection} title="Free Shipping" />,
  <CollectionCard image={collection} title="Free Shipping" />,
  <CollectionCard image={collection} title="Free Shipping" />,
  <CollectionCard image={collection} title="Free Shipping" />,
];
const activitiesCards = [
  <Card
    image={sea}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={sea}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={sea}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={sea}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
];
const storeCards = [
  <Card
    image={store}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={store}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={store}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={store}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
];
const foodCards = [
  <Card
    image={food}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={food}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={food}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={food}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
];
const houseCards = [
  <Card
    image={house}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={house}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={house}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={house}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
];
const fitnessCards = [
  <Card
    image={fitness}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={fitness}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={fitness}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={fitness}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
];
const automotiveCards = [
  <Card
    image={car}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={car}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={car}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
  <Card
    image={car}
    title="HelloFresh Special Offer"
    subTitle="HelloFresh"
    city="Rosedale"
    numOfBought={49}
    price={43.93}
    prevPrice={93.93}
    badge="FREE DELIVERY"
    description="Treadmill Range - Three Options Available"
    containerWidth={"25%"}
    imageHeight={"200px"}
  />,
];
function Home() {
  return (
    <>
      <Header />
      <SecondaryNav />
      <HeaderImage />
      <DiscoverSection />
      <EmailBox />
      <CardSection title="Featured Auckland deals" cards={featuredCards} />
      <CardSection title="Collections" cards={collectionsCards} />
      <CardSection
        title="Activities, Events & Outdoors "
        cards={activitiesCards}
      />
      <CardSection title="Collections" cards={storeCards} />
      <CardSection title="Restaurants, Bars, Cafes" cards={foodCards} />
      <CardSection title="House & Garden" cards={houseCards} />
      <CardSection title="Fitness & Sports " cards={fitnessCards} />
      <CardSection title="Automotive" cards={automotiveCards} />
      <Footer />
    </>
  );
}

export default Home;
