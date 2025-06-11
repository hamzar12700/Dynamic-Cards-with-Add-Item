import React from "react";

const Cards = ({ title, desc, image, price, status }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3 style={{ color : 'yellow' }}>{title}</h3>
      <p>{desc}</p>
      <p>Price: Rs {price}</p>
      <p>Status: <span style={{ backgroundColor : status === 'available' ? 'green' : 'red' , color : 'white' , padding : '1px 10px' , borderRadius : '10px' }}>{status}</span></p>
    </div>
  );
};

export default Cards;
