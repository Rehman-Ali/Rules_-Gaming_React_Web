import React from "react"
import "./EventSelection.css"
import basketball from "../../assets/images/basketball.png"
import football from "../../assets/images/football.png"
import racing from "../../assets/images/racing.png"
import boxing from "../../assets/images/boxing.png"
import rugby from "../../assets/images/rugby.png"
import { useState } from "react"
const EventSelection = () => {
  //   const [eventsState, setEventsState] = useState[
  //       {
  //         basketballs: "BasketBall",
  //         Footballs: "FootBall",
  //       }
  //     ]
  const [category, setCategory] = useState("MotorGp")

  const _handleEvent = (n) => {
    setCategory(n)
  }
  return (
    <>
      <div className="event_wrapper">
        <div className="basketball_" onClick={() => _handleEvent("basketball")}>
          <img src={basketball} alt="basketball" className="img-fluid" />
        </div>
        <div className="football_" onClick={() => _handleEvent("football")}>
          <img src={football} alt="football" className="img-fluid" />
        </div>
        <div className="racing_gp" onClick={() => _handleEvent("racing")}>
          <img src={racing} alt="racing" className="img-fluid" />
        </div>
        <div className="boxing_" onClick={() => _handleEvent("boxing")}>
          <img src={boxing} alt="boxing" className="img-fluid" />
        </div>
        <div className="rugby_" onClick={() => _handleEvent("rugby")}>
          <img src={rugby} alt="rugby" className="img-fluid" />
        </div>
        <div className="cat_name">
          <p className="categoryName">{category}</p>
        </div>
      </div>
    </>
  )
}

export default EventSelection
