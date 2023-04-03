import React from "react"
import "./TeamCards.css"
import pinkStar from "../../assets/images/pinkstar.png"
import greenStar from "../../assets/images/greenstar.png"
const TeamCards = () => {
  return (
    <>
      <div className="team_card_wrapper ham col-lg-4 col-md-6 col-sm-12">
        <h4>Hamilton</h4>
        <div className="first_team_card">
          <div className="team_star w-100">
            <img src={pinkStar} alt="icon" className="img-fluid" />
          </div>
          <button>Select</button>
        </div>
      </div>
      <div className="team_card_wrapper russel col-lg-4 col-md-6 col-sm-12">
        <h4>Russel</h4>
        <div className="second_team_card">
          <div className="blue_star d-flex justify-content-end w-100">
            <img src={greenStar} alt="icon" className="img-fluid" />
          </div>
          <button>Select</button>
        </div>
      </div>
    </>
  )
}

export default TeamCards
