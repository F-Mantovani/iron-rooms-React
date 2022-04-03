import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <nav>
      <h2>Iron Rooms</h2>
      <div>
        <NavLink to='/'> All Rooms</NavLink>
        {' '}
        <NavLink to="/"> My Rooms</NavLink>
        {' '}
        <NavLink to="/"> My Profile</NavLink>
      </div>
    </nav>
  );
};

export default index;
