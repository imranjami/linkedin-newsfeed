import React from "react"
import "./Header.css"
import HeaderOption from "./HeaderOption"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { useDispatch } from "react-redux"
import { auth } from "./firebase"
import { logout } from "./features/userSlice"
import logo from "./in-newsfeed.svg"

function Header() {
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__left">
          <img src={logo} />
          <div className="header__search">
            <SearchIcon style={{ fontSize: 18 }} />
            <input placeholder="Search" type="text"></input>
          </div>
          {/* Image */}
          {/* Searchbar */}
        </div>
        <div className="header__right">
          <HeaderOption title="Home" Icon={HomeIcon} />
          <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
          <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
          <HeaderOption title="Messaging" Icon={ChatIcon} />
          <HeaderOption title="Notifications" Icon={NotificationsIcon} />
          <HeaderOption
            hasAvatar={true}
            title="Log Out"
            onClick={logoutOfApp}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
