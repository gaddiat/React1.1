import { useContext } from "react";
import { userContext } from "../Context/UserContext";

const Checkout = () => {
  const { user } = useContext(userContext);
  return <div>Checkout - {user}</div>;
};

export default Checkout;
