import React from "react";
import { Card, Button } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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
    id: 0,
    image: mensshoes1,
    description: "Men's Shoe",
    price: "$29.99",
  },
  {
    id: 1,
    image: womenshoes1,
    description: "Women's Shoe",
    price: "$29.99",
  },
  {
    id: 2,
    image: kidsshoes1,
    description: "Kids Shoe",
    price: "$29.99",
  },
  {
    id: 3,
    image: mensshoes2,
    description: "Men's Shoe",
    price: "$29.99",
  },
  {
    id: 4,
    image: womenshoes2,
    description: "Women's Shoe",
    price: "$29.99",
  },
  {
    id: 5,
    image: kidsshoes2,
    description: "Kids Shoe",
    price: "$29.99",
  },
  {
    id: 6,
    image: mensshoes3,
    description: "Men's Shoe",
    price: "$29.99",
  },
  {
    id: 7,
    image: womenshoes3,
    description: "Women's Shoe",
    price: "$29.99",
  },
  {
    id: 8,
    image: kidsshoes3,
    description: "Kids Shoe",
    price: "$29.99",
  },
];

const Store = () => {
  return (
    <>
      <div className="store">
        {shoes.map((products, index) => (
          <li key={index}>
            <Card style={{ width: "22rem" }}>
              <Card.Img
                variant="top"
                src={products.image}
                alt={products.description}
              />
              <Card.Body>
                <Card.Title>
                  <Link to={`/store/${products.id}`}>
                    <h3>{products.description}</h3>
                  </Link>
                </Card.Title>
                <Card.Text>
                  <h3>
                    Price: <span>{products.price}</span>
                  </h3>
                  <p>{products.descrip}</p>
                </Card.Text>
                <Button variant="primary">ADD TO CARD</Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Store;
