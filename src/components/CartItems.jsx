import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlices";
import { toast } from "react-hot-toast";

function CartItems({ item, itemIndex }) {
  console.log(item)
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Removed From Cart");
  };
  return (
    <div className="flex flex-col border-b-2 border-x-black">
      <div className="flex flex-row gap-10">
        <div className="h-[180px]">
          <img src={item.image} alt="itemImage" className="h-full" />
        </div>

        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left ">
            {item.title}
          </h1>
          <h1 className=" w-40 text-gray-400 font-normal text-[10px] text-left">
            {item.description.split(" ").splice(0,10).join(" ")}
          </h1>
          <div className="flex justify-between">
            <div>
              <p className="text-green-700">${item.price}</p>
            </div>
            <div
              className="text-red-700 border-red-300 rounded-full cursor-pointer"
              onClick={removeFromCart}
            >
              <AiFillDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
