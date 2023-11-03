import React from "react";
import defaultPic from "../images/feed/defaultPic.jpeg";
function FriendsCard({ users }) {
  return (
    <div className="friends-card">
      <h2>Add to your feed</h2>
      {users.map((user, index) => {
        return (
          <div key={index} className="user-suggestion">
            <img src={defaultPic} alt="profile" />
            <div>
              <p>{user.fullName}</p>
              <button>+ follow</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FriendsCard;
