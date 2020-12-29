import React from "react"
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }

  const course = (heading, subtitle, number) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">{number}</div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="widgets">
      <div className="widgets__news">
        <div className="widgets__header">
          <h2>Linkedin News</h2>
          <InfoIcon />
        </div>
        {newsArticle(
          "Bitcoin breaks record high $27k",
          "Top news • 122,542 Readers"
        )}
        {newsArticle(
          "Salesforce Signs Definitive Agreement to Acquire Slack",
          "1w ago • 82,365 Readers"
        )}
        {newsArticle(
          "The latest on the coronavirus pandemic and vaccines",
          "Live • 17,890 Readers"
        )}
        {newsArticle(
          "Cyberpunk 2077 hit with class action lawsuit",
          "10,423 Readers"
        )}
        {newsArticle(
          "New Linkedin Newsfeed application gets 1M users overnight",
          "124,423 Readers"
        )}
      </div>
      <div className="widgets__courses">
        <div className="widgets__header">
          <h2>Today's most viewed courses</h2>
          <InfoIcon />
        </div>
        {course(
          "The Six Morning Habits of Highly Perf...",
          "Pete Mocktaitis | How to Be Awesome at Yo...",
          "1."
        )}
        {course("Mastering Self-Leadership", "Laurie Ruettimann", "2.")}
        {course(
          "Critical Thinking for Better Judgeme...",
          "Becki Saltzman",
          "3."
        )}
        <p>Show more on Linkedin Learning</p>
      </div>
    </div>
  )
}

export default Widgets
