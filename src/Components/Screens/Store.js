import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { GlobalContext } from "../GlobalContext/GlobalState";

const Store = () => {
  const image = require("../../Our-Products-Images/1.png");
  let [products, setProducts] = useContext(GlobalContext);
  return (
    <>
      <h1>Store</h1>
      <div className="store">
        {products.map((product, index) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>
                <h3>{product.description}</h3>
              </Card.Title>
              <Card.Text>
                <h3>
                  Price: <span>{product.price}</span>
                </h3>
              </Card.Text>
              <Button variant="primary">ADD TO CARD</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Store;
