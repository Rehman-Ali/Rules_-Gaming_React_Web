import React, { useState } from "react"
import AbsDiv from "../../components/absDiv/AbsDiv"
import AbsHeading from "../../components/absHeading/AbsHeading"
import KingsCards from "../../components/kingsCards/KingsCards"
import KingsSlider from "../../components/kingsSlider/KingsSlider"
import MainEventSlider from "../../components/mainEventSlider/MainEventSlider"
import ScrollSliders from "../../components/scrollSlider/ScrollSliders"
import greenstar from "../../assets/images/greenstar.png"
import "./KingsOfRings.css"
import extraround from "../../assets/images/nocontest.png"
import KingsOfRingsEventSlider from "../../components/kingsOfRingsEventsSlider/KingsOfRingsEventSlider"
const KingsOfRngs = () => {
  return (
    <>
      <section className="kings_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="space_section">
                <AbsDiv />
              </div>
            </div>
          </div>
          <div className="row kings_inner_wrapper ">
            <div className="col-lg-8 col-md-12 col-sm-12 text-center">
              <div className="kings_heading">
                <div className="empty"> </div>
                <div className="heading_inner">
                  <AbsHeading heading="King of the ring " />
                  <p>Crush all your opponents</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="rules">
                <p>Rules</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="slider_section text-center">
                <KingsOfRingsEventSlider />
                {/* <KingsSlider /> */}
              </div>
            </div>
          </div>

          {/* step one of king of the ring starts here */}
          <div className="row">
            <div className="col-lg-12">
              <div className="kings_step_one">
                <h4>Step 1</h4>
                <p>Choose your league</p>
              </div>

              <div className="scroll_slider">
                <ScrollSliders />
              </div>
            </div>
          </div>
          {/* step one of king of the ring ends here */}

          {/* step 2 of kings of the rings starts here */}
          <div className="row">
            <div className="col-lg-12">
              <div className="step_two_wrapper">
                <div className="step_two_heading">
                  <h4>Step 2</h4>
                  <p>
                    SELECT THE FIGHT YOU WANT TO BET ON AND PLACE YOUR WAGER
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* main event slider starts here */}
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="main_event_slider ">
                <MainEventSlider />
              </div>
            </div>
          </div>
          {/* main event slider ends here */}

          {/* step 2 of kings of the rings ends here */}
          {/* <div className="row kings_rings_Cards_section justify-content-around">
            <KingsCards />
          </div> */}

          {/* step 3 starts here */}
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
          {/* step 3 ends here */}
        </div>
      </section>
    </>
  )
}

export default KingsOfRngs
