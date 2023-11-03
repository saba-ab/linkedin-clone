import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import "../styles/feed.css";
import userCardBackground from "../images/feed/userCardBackground.png";
import defaultPic from "../images/feed/defaultPic.jpeg";
import postPhoto from "../images/feed/photo-post.svg";
import postVideo from "../images/feed/video-post.svg";
import postEvent from "../images/feed/event-post.svg";
import postArticle from "../images/feed/article-post.svg";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import moment from "moment";
import { app } from "../helper";
import FooterRows from "../components/FooterRows";
import FooterList from "../components/FooterList";
import FriendsCard from "../components/FriendsCard";
import { userContext, userListContext } from "../Context";
import { useNavigate } from "react-router-dom";
function Feed() {
  const navigate = useNavigate();
  const { currentUserInfo, setCurrentUserInfo } = useContext(userContext);
  const { userList, setUserList } = useContext(userListContext);
  console.log(userList);
  const [authedUser, setAuthedUser] = useState("");
  const db = getFirestore(app);
  const auth = getAuth();
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setCurrentUserInfo(authedUser);
  }, [authedUser]);
  const handlePostSubmit = () => {
    addPost(postContent);
    setPostContent("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      handlePostSubmit();
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      if (!auth.currentUser) {
        return;
      }
      const postsRef = collection(db, "users", auth.currentUser.uid, "posts");
      const postsQuery = query(postsRef, orderBy("postedAt", "desc"));
      const postSnapshot = await getDocs(postsQuery);
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data();
      const postData = postSnapshot?.docs?.map((doc) => ({
        id: doc.id,
        authorName: userData.fullName,
        ...doc.data(),
      }));
      setAuthedUser(userData.fullName);
      setPosts(postData);
    };

    fetchPosts();
  }, [db, auth.currentUser]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const usersRef = collection(db, "users");
      const userSnapshot = await getDocs(usersRef);
      const users = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return users;
    };
    fetchAllUsers().then((users) => {
      setUsers(users);
      setUserList(users);
      setCurrentUserInfo(authedUser);
    });
  }, [db]);
  async function addPost(content) {
    const currentUser = auth.currentUser;

    if (!currentUser) return;

    const postsRef = collection(db, "users", currentUser.uid, "posts");

    try {
      await addDoc(postsRef, {
        content,
        postedAt: Date.now(),
      });
      console.log("Post successfully added!");
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  }
  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="feed-container">
      <Header destination="feed" />
      <main>
        <div className="profile-card-wrapper">
          <img src={userCardBackground} alt="background" />
          <div className="profile-card">
            <div className="profileImg-fullname">
              <img src={defaultPic} alt="profile" />
              <p>{authedUser}</p>
            </div>
            <div className="line"></div>
            <div className="card-text">
              <p>Who’s viewed your profile</p>
              <p>Impressions of your post</p>
            </div>
            <div className="line"></div>
            <div className="card-text">
              <p>My items</p>
              <p>Invitations</p>
              <p>Groups</p>
              <p>Events</p>
              <p>Followed Hashtags</p>
            </div>
          </div>
        </div>
        <div className="feed-wrapper">
          <div className="post-input">
            <div className="img-and-input">
              <img src={defaultPic} alt="profile" />
              <input
                type="text"
                placeholder="Post something..."
                value={postContent}
                onKeyDown={handleKeyDown}
                onChange={(e) => setPostContent(e.target.value)}
              />
            </div>
            <div className="line"></div>

            <div className="post-types">
              <div className="post-photo">
                <img src={postPhoto} alt="post" />
                <p>Photo</p>
              </div>
              <div className="post-video">
                <img src={postVideo} alt="post" />
                <p>Video</p>
              </div>
              <div className="post-event">
                <img src={postEvent} alt="post" />
                <p>Event</p>
              </div>
              <div className="post-article">
                <img src={postArticle} alt="post" />
                <p>Article</p>
              </div>
            </div>
          </div>
          <div className="rendering-posts">
            {Array.isArray(posts) &&
              posts.map((post) => (
                <div key={post.id} className="post">
                  <div className="post-author">
                    <img src={defaultPic} alt="profile" />
                    <p>{post.authorName}</p>{" "}
                    <span>{moment(post.postedAt).fromNow()}</span>
                  </div>
                  <p>{post.content}</p>
                </div>
              ))}
          </div>
        </div>
        <FriendsCard users={users} />
      </main>
      <button onClick={goToProfile}>goto profile</button>
      <footer>
        <FooterRows />
        <FooterList />
      </footer>
    </div>
  );
}

export default Feed;
