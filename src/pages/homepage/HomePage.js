import React, { useEffect, useState } from "react"
import AbsDiv from "../../components/absDiv/AbsDiv"
import HomePageCircle from "../../components/homePageCircle/HomePageCircle"
import HomePageSideBar from "../../components/homePageSidebar/HomePageSideBar"
import HomePageSlilder from "../../components/homePageSlider/HomePageSlilder"
import "./HomePage.css"

const HomePage = () => {
  const [isPortrait, setIsPortrait] = useState(window.orientation)

  useEffect(() => {
    function handleOrientationChange() {
      setIsPortrait(window.orientation)
    }

    window.addEventListener("orientationchange", handleOrientationChange)

    return () =>
      window.removeEventListener("orientationchange", handleOrientationChange)
  }, [])

  console.log("isPortrait============", isPortrait)
  console.log("window.orientation============", window.orientation)
  return (
    <>
      {isPortrait === 0 && (
        <div className="popup">
          <p>Please rotate your device to landscape mode</p>
        </div>
      )}
      {isPortrait === 0 ? null : (
        <section className="home_page_wrapper">
          <div className="container-fluid">
            <div className="row home_page_row">
              <div className="col-lg-8 col-md-12 col-sm-12 left_side_home_page">
                <div className="space-section">
                  <AbsDiv />
                </div>
                <div className="circle_section">
                  <HomePageCircle />
                </div>
                <div>
                  <HomePageSlilder />
                </div>
                <div className="space-section2">
                  <AbsDiv />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <HomePageSideBar />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default HomePage
