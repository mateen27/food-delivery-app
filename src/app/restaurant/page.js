"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantRegister from "../_components/RestaurantRegister";

const Restaurant = () => {
  // state management
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <h1>
          {login ? "Login to your Account" : "Register your Restaurant Account"}
        </h1>
        {login ? <RestaurantLogin /> : <RestaurantRegister />}
        <div>
          <button className="button-login" onClick={() => setLogin(!login)}>
            {login
              ? "Don't have an Account? Sign up now!"
              : "Already have an Account? Login Now!"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
