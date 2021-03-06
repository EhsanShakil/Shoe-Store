import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const mensshoes1 = require("../../Slider-Images/1.png");
const mensshoes2 = require("../../Slider-Images/4.png");
const mensshoes3 = require("../../Slider-Images/7.png");

const womenshoes1 = require("../../Slider-Images/2.png");
const womenshoes2 = require("../../Slider-Images/5.png");
const womenshoes3 = require("../../Slider-Images/8.png");

const kidsshoes1 = require("../../Slider-Images/3.png");
const kidsshoes2 = require("../../Slider-Images/6.png");
const kidsshoes3 = require("../../Slider-Images/9.png");

const shoes = [
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
];

const StoreDetails = () => {
  const { id } = useParams();
  let shoe = shoes[id];
  console.log(shoe);
  return (
    <div className="productDetail">
      <div>
        <img className="productImage" src={shoe.image} alt={shoe.description} />
      </div>
      <div className="productDescription">
        <h1>{shoe.description}</h1>
        <h1>{shoe.price}</h1>
        <Button variant="primary">ADD TO CARD</Button>
      </div>
    </div>
  );
};

export default StoreDetails;
