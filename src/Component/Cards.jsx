import React from "react";

const Cards = ({ title, desc, image, price, status , addProduct }) => {
  return (
    
      <>
      <div className="card">
        <img src={image} alt={title} />
        <h1>Title :{title}</h1>
        <h1>Description :{desc}</h1>
        <h2>Prize : {price}</h2>
        <h3>
          Status :
          <span
            style={{
              backgroundColor: status === "available" ? "green" : "red",
              color: "white",
            }}
          >
            {status}
          </span>
        </h3>
        </div>

        {addProduct.map((item,indx)=>{
            
            return   <div className="card">
        {/* <img src={image} alt={title} /> */}
        <h1>Title :{item.title}</h1>
        <h1>Description :{item.desc}</h1>
        <h2>Prize : {item.price}</h2>
        </div>
        })}
        </>
  );
};

export default Cards;
