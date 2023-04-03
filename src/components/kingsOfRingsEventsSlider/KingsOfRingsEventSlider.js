import React, { useState } from "react"
import "./KingsOfRingsEventSlider.css"
import basketball from "../../assets/images/basketball.png"
import football from "../../assets/images/football.png"
import racing from "../../assets/images/racing.png"
import boxing from "../../assets/images/boxing.png"
import rugby from "../../assets/images/rugby.png"
import Slider from "react-slick"
const KingsOfRingsEventSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        },
      },
    ],
  }
  const [category, setCategory] = useState("UFc 287")

  const _handleEvent = (n) => {
    setCategory(n)
  }

  return (
    <>
      <div className="kings_event_wrapper">
        <div className="basketball_" onClick={() => _handleEvent("Ufc 287")}>
          <img src={basketball} alt="basketball" className="img-fluid" />
        </div>
        <div className="football_" onClick={() => _handleEvent("Ufc 287")}>
          <img src={football} alt="football" className="img-fluid" />
        </div>
        <div className="racing_gp" onClick={() => _handleEvent("Ufc 287")}>
          <img src={racing} alt="racing" className="img-fluid" />
        </div>
        <div className="boxing_" onClick={() => _handleEvent("Ufc 287")}>
          <img src={boxing} alt="boxing" className="img-fluid" />
        </div>
        <div className="rugby_" onClick={() => _handleEvent("Ufc 287")}>
          <img src={rugby} alt="rugby" className="img-fluid" />
        </div>
        {/* <div className="cat_name">
          <p className="categoryName">{category}</p>
        </div> */}
      </div>
      <div className="king_event_inner_main_slider_">
        <Slider {...settings}>
          <div className="Kings_event_name">
            <h1>Ufc 287</h1>
          </div>
          <div className="Kings_event_name">
            <h1>Ufc 287</h1>
          </div>
          <div className="Kings_event_name">
            <h1>Ufc 287</h1>
          </div>
          <div className="Kings_event_name">
            <h1>Ufc 287</h1>
          </div>
          <div className="Kings_event_name">
            <h1>Ufc 287</h1>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default KingsOfRingsEventSlider
