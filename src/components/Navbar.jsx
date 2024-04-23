import { useState } from "react";
import logo from "../../public/pizza.png";
import Login from "./Login";

import SignUp from "./SignUp";

function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  function handelShowModal() {
    if (showSignUp === false) {
      setShowSignUp(true);
    } else {
      setShowSignUp(false);
    }
  }

  function handelShowLogin() {
    if (showLogin === false) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  }
  return (
    <div className="nav-bar w-fuul h-20 bg-slate-800 flex justify-around items-center">
      <div className="logo w-1/2 h-20 flex items-center gap-4 md:gap-8">
        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
        <h1 className="text-xl font-normal md:font-bold md:text-2xl text-yellow-50">
          Recipe
        </h1>
      </div>
      <div className="singup flex gap-4 md:gap-6 items-center">
        <button
          className="border-2 border-orange-700 p-2 text-yellow-50 rounded-lg hover:bg-orange-400"
          onClick={handelShowModal}
        >
          SignUp
        </button>
        <button
          className="border-2 border-orange-700 p-2 text-yellow-50 rounded-lg hover:bg-orange-400"
          onClick={handelShowLogin}
        >
          Login
        </button>
      </div>

      {showSignUp && <SignUp onCloseSignup={handelShowModal} />}
      {showLogin && <Login onCloseLogin={handelShowLogin} />}
    </div>
  );
}

export default Navbar;
