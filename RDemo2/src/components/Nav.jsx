import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link> <Link to="/">Homepage</Link>{" "}
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Nav;
