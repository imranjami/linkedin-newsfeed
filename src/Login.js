import { AddAlertSharp } from "@material-ui/icons"
import React, { useState } from "react"
import { auth } from "./firebase"
import "./Login.css"
import { login } from "./features/userSlice"
import { useDispatch } from "react-redux"
import landingPage from "./landingpage.png"
import { motion } from "framer-motion"

function Login() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const dispatch = useDispatch()
  const [isRegister, setIsRegister] = useState(true)
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!")
    }

    auth
      .createUserWithEmailAndPassword(registerEmail, registerPassword)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic
              })
            )
          })
      })
      .catch((error) => alert(error))
  }

  const doLogin = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL
          })
        )
      })
      .catch((error) => alert(error))
  }

  return (
    <div className="container__login">
      <h1>
        Welcome to your <span>new</span> professional community.
      </h1>
      <div className="login">
        <motion.form
          className={isRegister ? "" : "register"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          {/* sign in */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <motion.button
            type="submit"
            onClick={doLogin}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            className="button"
          >
            Sign In
          </motion.button>
        </motion.form>
        {/* register */}
        <form className={isRegister ? "register" : ""}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            type="text"
          ></input>

          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Profile pic (Enter an image URL)"
            type="text"
          />
          <input
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <motion.button
            type="submit"
            onClick={register}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            className="button"
          >
            Register
          </motion.button>
        </form>
        {isRegister ? (
          <p>
            Not a member?{" "}
            <span
              className="login__register"
              onClick={() => setIsRegister(!isRegister)}
            >
              Register Now
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="login__register"
              onClick={() => setIsRegister(!isRegister)}
            >
              Sign In
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Login
