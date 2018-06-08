// FriendCard component
import React from "react";
import "./FriendCard.css";

// Pass the image into each card
const FriendCard = props => (
  <div className="card col-sm-6 col-md-4 col-lg-3 col-xl-3" onClick={props.imgClick}>
    <div className="img-container">
      <img id={props.name} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
