import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlices";
import { toast } from "react-hot-toast";
import { changeQuantity } from "../redux/Slices/CartSlices";

function CartItems({ item, itemIndex }) {
  console.log(item);
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Removed From Cart");
  };

  const cartQtyHandler = (e) => {
    dispatch(changeQuantity({ id: item.id, quantity: e.target.value }));
  };

  return (
    <div className="flex flex-col border-b-2 border-x-black ">
      <div className="flex flex-row gap-10">
        <div className="h-[180px]">
          <img src={item.image} alt="itemImage" className="h-full" />
        </div>

        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left ">
            {item.title}
          </h1>
          <h1 className=" w-40 text-gray-400 font-normal text-[10px] text-left">
            {item.description.split(" ").splice(0, 10).join(" ")}
          </h1>
          <div className="flex justify-between">
            <div>
              <p className="text-green-700">${item.price}</p>
            </div>
            <div
              className="text-red-700 border-red-300 rounded-full cursor-pointer text-2xl"
              onClick={removeFromCart} 
            >
              <AiFillDelete/>
              
            </div>
          </div>
          <div>
            <div className="mt-6 mb-2 text-sm drop-shadow-2xl ">
              <label className="m-2 bg-gray-400 rounded-l-lg" for="quantity">
                QTY
              </label>
              <input
                onChange={cartQtyHandler}
                value={item.quantity}
                type="number"
                min="1"
                max="100"
                placeholder="Qty"
                className="w-8 rounded-r-lg  outline-offset-2 drop-shadow-2xl outline-none"
                id="cartQuantity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
