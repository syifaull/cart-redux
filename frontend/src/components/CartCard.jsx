import React from "react";

const CartCard = (props) => {
  return (
    <>
      <td>
        <div className="d-flex">
          <img src={props.src} alt={props.name} style={{ width: "8rem" }} />
          <div>
            <p>{props.name}</p>
            <p>Rp. {props.price}</p>
            <i class="bi bi-trash" onClick={props.handleRemoveCart}></i>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex">
          <button onClick={props.handleDecreaseCart}>-</button>
          <p className="px-3">{props.quantity}</p>
          <button onClick={props.handleIncreaseCart}>+</button>
        </div>
      </td>
      <td>Rp. {props.quantity * props.price}</td>
    </>
  );
};

export default CartCard;
