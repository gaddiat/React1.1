import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const { name } = location.state || {};
  return <div>Profile of {name}</div>;
};

export default Profile;
