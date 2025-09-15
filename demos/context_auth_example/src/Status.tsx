import React from "react";
import { useAuth } from "./AuthContext";

const Status: React.FC = () => {
  const { isLoggedIn } = useAuth();
  return <h2>{isLoggedIn ? "You are logged in!" : "You are logged out."}</h2>;
};

export default Status;
