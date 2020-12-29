import React from "react"
import "./LandingPage.css"
import Login from "./Login"
import landingPage from "./landingpage.png"
import logo from "./LinkedInn.svg"
import { motion } from "framer-motion"

function LandingPage() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  return (
    <div className="landingPage">
      <motion.div
        className="landingPage__header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <img src={logo} />
        <p>
          Built by <a href="https://imranjami.github.io/">Imran Jami.</a>
        </p>
      </motion.div>

      <div className="landingPage__body">
        <motion.div
          className="landingPage__bodyContent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <Login />
          <img src={landingPage} />
        </motion.div>
        <div className="landingPage__body"></div>
      </div>
    </div>
  )
}

export default LandingPage
