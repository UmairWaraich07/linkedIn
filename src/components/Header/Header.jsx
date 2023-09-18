import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/linkedin.png";
import HeaderOption from "../HeaderOption/HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { openModal } from "../../features/modal/modalSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(openModal());
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" className="header__left-logo" />
        <div className="header__left-input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" active={true} />
        <HeaderOption Icon={PeopleAltIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={CommentIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
