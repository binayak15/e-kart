import React from "react";
import "../styles/amazon.css";
import list from "./data";
import Card from "./Card";
const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Card item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
