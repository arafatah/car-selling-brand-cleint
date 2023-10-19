// Import necessary components and libraries
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Cart() {
  const { email } = useParams();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart data from your local Express server
    fetch(`http://localhost:5000/cart/${email}`)
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.error("Error fetching cart data:", error));
  }, [email]);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>{item.name} - Price: {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
