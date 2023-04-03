import React, { useState } from "react"
import kingsImage from "../../assets/images/king1stSlider.png"
import Slider from "react-slick"
import flag from "../../assets/images/flag.png"
import map from "../../assets/images/map.png"

import "./ClashChampionsHeroSlider.css"

import "../eventsSelection/EventSelection.css"
import basketball from "../../assets/images/basketball.png"
import football from "../../assets/images/football.png"
import racing from "../../assets/images/racing.png"
import boxing from "../../assets/images/boxing.png"
import rugby from "../../assets/images/rugby.png"
const ClashChampionsHeroSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
        },
      },
    ],
  }

  const [category, setCategory] = useState("racing")

  const _handleEvent = (n) => {
    setCategory(n)
  }

  const eventDetailArr = [
    {
      cat_name: "racing",
      detail: [
        {
          id: "1",
          ename: "MONACO GP",
          edate: "MAY 28th",
          map: "1m",
          flag: "1",
        },
        {
          id: "2",
          ename: "GRAN PREMIO DE ESPANA",
          edate: "JUN. 04th",
          map: "2m",
          flag: "2",
        },
        {
          id: "3",
          ename: "GRAND PRIX DU CANADA",
          edate: "JUN. 18th",
          map: "3m",
          flag: "3",
        },
        {
          id: "4",
          ename: "AUSTRIA GP",
          edate: "JUL. 02sd",
          map: "4m",
          flag: "4",
        },
        {
          id: "5",
          ename: "ROLEX AUSTRALIAN GP",
          edate: "APR. 02sd",
          map: "5m",
          flag: "5",
        },
        {
          id: "6",
          ename: "AZERBADJAN GP",
          edate: "APR. 30th",
          map: "6m",
          flag: "6",
        },
        {
          id: "7",
          ename: "CRYPTO.COM MIAMI GP",
          edate: "MAY 07th",
          map: "7m",
          flag: "7",
        },
        {
          id: "8",
          ename: "IMOLA GP ",
          edate: "MAY 21st",
          map: "8m",
          flag: "8",
        },
        {
          id: "9",
          ename: "PIRELLI GP D’ITALIA MONZA",
          edate: "SEP. 03rd",
          map: "8mm",
          flag: "8",
        },
        {
          id: "10",
          ename: "SINGAPORE GP",
          edate: "SEP. 17th",
          map: "9m",
          flag: "9",
        },
        {
          id: "11",
          ename: "LENOVO JAPANESE GP",
          edate: "SEP. 24th",
          map: "10m",
          flag: "10",
        },
        {
          id: "12",
          ename: "QATAR GP",
          edate: "OCT. 08th",
          map: "11m",
          flag: "11",
        },
        {
          id: "13",
          ename: "ARAMCO BRITISH GP SILVERSTONE",
          edate: "JUL. 09th",
          map: "12m",
          flag: "12",
        },
        {
          id: "14",
          ename: "QATAR AIRWAYS HUNGARIAN GP",
          edate: "JUL. 23rd",
          map: "13m",
          flag: "13",
        },
        {
          id: "15",
          ename: "BELGIAN GP",
          edate: "JUL. 30",
          map: "14m",
          flag: "14",
        },
        {
          id: "16",
          ename: "HEINEKEN DUTCH GP",
          edate: "AUG. 27th",
          map: "15m",
          flag: "15",
        },
        {
          id: "17",
          ename: "ETIHAD AIRWARS ABU DHABI GP",
          edate: "NOV. 26th",
          map: "16m",
          flag: "16",
        },
        {
          id: "18",
          ename: "LENOVO UNITED STATES GP AUSTIN",
          edate: "OCT. 22sd",
          map: "7mm",
          flag: "7",
        },
        {
          id: "19",
          ename: "GRAN PREMIO DE MEXICO",
          edate: "OCT. 29th",
          map: "17m",
          flag: "17",
        },
        {
          id: "20",
          ename: "ROLEX GRANDE PREMIO DE SAO PAULO",
          edate: "NOV. 05th",
          map: "18m",
          flag: "18",
        },
        {
          id: "21",
          ename: "HEINEKEN SILVER LAS VEGAS GP",
          edate: "NOV. 18th",
          map: "7mmm",
          flag: "7",
        },
      ],
    },
    {
      cat_name: "boxing",
      detail: [],
    },
    {
      cat_name: "football",
      detail: [],
    },
    {
      cat_name: "rugby",
      detail: [],
    },
    {
      cat_name: "basketball",
      detail: [],
    },
  ]

  console.log(
    "cat",
    eventDetailArr,
    category,
    eventDetailArr.filter((item) => item.cat_name == category).length
  )

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
        {/* <div className="cat_name">
          <p className="categoryName">{category}</p>
        </div> */}
      </div>
      {/* <div className="img_section">
        <img src={kingsImage} alt="image" className="img-fluid m-auto" />
      </div> */}
      <div className="clash_hero_slider">
        <Slider {...settings}>
          {eventDetailArr.filter((item) => item.cat_name === category)[0].detail
            .length > 0 ? (
            eventDetailArr
              .filter((item) => item.cat_name === category)[0]
              .detail.map((i, index) => (
                <div className="text-center slider_content" key={index}>
                  <div className="map_flag_middlebox">
                    <div className="flag_section">
                      <img
                        src={require(`../../assets/images/${i.flag}.png`)}
                        alt="flag"
                        className="img-fluid"
                      />
                    </div>
                    <div className="mobile_view"></div>
                    <div className="track-section">
                      <img
                        src={require(`../../assets/images/${i.map}.png`)}
                        alt="map"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="disp_slider_heading">
                    <h6>
                      {i.ename}
                      <br />
                      {i.edate}
                    </h6>
                  </div>
                </div>
              ))
          ) : (
            <>
              <div className="text-center slider_content">
                <div className="map_flag_middlebox">
                  <div className="flag_section">
                    <img src={flag} alt="flag" className="img-fluid" />
                  </div>
                  <div className="mobile_view"></div>

                  <div>
                    <img src={map} alt="map" className="img-fluid" />
                  </div>
                </div>
                <div className="disp_slider_heading">
                  <h6>
                    No event
                    <br /> found
                  </h6>
                </div>
              </div>
            </>
          )}
        </Slider>
      </div>
    </>
  )
}

export default ClashChampionsHeroSlider
