import { FaCartPlus } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  const [totalItem, settotalItem] = useState(0);

  useEffect(() => {
    settotalItem(cart.reduce((acc, curr) => acc + (parseInt(curr.quantity)), 0));
  }, [cart]);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-600 mx-auto ">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="./cart.png"
              alt="navLogo"
              width={"90px"}
              height={"20px"}
              className="h-12 rounded-lg drop-shadow-2xl"
            />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 ">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/Cart">
            <div className="relative ">
              <FaCartPlus className="text-2xl" />

              {cart.length > 0 && (
                <span className="absolute -top-0 -right-1 bg-green-600 text-xs w-3 h-3 flex justify-center items-center animate-bounce rounded-full text-white ">
                  {+totalItem}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
