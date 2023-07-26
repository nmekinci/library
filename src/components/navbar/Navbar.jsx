import { Link } from "react-router-dom";
import NavBarStyle from "./Navbar.style";

const Navbar = () => {
  return (
    <>
      <NavBarStyle>
        <h2>Library</h2>
        <div className="links">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/register">Register</Link>
          <Link className="link" to="/login">Login</Link>
        </div>
      </NavBarStyle>
    </>
  );
};

export default Navbar;
