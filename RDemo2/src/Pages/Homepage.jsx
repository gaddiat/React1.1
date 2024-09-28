import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard/profile", { state: { name } });
  }
  return (
    <div>
      Homepage
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Go to Profile page</button>
    </div>
  );
};

export default Homepage;
