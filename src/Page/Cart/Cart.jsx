import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar/Navbar";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(cartItems);
  useEffect(() => {
    // Fetch the cart items from your backend
    fetch("http://localhost:5000/cart")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const handleDelete = (itemId) => {
    fetch(`http://localhost:5000/cart/${itemId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.deleteCount > 0) {
          console.log("Deleted item:", data);
          setCartTotal(cartTotal.filter((item) => item._id !== itemId));} else {
          console.log("Item not found:", data);
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item._id} className="card">
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">${item.price}</p>
            <button onClick={() => handleDelete(item._id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
