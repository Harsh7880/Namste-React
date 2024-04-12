import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-between shadow-lg items-center">
      <div className="logo-conatiner">
        <img alt="logo" className="logo w-40" src={LOGO_URL}></img>
      </div>

        <ul className="flex mr-8">
          <li className="px-4 py-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 py-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 py-2">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4 py-2">
            <Link to={"/grocerey"}>Grocerey</Link>
          </li>
          <li className="px-4 py-2">
            <a href="#">Cart</a>
          </li>
          <button
            className="border px-4 py-0 rounded-lg cursor-pointer border-sky-500"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
    </div>
  );
};

export default Header;
