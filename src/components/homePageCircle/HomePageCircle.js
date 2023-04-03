import React, { useState } from "react"
import logo from "../../assets/images/spinnerLogo.png"
import "./HomePageCircle.css"
import sword from "../../assets/images/cardSword.png"
import champWord from "../../assets/images/champSpinner.png"
import kingSpin from "../../assets/images/kingsSpinner.png"
import crownSpin from "../../assets/images/crownSpin.png"
import grandText from "../../assets/images/grandSpinnertext.png"
import trophySpin from "../../assets/images/trophy_spinner.png"
import mvpText from "../../assets/images/mvp_text.png"
import mvpglobe from "../../assets/images/mvpGlobe.png"
import defiText from "../../assets/images/defi.png"
import defihorse from "../../assets/images/defiHorse.png"
import sound from "../../assets/images/sample-15s.mp3"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"
const HomePageCircle = () => {
  const [audio] = useState(new Audio(sound))
  const [playing, setPlaying] = useState(false)
  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])
  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false))
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false))
    }
  }, [])

  return (
    <>
      <div className="spinner_wrapper mainbox" id="mainbox">
        <div id="box" className="box">
          <div className="box1">
            <NavLink to="/ClashOfChampions">
              <span className="span1">
                <img
                  src={champWord}
                  alt="text"
                  className="img-fluid sword_text"
                />
                <span className="image_one_sword ">
                  <img src={sword} alt="img" className="img-fluid swordddd" />
                </span>
              </span>
            </NavLink>
            <NavLink to="/rules">
              <span className="span2">
                <img
                  src={grandText}
                  alt="text"
                  className="img-fluid grand_text"
                />
                <span className="curve_trophy">
                  <img
                    src={trophySpin}
                    alt="img"
                    className="img-fluid trophy_spinner"
                  />
                </span>
              </span>
            </NavLink>
            <NavLink to="/kingsofrings">
              <span className="span3">
                <img
                  src={kingSpin}
                  className="img-fluid kings_text"
                  alt="text"
                />
                <span className="crown_img_spin">
                  <img
                    src={crownSpin}
                    alt="crown"
                    className="img-fluid crown_imageee"
                  />
                </span>
              </span>
            </NavLink>
            <span className="span4">
              <img src={mvpText} alt="text" className="img-fluid mvp_text" />
              <span className="globe_wrapper">
                <img src={mvpglobe} alt="globe" className="img-fluid globe" />
              </span>
            </span>
            <span className="span5">
              <img src={defiText} alt="text" className="img-fluid defi_textt" />
              <span className="defi_horse_wrap">
                <img
                  src={defihorse}
                  alt="img"
                  className="img-fluid defi_horse"
                />
              </span>
            </span>
          </div>
        </div>
        <div className="logo_spinner text-center" onClick={toggle}>
          <img src={logo} alt="logo" className="img-fluid" />
        </div>
      </div>
    </>
  )
}

export default HomePageCircle
