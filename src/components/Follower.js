import React from "react";
import "./Follower.css";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <div className="follower">
      <img className="follower_img" src={avatar_url} alt={login} />
      <h4 className="follower_username">{login}</h4>
      <a href={html_url} target="_blank">
        View profile
      </a>
    </div>
  );
};

export default Follower;
