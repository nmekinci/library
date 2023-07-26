import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>Library</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Navbar;
