import React from "react";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.root}>
      <button type="button">Chat</button>
      <button type="button">Settings</button>
    </div>
  );
};

export default Navbar;
