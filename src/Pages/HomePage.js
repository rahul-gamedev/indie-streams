import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to={"/publish"}>Publish</Link>
    </div>
  );
}

export default HomePage;
