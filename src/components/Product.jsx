// import {BsCartPlus} from "react-icons/fa"

import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlices";
import { useState } from "react";

function Product({ product }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    dispatch(add({ ...product, quantity }));
    toast.success("Item Add to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item Removed From Cart");
  };
  return (
    <div className="flex flex-col shadow-xl hover:shadow-2xl items-center w-70 justify-between hover:scale-110 trasition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl ">
      <div>
        <div>
          <p className="text-gray-700 font-semibold text-lg  text-left truncate w-40 mt-1">
            {product.title}
          </p>
        </div>

        <div>
          <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
            {product.description.split(" ").slice(0, 5).join(" ") + "..."}
          </div>
        </div>

        <div className="h-[180px]">
          <img src={product.image} alt="product" className="h-full" />
        </div>

        <div className="mt-6 mb-2  ">
          
          <div className="text-sm drop-shadow-2xl ">
            <label className="m-2  bg-gray-400 rounded-l-lg" for="quantity">QTY</label>
            <input
              type="number"
              onChange={(e) => setQuantity(+e.target.value)}
              value={quantity}
              min="1"
              max="100"
              placeholder="Qty"
              className=" w-8 rounded-r-lg  outline-offset-2 drop-shadow-2xl outline-none "
              id="Quantity"
            />
            <p className="text-xs">(Inclusive of all Taxes)</p>
          </div>
        </div>

        <div className="flex  justify-between gap-16">
          <div>
            <p className="text-green-600 font-semibold item-centre ">
              ${product.price}
            </p>
          </div>

          <div>
            {cart.some((item) => item.id === product.id) ? (
              <button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white trasition duration-300 ease-in"
                onClick={removeFromCart}
              >
                remove
              </button>
            ) : (
              <button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white trasition duration-300 ease-in"
                onClick={addToCart}
              >
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
