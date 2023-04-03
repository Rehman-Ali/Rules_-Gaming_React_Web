import React from "react"
import Slider from "react-slick"
import "./KingsSlider.css"
import kingsImage from "../../assets/images/king1stSlider.png"
const KingsSlider = () => {
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
  return (
    <>
      <div className="king_hero_slider">
        <Slider {...settings}>
          <div className="text-center slider_content">
            <img src={kingsImage} alt="image" className="img-fluid m-auto" />
            <div className="disp_slider_heading">
              <h6>UFc 287</h6>
            </div>
          </div>
          <div className="slider_content">
            <img src={kingsImage} alt="image" className="img-fluid m-auto" />
            <div className="disp_slider_heading">
              <h6>UFc 287</h6>
            </div>
          </div>
          <div className="slider_content">
            <img src={kingsImage} alt="image" className="img-fluid m-auto" />
            <div className="disp_slider_heading">
              <h6>UFc 287</h6>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default KingsSlider
