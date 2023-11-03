import React, { useContext } from "react";
import Header from "../components/Header";
import FooterRows from "../components/FooterRows";
import FooterList from "../components/FooterList";
import "../styles/profile.css";
import { Link } from "react-router-dom";
import redact from "../images/profile/redact.svg";
import FriendsCard from "../components/FriendsCard";
import { userListContext, userContext } from "../Context";
function Profile() {
  const { userList, setUserList } = useContext(userListContext);
  const { currentUserInfo, setCurrentUserInfo } = useContext(userContext);

  console.log(userList);
  console.log(currentUserInfo);
  return (
    <div className="profile-container">
      <Header destination="profile" />
      <div className="profile-feed-wrapper">
        <main>main</main>
        <aside>
          <div className="open-to-work">
            <h3>Open to work</h3>
            <p>UI/UX Designer, Copywriter and Sales Manager</p>
            <Link to={"#"}>show details</Link>
            <img src={redact} alt="redact" />
          </div>
          <div className="connections">
            <h4>500 + Connections</h4>
          </div>
          <div className="activity">
            <h2>Activity</h2>
            <span>900 followers</span>
            <p>You haven’t posted yet</p>
            <p>Post you share will be displayed here</p>
            <button>create posts</button>
            <p className="show-more">show more</p>
            <img src={redact} alt="redact" />
          </div>
          <FriendsCard users={userList} />
          <FriendsCard users={userList} />
        </aside>
      </div>
      <footer>
        <FooterRows />
        <FooterList />
      </footer>
    </div>
  );
}

export default Profile;
