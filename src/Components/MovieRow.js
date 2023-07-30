import React from "react";
import "./MovieRow.css";

function MovieRow({ children, Title }) {
  return (
    <div className="row">
      <h1 className="sub-heading">{Title}</h1>
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
}

export default MovieRow;
