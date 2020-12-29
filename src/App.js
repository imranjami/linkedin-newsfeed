import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./App.css"
import { login, logout, selectUser } from "./features/userSlice"
import Feed from "./Feed"
import LandingPage from "./LandingPage"
import { auth } from "./firebase"
import Header from "./Header"
import Login from "./Login"
import Sidebar from "./Sidebar"
import Widgets from "./Widgets"

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        )
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      {!user ? (
        <LandingPage />
      ) : (
        <div className="app__container">
          <Header />
          <div className="ad">
            <p
              onClick={() =>
                window.open("https://imranjami.github.io/", "_blank")
              }
            >
              <span>Like what you see? - </span> Leave a comment below and check
              out my portfolio over here!
            </p>
            <span>Ad</span>
          </div>
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}

      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  )
}

export default App
