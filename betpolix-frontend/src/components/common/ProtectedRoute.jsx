import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("access_token");

  if (!token) {
    // Si no hay token, redirige al Home
    return <Navigate to="/" replace />;
  }

  return children;
}
