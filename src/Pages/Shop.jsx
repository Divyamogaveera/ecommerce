import React from "react";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/offers/offers";
import Popular from "../Components/Popular/popular";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default shop;
