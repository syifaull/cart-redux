import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container">
      <h3 className="text-center">Cart</h3>
      {cart.cartItems.length === 0 ? (
        <div className="text-center">
          <p>your card is empty</p>
          <div>
            <Link to="/" />
            <p>
              <i class="bi bi-arrow-left"></i>start shopping
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="px-5 py-3 border rounded">
            <table className="w-100 ">
              <tr className="border-bottom">
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              {cart.cartItems?.map((item) => {
                return(
                  <div key= {item.id}>
                    <CartCard src = {item.image} alt={item.name} name={item.name} price={item.price} quantity={item.cartQuantity}/>
                  </div>
                )
              })}
            </table>
          </div>
          <div className="d-flex justify-content-between">
            <button>clear cart</button>
            <div className="border rounded mt-5 ">
              <p>Total : ${cart.cartTotalAmount}</p>
              <button>Checkout</button>
              <div>
            <Link to="/" />
            <p>
              <i class="bi bi-arrow-left"></i>continue shopping
            </p>
          </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
