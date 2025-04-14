import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { isLoading } = useAuth();
  const role = JSON.parse(localStorage.getItem("user"))?.role;

  if (isLoading) {
    // You could render a spinner or skeleton loader here
    return <div>Loading...</div>;
  }

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  // Assuming user.role is a string (as stored from login)
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
