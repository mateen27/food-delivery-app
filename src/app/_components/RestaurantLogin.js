import React from "react";

function RestaurantLogin() {
  return (
    <>
        {/* forms for email and password fields */}
      <div className="input-wrapper">
        <input
          className="input-field"
          type="email"
          placeholder="Enter the email address"
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="password"
          placeholder="Enter the password"
        />
      </div>
      <div className="input-wrapper">
        <button className="button">Login</button>
      </div>
    </>
  );
}

export default RestaurantLogin;
