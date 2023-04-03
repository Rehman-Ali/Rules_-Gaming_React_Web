import React from "react"
import Slider from "react-slick"
import "./ClashTeamSlider.css"
import car1 from "../../assets/images/f101.png"
import car2 from "../../assets/images/f2.png"
import car3 from "../../assets/images/f11.png"
import sainz from "../../assets/images/Car/sainz.png"
import gasly from "../../assets/images/Car/gasly.png"
import piastri from "../../assets/images/Car/piastri.png"
import zhou from "../../assets/images/Car/zhou.png"
import stroll from "../../assets/images/Car/stroll.png"
import hulk from "../../assets/images/Car/hulkenberg.png"
import sargent from "../../assets/images/Car/sargent.png"
import pinkStar from "../../assets/images/pinkstar.png"
import greenStar from "../../assets/images/greenstar.png"
import oracle1 from "../../assets/images/oracle1.png"
import oracle2 from "../../assets/images/oracle2.png"
const ClashTeamSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
        },
      },
    ],
  }
  return (
    <>
      <div className="cars_team_slider">
        <Slider {...settings}>
          <div className="car_1">
            <img src={car1} alt="car" className="img-fluid m-auto" />
            <div className="driver_team1">
              <div className="team_card_wrapper ham col-lg-6 col-md-6 col-sm-12">
                <h4>Lewis</h4>
                <div className="first_team_card">
                  <div className="team_star w-100">
                    <img src={pinkStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
              <div className="team_card_wrapper russel col-lg-6 col-md-6 col-sm-12">
                <h4>Russel</h4>
                <div className="second_team_card">
                  <div className="blue_star d-flex justify-content-end w-100">
                    <img src={greenStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car_2">
            <img src={car2} alt="car" className="img-fluid m-auto" />
            <div className="driver_team2">
              <div className="team_card_wrapper ham col-lg-6 col-md-6 col-sm-12">
                <h4>Sergio</h4>
                <div className="first_team_card">
                  <div className="team_star w-100">
                    <img src={pinkStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
              <div className="team_card_wrapper russel col-lg-6 col-md-6 col-sm-12">
                <h4>Max</h4>
                <div className="second_team_card">
                  <div className="blue_star d-flex justify-content-end w-100">
                    <img src={greenStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car_3">
            <img src={car3} alt="car" className="img-fluid m-auto" />
            <div className="driver_team3">
              <div className="team_card_wrapper ham col-lg-6 col-md-6 col-sm-12">
                <h4>Yuki</h4>
                <div className="first_team_card">
                  <div className="team_star w-100">
                    <img src={pinkStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
              <div className="team_card_wrapper russel col-lg-6 col-md-6 col-sm-12">
                <h4>De Vries</h4>
                <div className="second_team_card">
                  <div className="blue_star d-flex justify-content-end w-100">
                    <img src={greenStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car_4">
            <img src={sainz} alt="car" className="img-fluid m-auto" />
            <div className="driver_team4">
              <div className="team_card_wrapper ham col-lg-6 col-md-6 col-sm-12">
                <h4>Carlos</h4>
                <div className="first_team_card">
                  <div className="team_star w-100">
                    <img src={pinkStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
              <div className="team_card_wrapper russel col-lg-6 col-md-6 col-sm-12">
                <h4>Charles</h4>
                <div className="second_team_card">
                  <div className="blue_star d-flex justify-content-end w-100">
                    <img src={greenStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car_5">
            <img src={gasly} alt="car" className="img-fluid m-auto" />
            <div className="driver_team5">
              <div className="team_card_wrapper ham col-lg-6 col-md-6 col-sm-12">
                <h4>Ocon</h4>
                <div className="first_team_card">
                  <div className="team_star w-100">
                    <img src={pinkStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
              <div className="team_card_wrapper russel col-lg-6 col-md-6 col-sm-12">
                <h4>Gasly</h4>
                <div className="second_team_card">
                  <div className="blue_star d-flex justify-content-end w-100">
                    <img src={greenStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car_6">
            <img src={piastri} alt="car" className="img-fluid m-auto" />
            <div className="driver_team6">
              <div className="team_card_wrapper ham col-lg-6 col-md-6 col-sm-12">
                <h4>Norris</h4>
                <div className="first_team_card">
                  <div className="team_star w-100">
                    <img src={pinkStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
              <div className="team_card_wrapper russel col-lg-6 col-md-6 col-sm-12">
                <h4>Oscar</h4>
                <div className="second_team_card">
                  <div className="blue_star d-flex justify-content-end w-100">
                    <img src={greenStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car_7">
            <img src={zhou} alt="car" className="img-fluid m-auto" />
            <div className="driver_team7">
              <div className="team_card_wrapper ham col-lg-6 col-md-6 col-sm-12">
                <h4>Zhou</h4>
                <div className="first_team_card">
                  <div className="team_star w-100">
                    <img src={pinkStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
              <div className="team_card_wrapper russel col-lg-6 col-md-6 col-sm-12">
                <h4>Bottas</h4>
                <div className="second_team_card">
                  <div className="blue_star d-flex justify-content-end w-100">
                    <img src={greenStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car_8">
            <img src={stroll} alt="car" className="img-fluid m-auto" />
            <div className="driver_team8">
              <div className="team_card_wrapper ham col-lg-6 col-md-6 col-sm-12">
                <h4>Stroll</h4>
                <div className="first_team_card">
                  <div className="team_star w-100">
                    <img src={pinkStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
              <div className="team_card_wrapper russel col-lg-6 col-md-6 col-sm-12">
                <h4>Fernando</h4>
                <div className="second_team_card">
                  <div className="blue_star d-flex justify-content-end w-100">
                    <img src={greenStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car_9">
            <img src={hulk} alt="car" className="img-fluid m-auto" />
            <div className="driver_team9">
              <div className="team_card_wrapper ham col-lg-6 col-md-6 col-sm-12">
                <h4>Kevin</h4>
                <div className="first_team_card">
                  <div className="team_star w-100">
                    <img src={pinkStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
              <div className="team_card_wrapper russel col-lg-6 col-md-6 col-sm-12">
                <h4>Niko</h4>
                <div className="second_team_card">
                  <div className="blue_star d-flex justify-content-end w-100">
                    <img src={greenStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car_10">
            <img src={sargent} alt="car" className="img-fluid m-auto" />
            <div className="driver_team10">
              <div className="team_card_wrapper ham col-lg-6 col-md-6 col-sm-12">
                <h4>Logan</h4>
                <div className="first_team_card">
                  <div className="team_star w-100">
                    <img src={pinkStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
              <div className="team_card_wrapper russel col-lg-6 col-md-6 col-sm-12">
                <h4>Albon</h4>
                <div className="second_team_card">
                  <div className="blue_star d-flex justify-content-end w-100">
                    <img src={greenStar} alt="icon" className="img-fluid" />
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default ClashTeamSlider
