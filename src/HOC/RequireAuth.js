import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
