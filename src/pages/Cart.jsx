import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItems from "../components/CartItems";
import { toast } from "react-hot-toast";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItem, settotalItem] = useState(0)

  const checkOutHandler=()=>{
      toast.success("proceed to payment")
  }

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0));
    settotalItem(cart.reduce((acc, curr) => acc + (parseInt(curr.quantity)), 0))
  }, [cart]);

  return (
    <div className="mt-6 ml-6 ">
      {cart.length > 0 ? (
        <div className="flex flex-row gap-11 ">
          <div>
            {cart.map((item, index) => {
              return (
                <CartItems key={item.id} item={item} itemIndex={item.index} />
              );
            })}
          </div>
          <div className="flex flex-col ">
            <div>
              <div className=" font-semibold text-[12px] text-green-700 uppercase text-left">
                your Cart
              </div>
              <div className=" font-semibold text-lg text-green-700 uppercase text-left">SUMMARY</div>
              <p>
                <span className="font-semibold">Total items :  {(totalItem)}</span>
              </p>
            </div>
            <div>
              <p className="font-semibold">Total Amount : ${parseFloat(totalAmount).toFixed(2)}</p>
              <button className="text-2xl bg-green-600 rounded-lg p-1 " onClick={checkOutHandler}>CheckOut Now</button>
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
