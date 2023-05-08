import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItems from "../components/CartItems";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex flex-row gap-11 ">
          <div>
            {cart.map((item, index) => {
              return (
                <CartItems key={item.id} item={item} itemIndex={item.index} />
              );
            })}
          </div>
          <div className="flex flex-col">
            <div>
              <div className=" font-semibold text-[12px] text-green-700 uppercase text-left">
                your Cart
              </div>
              <div>SUMMARY</div>
              <p>
                <span>Total items: ${cart.length}</span>
              </p>
            </div>
            <div>
              <p>Total Amount : {totalAmount}</p>
              <button>CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center m-auto">
          <h1>Cart not found </h1>
          <NavLink to="/">
            <button className=" text-center justify-center mt-0 ml-0 m-auto border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase bg-green-700 text-white trasition duration-300 ease-in">
              SHOP NOW
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
