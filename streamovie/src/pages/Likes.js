import React from "react";
import Navigation from "../components/Navigation";

const Likes = () => {
  return (
    <div>
      <Navigation />
      <h1>LIKES</h1>
      <div className="likes">
        <div className="likes-container">
          <h2>{localStorage.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Likes;
