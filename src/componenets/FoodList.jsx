import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function FoodList({ food }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("normal");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="a">
      <div onClick={handleShow}>
        <h1>{food.name}</h1>
        <img
          src={food.image}
          alt=""
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100">
          <p>Variants</p>
          <select
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {food.variants.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div>
        <div className="flex-container"></div>
        <div className="m-1 w-10">
          <h1>Price : {food.price[0][variant] * quantity}</h1>
        </div>
        <div className="m-1 w-10">
          <button className="btn">Add To Cart</button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <img src={food.image} style={{height:'200px', width:'200px' }} />
         <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
