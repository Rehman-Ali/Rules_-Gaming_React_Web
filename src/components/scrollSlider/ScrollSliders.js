import React from "react"
import HorizontalScroll from "react-scroll-horizontal"
import "./ScrollSliders.css"
const ScrollSliders = () => {
  const child = { width: `25em`, height: `100%` }
  const parent = { width: `90em`, height: `175px` }
  return (
    <>
      <div style={parent} className="parent_div">
        <HorizontalScroll>
          <div style={child} className="child_div">
            <div className="amateur_league">
              <h3>Amateur League</h3>
              <p>Fix bet: 0.001 ETH</p>
            </div>
            <div className="naration_of_step1">
              <p>Players out of 10,000</p>
            </div>
          </div>
          <div style={child} className="child_div">
            <div className="rookie_league">
              <h3>Rookie League</h3>
              <p>Fix bet: 0.001 ETH</p>
            </div>
            <div className="naration_of_step1">
              <p>Players out of 1,000</p>
            </div>
          </div>
          <div style={child} className="child_div">
            <div className="challenger_league">
              <h3>Challenger League</h3>
              <p>Fix bet: 0.005 ETH</p>
            </div>
            <div className="naration_of_step1">
              <p>Players out of 500</p>
            </div>
          </div>
          <div style={child} className="child_div">
            <div className="pro_league">
              <h3>pro League</h3>
              <p>Fix bet: 0.005 ETH</p>
            </div>
            <div className="naration_of_step1">
              <p>Players out of 10,000</p>
            </div>
          </div>
        </HorizontalScroll>
      </div>
    </>
  )
}

export default ScrollSliders
