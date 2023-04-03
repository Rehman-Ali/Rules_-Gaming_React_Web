import React from "react"
import AbsDiv from "../../components/absDiv/AbsDiv"
import ClashChampionsHeroSlider from "../../components/clashChampionsHeroSlider/ClashChampionsHeroSlider"
import "./ClashOfChampions.css"

import ScrollSliders from "../../components/scrollSlider/ScrollSliders"
import ClashTeamSlider from "../../components/clashTeamSlider/ClashTeamSlider"
import TeamCards from "../../components/teamCards/TeamCards"
const ClashOfChampions = () => {
  return (
    <>
      <section className="clashOfChampions_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="space_section">
                <AbsDiv />
              </div>
            </div>
          </div>
          <div className="row clash_champion_heading_row">
            <div className="col-lg-12 text-center d-flex justify-content-center align-items-center heading">
              <div className="clashOfChampios_headingDisp">
                <h1>clash of champions</h1>
                <p className="clash_disp">Crush all your opponents</p>
              </div>
              <p className="rules_clash">rules</p>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="slider_section text-center">
                <ClashChampionsHeroSlider />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="kings_step_one">
                <h4>Step 1</h4>
                <p>Choose your league</p>
              </div>

              <div className="scroll_slider clash_slider_scroll">
                <ScrollSliders />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="step_two_wrapper">
                <div className="step_two_heading">
                  <h4>Step 2</h4>
                  <p>SELECT THE ONE DRIVER PER TEAM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center team_section">
            <div className="col-lg-8 text-center">
              <div className="clash_team_slider">
                <h4>Team</h4>
                <div>
                  <ClashTeamSlider />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row justify-content-center team_cards">
            <TeamCards />
          </div> */}
          <div className="row step_three_wrapper">
            <div className="col-lg-12">
              <div className="kings_step_three">
                <h4>Step 3</h4>
                <p>VALIDATE YOUR SELECTION AND YOUR BET - LET’S GO!</p>
              </div>
              <div className="lfg">
                <button>LFG!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClashOfChampions
