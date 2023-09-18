import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useSelector } from "react-redux";

function Sidebar() {
  const { user } = useSelector((store) => store.user);

  const sidebarRecent = (title) => (
    <div className="sidebar__recent">
      <span>#</span>
      {title}
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=903&q=80"
          alt=""
          className="sidebar__top-img"
        />
        <Avatar src={user?.profilePic} className="sidebar__top-logo">
          {user?.email[0]}
        </Avatar>
        <h4 className="sidebar__top-name">{user?.name}</h4>
        <p className="sidebar__top-description">{user?.email}</p>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed you?</p>
          <p className="sidebar__stat-number">1,258</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__stat-number">1,499</p>
        </div>
      </div>

      <div className="sidebar__items">
        <BookmarkIcon className="sidebar__items-icon" />
        <p>My Items</p>
      </div>

      <div className="sidebar__bottom">
        <h4>Recent</h4>
        {sidebarRecent("reactjs")}
        {sidebarRecent("frontend")}
        {sidebarRecent("softwareengineering")}
        {sidebarRecent("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
