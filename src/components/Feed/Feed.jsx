import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Posts from "../Posts/Posts";
import FeedOption from "../FeedOption/FeedOption";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const uploadPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user?.name,
      description: user?.email,
      message: input,
      photoUrl: user?.profilePic,
      timestamp: firebase.firestore.Timestamp.now(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__container">
        <div className="feed__logo-input">
          <Avatar src={user?.profilePic}>{user?.email[0]}</Avatar>
          <form className="feed__input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button type="submit" onClick={uploadPost}>
              Post
            </button>
          </form>
        </div>
        <div className="feed__icons">
          <FeedOption Icon={InsertPhotoIcon} title="Photo" color="#70B5f9" />
          <FeedOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <FeedOption Icon={EventIcon} title="Event" color="#C0CBCD" />
          <FeedOption
            Icon={ArticleIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
