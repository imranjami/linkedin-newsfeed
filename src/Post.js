import { Avatar } from "@material-ui/core"
import React, { forwardRef, useState } from "react"
import InputOption from "./InputOption"
import "./Post.css"
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined"
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined"
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined"
import SendOutlinedIcon from "@material-ui/icons/SendOutlined"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import PublicIcon from "@material-ui/icons/Public"

const Post = forwardRef(
  ({ name, description, message, photoUrl, timestamp, timeAgo }, ref) => {
    const like = "https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
    const celebrate =
      "https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
    const love = "https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
    const support =
      "https://static-exp1.licdn.com/sc/h/6xvr3hrj4c24dak8r7z64pgj3"
    const insightful =
      "https://static-exp1.licdn.com/sc/h/9wjxk9w5wguhpev3dm13672dq"
    const curious =
      "https://static-exp1.licdn.com/sc/h/3tn3hb1r3nls9c4ddwbg2pymr"
    const reactions = [like, celebrate, love, support, insightful, curious]

    return (
      <div ref={ref} className="post">
        <div className="post__banner">
          <div className="post__bannerContent">
            <p>
              <span>Imran Jami</span> likes this
            </p>
            <MoreHorizIcon />
          </div>
          <div className="post__bannerBottom" />
        </div>

        <div className="post__header">
          <Avatar className="post__avatar" src={photoUrl}></Avatar>
          <div className="post__info">
            <h2>
              {name}
              <span> • 1st</span>
            </h2>
            <p>{description}</p>
            <p>
              {timestamp
                ? timeAgo.format(timestamp.toDate())
                : timeAgo.format(new Date())}{" "}
              • <PublicIcon />
            </p>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__reactions">
          <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
          <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
          <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" />
          <div className="post__reactionsText">
            <p>
              <span>12,234</span> • <span>34 comments</span>
            </p>
          </div>
        </div>
        <div className="post__reactionsBottom" />
        <div className="post__buttons">
          <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
      </div>
    )
  }
)

export default Post
