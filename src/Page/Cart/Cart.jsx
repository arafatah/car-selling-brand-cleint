import { useEffect, useState } from "react";
import Navbar from "../Home/Navbar/Navbar";

const Cart = ({ email }) => {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    // Fetch cart items based on the email
    fetch(`http://localhost:5000/cart/${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, [email]);
  

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div>
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item._id}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
