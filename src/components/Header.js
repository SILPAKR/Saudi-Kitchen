import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div>
      <header className="flex justify-between  shadow-xl ">
        <div className="line-clamp-4">
          <img src={LOGO_URL} alt="logo" className="w-30  " />
          <div className="text-xl mb-4 font-bold ml-4">
            Saudi <span className="text-red-600 font-bold">Kitchen</span>
          </div>
        </div>
        <nav className="">
          <ul
            className="flex
         justify-between items-center m-14"
          >
            <li>Online Status :{onlineStatus ? "✅" : "🛑"}</li>
            <Link to="/">
              <li className="p-2 font-bold text-xl hover:text-red-600 cursor-pointer">
                Home
              </li>
            </Link>

            <Link to="/about">
              <li className="p-2 font-bold text-xl  hover:text-red-600 cursor-pointer">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="p-2 font-bold text-xl  hover:text-red-600 cursor-pointer">
                Contact
              </li>
            </Link>

            <Link to="/grocery">
              <li className="p-2 font-bold text-xl  hover:text-red-600 cursor-pointer">
                Grocery
              </li>
            </Link>
            <Link
              to="/cart"
              className="relative  font-bold text-xl  hover:text-red-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              {/* Badge */}
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <li
              className="p-3 font-bold text-xl border rounded-full hover:bg-red-600 hover:text-white border-white cursor-pointer  "
              onClick={() =>
                btnLogin === "Login"
                  ? setBtnLogin("Logout")
                  : setBtnLogin("Login")
              }
            >
              {btnLogin}
            </li>
            <Link>
              <li className="p-2 font-bold text-xl  hover:text-red-600 cursor-pointer">
                {loggedInUser}
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
