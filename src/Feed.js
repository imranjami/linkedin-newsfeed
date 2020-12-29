import React, { useState, useEffect } from "react"
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from "./InputOption"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventIcon from "@material-ui/icons/Event"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from "./Post"
import { db } from "./firebase"
import firebase from "firebase"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"
import FlipMove from "react-flip-move"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo("en-US")

function Feed() {
  const user = useSelector(selectUser)

  const [input, setInput] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data()
            }
          })
        )
      })
  }, [posts])

  const sendPost = (e) => {
    e.preventDefault()
    db.collection("posts").add({
      name: user.displayName || "",
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("")
  }

  const blue = "#70B5F9"
  const yellow = "#e7a33e"
  const gray = "#a0b4b7"
  const red = "#f5987e"
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color={blue} />
          <InputOption Icon={SubscriptionsIcon} title="Video" color={yellow} />
          <InputOption Icon={EventIcon} title="Event" color={gray} />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color={red}
          />
        </div>
      </div>
      <div className="feed__linebreak">
        <div className="feed__linebreakLine" />
        <p>
          Sort by: <span>Most Recent</span>
        </p>
      </div>

      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, timestamp }
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              timestamp={timestamp}
              timeAgo={timeAgo}
            />
          )
        )}
      </FlipMove>
    </div>
  )
}

export default Feed
