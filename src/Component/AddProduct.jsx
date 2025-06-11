import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AddProduct = ({ addProduct, setAddProduct }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null);

const navigate = useNavigate();

  const categories = ["Biryani", "Kabab", "Mandi", "Haleem", "Karhai"];


  const handleSubmit = (e) => {
    e.preventDefault();

   if (title.trim() === "" || description.trim() === "" || price === "" || category === "" || !image) {
  alert("Please fill all the fields!");
  return;
}

    const newProduct = {
      title,
      description,
      price: Number(price),
      image: image ? URL.createObjectURL(image) : "",
      category: category,
      status: "available",
    };

    setAddProduct([...addProduct, newProduct]);

    setTitle("");
    setDescription("");
    setPrice("");
    setImage(null);
  };

  return (
    <div className="formContainer">
      <div className="formCard">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h4>Item Title</h4>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Item Title"
              required
            />
          </div>
          <div className="form-group">
            <h4>Item Description</h4>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              placeholder="Item Description"
              required
            />
          </div>
          <div className="form-group">
            <h4>Item Price</h4>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              placeholder="Item Price"
              required
            />
          </div>

<div className="form-group">
            <h4>Item Category</h4>
            
            <select value={category} onChange={(e)=>{
              setCategory(e.target.value)
            }}  name="" id="">
              <option value="">--</option>
              {categories.map((items , indx)=>(
                <option key={indx} value={items}>{items}</option>

              ))}
            </select>
          </div>

          <div className="form-group">
            <h4>Select Food Image</h4>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control"
              accept="image/*"
            />
          </div>

            <button type="submit" className="btn btn-primary">
            Add Item
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
