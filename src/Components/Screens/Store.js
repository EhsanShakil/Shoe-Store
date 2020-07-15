import React from "react";
import { Card, Button } from "react-bootstrap";
import Footer from "../Screens/Footer";
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

const Store = () => {
  return (
    <>
      <h1 className="productHeading">Store</h1>
      <div className="store">
        {shoes.map((products, index) => (
          <li>
            <Card style={{ width: "22rem" }}>
              <Link to={id}>
                <Card.Img variant="top" src={products.image} />
                <Card.Body>
                  <Card.Title>
                    <h3>{products.description}</h3>
                  </Card.Title>
                  <Card.Text>
                    <h3>
                      Price: <span>{products.price}</span>
                    </h3>
                    <p>{products.descrip}</p>
                  </Card.Text>
                  <Button variant="primary">ADD TO CARD</Button>
                </Card.Body>
              </Link>
            </Card>
          </li>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Store;
