import { useState } from "react";
import { LOGO_URL } from "../utils/contants";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
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
            <li className="p-2 font-bold text-xl hover:text-red-600 cursor-pointer">
              Home
            </li>
            <li className="p-2 font-bold text-xl  hover:text-red-600 cursor-pointer">
              About
            </li>
            <li className="p-2 font-bold text-xl  hover:text-red-600 cursor-pointer">
              Contact
            </li>
            <li className="p-2 font-bold text-xl  hover:text-red-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </li>
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
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
