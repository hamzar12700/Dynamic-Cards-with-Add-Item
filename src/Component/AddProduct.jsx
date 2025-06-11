import React, { useState } from "react";

const AddProduct = ({ setAddProduct, addProduct }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      itemTitle: title,
      itemDesc: description,
      itemPrice: price,
      image: image ? URL.createObjectURL(image) : "",
      category: "Custom", // Default category
      status: "available" // Default status
    };
    
    setAddProduct([...addProduct, newProduct]);
    
    // Reset form
    setTitle("");
    setDescription("");
    setPrice("");
    setImage(null);
  };

  return (
    <div className="formContainer">
      <div className="formCard">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Item Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Item Title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Item Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Item Description"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput3">Item Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              id="formGroupExampleInput3"
              placeholder="Item Price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput4">Select Food Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control"
              id="formGroupExampleInput4"
              accept="image/*"
            />
          </div>
          <button
          onClick={(e)=>{
            submitHandler(e)
          }}
          
          type="submit" className="btn btn-primary">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;