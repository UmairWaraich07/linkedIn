import React from "react";
import "./HeaderOption.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import { Avatar } from "@mui/material";

function HeaderOption({ Icon, title, avatar, onClick, active }) {
  const { user } = useSelector((store) => store.user);

  return (
    <div className={`headerOption ${active && "active"}`} onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__avatar">{user?.email[0]} </Avatar>
      )}
      <h4>{title}</h4>
    </div>
  );
}

export default HeaderOption;
