import React from "react";
import { Link } from "react-router-dom";

const RouteNotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default RouteNotFound;