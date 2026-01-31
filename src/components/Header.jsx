import { logo } from "../utills/Constant";

const Header = ()=>{
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
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

export default Header;
