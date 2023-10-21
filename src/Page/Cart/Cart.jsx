import { useState, useEffect, useContext } from "react";
import Navbar from "../Home/Navbar/Navbar";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`https://back-end-sand-tau.vercel.app/cart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, [user]);

  const handleDelete = (itemId) => {
    fetch(`https://back-end-sand-tau.vercel.app/cart/${itemId}`, {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => {
    if (data.deletedCount === 1) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
      }).then((result) => {
        if (result.isConfirmed) {
          setCartItems(cartItems.filter((item) => item._id !== itemId));
          console.log("Deleted item:", data);
        }
      });
    } else {
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
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-danger"
              >
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
