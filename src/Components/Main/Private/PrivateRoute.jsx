/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../../Loading";
import { AuthContext } from "./../../../Firebase/Providers/AuthProvider";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
