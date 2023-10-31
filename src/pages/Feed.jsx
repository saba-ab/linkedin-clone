import React, { useState, useEffect } from "react";
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
} from "firebase/firestore";
import moment from "moment";
import { app } from "../helper";
function Feed() {
  const db = getFirestore(app);
  const auth = getAuth();
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [authedUser, setAuthedUser] = useState("");
  const handlePostSubmit = () => {
    addPost(postContent);
    setPostContent("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePostSubmit();
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      if (!auth.currentUser) {
        return;
      }
      const postsRef = collection(db, "users", auth.currentUser.uid, "posts");
      const postSnapshot = await getDocs(query(postsRef));
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
                  {/* Add other post properties here as needed */}
                </div>
              ))}
          </div>
        </div>
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
      </main>
    </div>
  );
}

export default Feed;
