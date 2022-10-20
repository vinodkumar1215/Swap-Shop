import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import WishList from "./WishList";
import { BsHeart } from "react-icons/bs";

const NavBar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Link className="link" to="/products" style={{ margin: "20px" }}>
              Products
            </Link>
            <Link className="link" to="/users">
              Users
            </Link>
          </div>
          <Link className="link" to="/ProductList" style={{ float: "right" }}>
            <BsHeart />
          </Link>
          {/* <Link className="link" to="/wishlist">
            WishList
          </Link> */}
          {/* <Link to="/signin">
          <Button sx={{ marginLeft: "auto" }} variant="contained">
            {" "}
            Login
          </Button>
          </Link>
          <Button sx={{ marginLeft: "10px" }} variant="contained">
            {" "}
            Signup
          </Button> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
