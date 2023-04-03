import React from "react"
import "./DaoLeaderBoard.css"
const DaoLeaderBoard = (props) => {
  const { numbers, icon, name, starss, like } = props
  return (
    <>
      <div className="leaderBoard_listing_wrapper">
        <div className="dao_left_side">
          <p>{numbers}</p>
          <img src={icon} alt="star" className="img-fluid" />
          <h6>{name}</h6>
        </div>
        <div className="lsit_right_side">
          <h6>{starss}</h6>
          <img src={like} alt="icon" className="img-fluid" />
        </div>
      </div>
    </>
  )
}

export default DaoLeaderBoard
