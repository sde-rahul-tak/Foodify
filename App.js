import React from "react";
import { createRoot } from "react-dom/client";

const Header = ()=>{
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"></img>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Cart</li>
          <li>Login</li>
          <li>Register</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  )
}

const Res_Card = ()=>{
  return (
    <div className="card">
      <div className="img-container">
        <img className="img" src="https://t4.ftcdn.net/jpg/04/36/36/57/240_F_436365754_z3i5Es0sFmZuLY6GZIzdiU01v9HqpGZe.jpg" alt="" />
      </div>
      <h3>Restaurant Name</h3>
      <h5>cuisins</h5>
      <h5>Rating in satr</h5>
      <h5>Delivery time</h5>
    </div>
  )
}

const Body = ()=>{
  return (
    <div className="Body">
      <div className="search">
        <h4>Search</h4>
      </div>
      <div className="res-container">
        <Res_Card/>
      </div>
    </div>    
  )
}

const Applayout = ()=>{
  return (
    <div>      
      <Header/>
      <Body/>
    </div>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(<Applayout/>);
