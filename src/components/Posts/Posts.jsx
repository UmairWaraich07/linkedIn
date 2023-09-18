import React, { forwardRef } from "react";
import "./Posts.css";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import FeedOption from "../FeedOption/FeedOption";
// import FlipMove from "react-flip-move";

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="posts">
      <div className="posts__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="posts__info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div className="posts__body">
        <p className="posts__message">{message}</p>
      </div>

      <div className="posts__buttons">
        <FeedOption Icon={ThumbUpIcon} title="Like" color="gray" />
        <FeedOption Icon={CommentIcon} title="Comment" color="gray" />
        <FeedOption Icon={ShareIcon} title="Share" color="gray" />
        <FeedOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Posts;
