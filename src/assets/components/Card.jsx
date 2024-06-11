import React from "react";
import "../styles/card.css";
const Card = ({ item, handleClick }) => {
  const { img, title, author, price } = item;
  return (
    <div className="card">
      <div className="image-box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price -- {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
