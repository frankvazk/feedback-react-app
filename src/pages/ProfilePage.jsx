import React from "react";
import { Navigate, useNavigate, Outlet } from "react-router-dom";
import Card from "../components/shared/Card";

const ProfilePage = () => {
  const navigate = useNavigate();
  const canAccess = true;
  if (!canAccess) {
    /**
     * There's a component called Navigate
     * which allow us to redirect the user
     * in case they try to access
     * routes are not allowed or need
     * authorization to get in
     */
    return <Navigate to="/"></Navigate>;
  }

  /**
   * There's also a Hook function
   * which allow us do the navigation
   * programatically
   */
  const redirectToHome = () => navigate("/");
  return (
    <Card>
      <h2>This is the profile page</h2>
      <Outlet />
      <button className="btn btn-primary text-center" onClick={redirectToHome}>
        Redirect to Home
      </button>
    </Card>
  );
};

export default ProfilePage;
