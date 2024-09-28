import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="settings">settings</Link> <Link to="profile">profile</Link>
      Dashboard
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
