import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, decreaseCart, removeFromCart } from "../features/CartSlice";
import CartCard from "./CartCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item));
  }

  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  }

  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  }

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
                  <tr key= {item.id}>
                    <CartCard
                    src = {item.image}
                    alt={item.name}
                    name={item.name}
                    price={item.price}
                    quantity={item.cartQuantity}
                    handleRemoveCart = {() => handleRemoveCart(item)}
                    handleDecreaseCart = {() => handleDecreaseCart(item)}
                    handleIncreaseCart = {() => handleIncreaseCart(item)}/>
                  </tr>
                )
              })}
            </table>
          </div>
          <div className="d-flex justify-content-between mt-5 ">
            <div>
            <button>clear cart</button>
            </div>
            <div className="border rounded ">
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
