import React, { useState } from "react"
import "./HomePageSideBar.css"
import searchicon from "../../assets/images/Union.png"
import DaoLeaderBoard from "../daoLeaderBoard/DaoLeaderBoard"
import polygon1 from "../../assets/images/Polygon.png"
import polygon2 from "../../assets/images/Polygon2.png"
import polygon3 from "../../assets/images/Polygon3.png"
import polygon4 from "../../assets/images/Polygon4.png"
import star from "../../assets/images/ellowstar.png"
const HomePageSideBar = () => {
  const [DaoLeaderBoardList, setLeaderBoardList] = useState([
    {
      numbers: "1",
      icon: polygon1,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "2",
      icon: polygon2,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "3",
      icon: polygon3,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "4",
      icon: polygon4,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "5",
      icon: polygon1,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "6",
      icon: polygon2,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "7",
      icon: polygon3,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "8",
      icon: polygon4,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "9",
      icon: polygon1,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "10",
      icon: polygon4,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "11",
      icon: polygon3,
      name: "John doe",
      starss: 1000,
      like: star,
    },
    {
      numbers: "12",
      icon: polygon2,
      name: "John doe",
      starss: 1000,
      like: star,
    },
  ])
  return (
    <>
      <div className="home_page_sidebar">
        <h6>dao leaderboard</h6>
        <div className="search_bar">
          <input placeholder="Search" className="form-control" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="lisitng_section">
          {DaoLeaderBoardList.map((e, idx) => {
            return (
              <DaoLeaderBoard
                key={idx}
                numbers={e.numbers}
                icon={e.icon}
                name={e.name}
                starss={e.starss}
                like={e.like}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomePageSideBar
