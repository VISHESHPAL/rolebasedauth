import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RoleRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RoleRoute;
