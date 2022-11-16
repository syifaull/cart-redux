import React from "react";
import CartCard from "./CartCard";

const Cart = () => {
  return (
    <div className="container">
      <h3 className="text-center">Cart</h3>
      <div className="px-5 py-3 border rounded">
        <table className="w-100 ">
          <tr className="border-bottom">
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <CartCard />
        </table>
      </div>
      <div className="d-flex justify-content-end">
        <div className="border rounded mt-5 ">
          <p>Total : 5000</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
