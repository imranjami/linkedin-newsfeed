import { Avatar } from "@material-ui/core"
import React from "react"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"
import "./Sidebar.css"

function Sidebar() {
  const user = useSelector(selectUser)

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    )
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://ak.picdn.net/shutterstock/videos/1019866207/thumb/1.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">1,645</p>
        </div>
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">500+</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">3,457</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("coronavirus")}
        {recentItem("bitcoin")}
        {recentItem("cryptocurrency")}
        {recentItem("softwareEngineering")}
        {recentItem("electricGuitar")}
        {recentItem("jamiApparel")}
      </div>
    </div>
  )
}

export default Sidebar
