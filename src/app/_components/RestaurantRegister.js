import React from "react";

function RestaurantRegister() {
  return (
    <div>
      {/* form for signing up the user! */}
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
        <input
          className="input-field"
          type="password"
          placeholder="ReEnter the password"
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter the Restaurant Name"
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter the City Name"
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter full address of the Restaurant"
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Phone Number of the Restaurant"
        />
      </div>
      <div className="input-wrapper">
        <button className="button">Login</button>
      </div>
    </div>
  );
}

export default RestaurantRegister;
