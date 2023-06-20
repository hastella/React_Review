import React from "react";
import Avatar from "./Avatar";

export default function Profile({ imageUrl, isNew, name }) {
  return (
    <div className="profile">
      <Avatar imageUrl={imageUrl} />
      {isNew && <span>New</span>}
      <span>{name}</span>
    </div>
  );
}
