import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const mensshoes1 = require("../../Slider-Images/1.png");
  const mensshoes2 = require("../../Slider-Images/4.png");
  const mensshoes3 = require("../../Slider-Images/7.png");

  const womenshoes1 = require("../../Slider-Images/2.png");
  const womenshoes2 = require("../../Slider-Images/5.png");
  const womenshoes3 = require("../../Slider-Images/8.png");

  const kidsshoes1 = require("../../Slider-Images/3.png");
  const kidsshoes2 = require("../../Slider-Images/6.png");
  const kidsshoes3 = require("../../Slider-Images/9.png");

  let [products, setProducts] = useState([
    {
      id: 1,
      image: mensshoes1,
      description: "Men's Shoe",
      price: "$29.99",
    },
    {
      id: 2,
      image: womenshoes1,
      description: "Women's Shoe",
      price: "$29.99",
    },
    {
      id: 3,
      image: kidsshoes1,
      description: "Kids Shoe",
      price: "$29.99",
    },
    {
      id: 4,
      image: mensshoes2,
      description: "Men's Shoe",
      price: "$29.99",
    },
    {
      id: 5,
      image: womenshoes2,
      description: "Women's Shoe",
      price: "$29.99",
    },
    {
      id: 6,
      image: kidsshoes2,
      description: "Kids Shoe",
      price: "$29.99",
    },
    {
      id: 7,
      image: mensshoes3,
      description: "Men's Shoe",
      price: "$29.99",
    },
    {
      id: 8,
      image: womenshoes3,
      description: "Women's Shoe",
      price: "$29.99",
    },
    {
      id: 9,
      image: kidsshoes3,
      description: "Kids Shoe",
      price: "$29.99",
    },
  ]);
  return (
    <GlobalContext.Provider value={[products, setProducts]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;