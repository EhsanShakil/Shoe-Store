import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const shoes = [
  {
    id: 1,
    name: "VALOUR BLUE",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-8030-_2_360x.jpg?v=1591259697",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 2,
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-2030-_2_360x.jpg?v=1591259658",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 3,
    name: "RACER BLUE",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9266-b_360x.jpg?v=1585297785",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 4,
    name: "RACER BLUE",
    img:
      "https://www.shoecarnival.com/dw/image/v2/BBSZ_PRD/on/demandware.static/-/Sites-scvl-master-catalog/default/dw7b241007/103543_205154_1.jpg?sw=700&sh=593&sm=fit",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 5,
    name: "Running Shoe",
    img: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 6,
    name: "Running Shoe",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/428-9025-_1_360x.jpg?v=1591258447",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },

  {
    id: 7,
    name: "VALOUR BLUE",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/853-6214-_2_360x.jpg?v=1591878784",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 8,
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/881-2175-_2_360x.jpg?v=1591879104",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 9,
    name: "RACER BLUE",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-1251-c_360x.JPG?v=1573496007",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 10,
    name: "RACER BLUE",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9255-b_360x.jpg?v=1574316425",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 11,
    name: "Running Shoe",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/859-9201-_2_360x.jpg?v=1592562290",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
  {
    id: 12,
    name: "Running Shoe",
    img:
      "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/428-9025-_1_360x.jpg?v=1591258447",
    descrip:
      "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
    Rs: "9.99",
  },
];

const Store = () => {
  let { id } = useParams();
  let shoe = shoes[id];
  return (
    <>
      <h1>Store</h1>
      <div className="store">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={shoe.img} />
          <Card.Body>
            <Card.Title>
              <h3>{shoe.name}</h3>
            </Card.Title>
            <Card.Text>
              <h3>
                Price: <span>{shoe.Rs}</span>
              </h3>
              <p>{shoe.descrip}</p>
            </Card.Text>
            <Button variant="primary">ADD TO CARD</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Store;
