import React from "react";

const CartCard = () => {
  return (
    <tr>
      <td>
        <div className="d-flex">
        <img
          src="https://cdn-images.farfetch-contents.com/19/01/47/80/19014780_41429205_300.jpg"
          style={{ width: "8rem" }}
        />
        <div>
        <p>Nama Barang</p>
        <p>Harga Barang</p>
        <i class="bi bi-trash"></i>
        </div>

        </div>
      </td>
      <td>
        <div className="d-flex">
          <button>-</button>
          <p className="px-3">3</p>
          <button>+</button>
        </div>
      </td>
      <td>subtotal</td>
    </tr>
  );
};

export default CartCard;
