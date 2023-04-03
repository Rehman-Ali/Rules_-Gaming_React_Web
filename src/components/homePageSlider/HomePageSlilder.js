import React from "react"
import Slider from "react-slick"
import "./HomePageSlider.css"
const HomePageSlilder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="home_page_slider">
        <h6>Live events</h6>
        <Slider {...settings}>
          <div className="first_slide">
            <div className="slide_inner">
              <h4>F1 Silverstone</h4>
              <p>13 jan - 9.00 est</p>
            </div>
          </div>
          <div className="second_slide">
            <div className="slide_inner">
              <h4>Mufc vs lfc</h4>
              <p>13 Jan - 9:00est</p>
            </div>
          </div>
          <div className="third_slider">
            <div className="slide_inner">
              <h4>fury vs chisora</h4>
              <p>13 Jan - 9:00est</p>
            </div>
          </div>
          <div className="fouth_slide">
            <div className="slide_inner">
              <h4>esport event</h4>
              <p>13 Jan - 9:00est</p>
            </div>
          </div>
          <div className="third_slider">
            <div className="slide_inner">
              <h4>fury vs chisora</h4>
              <p>13 Jan - 9:00est</p>
            </div>
          </div>
          <div className="second_slide">
            <div className="slide_inner">
              <h4>Mufc vs lfc</h4>
              <p>13 Jan - 9:00est</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default HomePageSlilder
