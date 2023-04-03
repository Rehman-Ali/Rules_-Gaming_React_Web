import React from "react"
import Slider from "react-slick"
import "./MainEventSlider.css"
import pereira from "../../assets/images/pereiraa.png"
import adesanya from "../../assets/images/adesanya.png"
import burns from "../../assets/images/burns.png"
import masvidal from "../../assets/images/masvidal.png"
import holloway from "../../assets/images/holloway.png"
import allen from "../../assets/images/allen.png"
import pavlovich from "../../assets/images/pavlovich.png"
import blaydes from "../../assets/images/blaydes.png"
import song from "../../assets/images/song.png"
import simon from "../../assets/images/simon.png"
import KingsCards from "../kingsCards/KingsCards"
import greenstar from "../../assets/images/greenstar.png"
import pinkstar from "../../assets/images/pinkstar.png"
const MainEventSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <div className="mainn_events_fighter">
        <h3>Main Event</h3>
        <Slider {...settings}>
          <div className="main_wrapper_For_event_section">
            <div className="main_fighting">
              <div className="first_fighter">
                <img src={pereira} alt="fighter image" className="img-fluid" />
                <h6>PEREIRA</h6>
              </div>
              <div className="versus_battle">
                <h4>VS</h4>
              </div>
              <div className="second_fighter">
                <img src={adesanya} alt="fighter image" className="img-fluid" />
                <h6>ADESANYA</h6>
              </div>
            </div>
            <div className="cards_fighter">
              <div className="card_wrapper_for_kings fight_1 col-lg-5 col-md-6 col-sm-12">
                <h2>fighter # 1</h2>
                <div className="flip_card">
                  <div className="card_front_side">
                    <div className="text-center pink_button">
                      <div className="star card">
                        <img
                          src={pinkstar}
                          alt="icon"
                          className="img-fluid card__infoicon"
                        />
                        <div className="flip_card_back one_right">
                          <h1>alex pereira</h1>
                          <p>Middleweight divison</p>
                          <div className="winning_strike_rate">
                            <div className="win">
                              <h6>7</h6>
                              <p>Fight win streak</p>
                            </div>
                            <div className="knockout">
                              <h6>6</h6>
                              <p>wins by knockout</p>
                            </div>
                            <div className="finished">
                              <h6>3</h6>
                              <p>first round finishes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button>Select</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_wrapper_for_kings fight_2 col-lg-5 col-md-6 col-sm-12">
                <h2>FIGHTER # 2</h2>
                <div className="flip_card">
                  <div className="card_front_side">
                    <div className="text-center green_button">
                      <div className="star card">
                        <img
                          src={greenstar}
                          alt="icon"
                          className="img-fluid card__infoicon"
                        />
                        <div className="flip_card_back">
                          <h1>Isreal adesanya</h1>
                          <p>Middleweight divison</p>
                          <div className="winning_strike_rate">
                            <div className="win">
                              <h6></h6>
                              <p></p>
                            </div>
                            <div className="knockout">
                              <h6>15</h6>
                              <p>wins by knockout</p>
                            </div>
                            <div className="finished">
                              <h6>6</h6>
                              <p>first round finishes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button>Select</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second_fight_wrapper">
            <div className="main_fighting">
              <div className="second_fighter">
                <img src={burns} alt="fighter image" className="img-fluid" />
                <h6>Burns</h6>
              </div>
              <div className="versus_battle">
                <h4>VS</h4>
              </div>
              <div className="first_fighter">
                <img src={masvidal} alt="fighter image" className="img-fluid" />
                <h6>Masvidal</h6>
              </div>
            </div>

            {/* second fight wrestler and cards starts here */}
            <div className="cards_fighter">
              <div className="card_wrapper_for_kings fight_1 col-lg-5 col-md-6 col-sm-12">
                <h2>fighter # 1</h2>
                <div className="flip_card">
                  <div className="card_front_side">
                    <div className="text-center pink_button">
                      <div className="star card">
                        <img
                          src={pinkstar}
                          alt="icon"
                          className="img-fluid card__infoicon"
                        />
                        <div className="flip_card_back one_right">
                          <h1>Gilbert burns</h1>
                          <p>Middleweight divison</p>
                          <div className="winning_strike_rate">
                            <div className="win">
                              <h6>6</h6>
                              <p>Fight win streak</p>
                            </div>
                            <div className="knockout">
                              <h6>9</h6>
                              <p>wins by knockout</p>
                            </div>
                            <div className="finished">
                              <h6>11</h6>
                              <p>first round finishes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button>Select</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_wrapper_for_kings fight_2 col-lg-5 col-md-6 col-sm-12">
                <h2>FIGHTER # 2</h2>
                <div className="flip_card">
                  <div className="card_front_side">
                    <div className="text-center green_button">
                      <div className="star card">
                        <img
                          src={greenstar}
                          alt="icon"
                          className="img-fluid card__infoicon"
                        />
                        <div className="flip_card_back">
                          <h1>jorge masvidal</h1>
                          <p>Middleweight divison</p>
                          <div className="winning_strike_rate">
                            <div className="win">
                              <h6>16</h6>
                              <p>wins by knockout</p>
                            </div>
                            <div className="knockout">
                              <h6>2</h6>
                              <p>wins by submissions</p>
                            </div>
                            <div className="finished">
                              <h6>8</h6>
                              <p>first round finishes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button>Select</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second fight wrestler and cards ends here */}
          </div>
          <div className="main_fighting_3">
            <div className="main_fighting">
              <div className="first_fighter">
                <img src={holloway} alt="fighter image" className="img-fluid" />
                <h6>Holloway</h6>
              </div>
              <div className="versus_battle">
                <h4>VS</h4>
              </div>
              <div className="second_fighter">
                <img src={allen} alt="fighter image" className="img-fluid" />
                <h6>Allen</h6>
              </div>
            </div>

            {/* main fighting 3 wrestlers cards  starts here*/}
            <div className="cards_fighter">
              <div className="card_wrapper_for_kings fight_1 col-lg-5 col-md-6 col-sm-12">
                <h2>fighter # 1</h2>
                <div className="flip_card">
                  <div className="card_front_side">
                    <div className="text-center pink_button">
                      <div className="star card">
                        <img
                          src={pinkstar}
                          alt="icon"
                          className="img-fluid card__infoicon"
                        />
                        <div className="flip_card_back one_right">
                          <h1>max holloway</h1>
                          <p>Middleweight divison</p>
                          <div className="winning_strike_rate">
                            <div className="win">
                              <h6></h6>
                              <p></p>
                            </div>
                            <div className="knockout">
                              <h6>10</h6>
                              <p>wins by knockout</p>
                            </div>
                            <div className="finished">
                              <h6>2</h6>
                              <p>first round finishes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button>Select</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_wrapper_for_kings fight_2 col-lg-5 col-md-6 col-sm-12">
                <h2>FIGHTER # 2</h2>
                <div className="flip_card">
                  <div className="card_front_side">
                    <div className="text-center green_button">
                      <div className="star card">
                        <img
                          src={greenstar}
                          alt="icon"
                          className="img-fluid card__infoicon"
                        />
                        <div className="flip_card_back">
                          <h1>Arnold allen</h1>
                          <p>Middleweight divison</p>
                          <div className="winning_strike_rate">
                            <div className="win">
                              <h6>12</h6>
                              <p>wins by steaks</p>
                            </div>
                            <div className="knockout">
                              <h6>7</h6>
                              <p>wins by knockout</p>
                            </div>
                            <div className="finished">
                              <h6>4</h6>
                              <p>first round finishes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button>Select</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* main fighting 3 wrestlers cards  ends here*/}
          </div>

          <div className="main_fighting_4">
            <div className="main_fighting">
              <div className="first_fighter">
                <img
                  src={pavlovich}
                  alt="fighter image"
                  className="img-fluid"
                />
                <h6>Pavlovich</h6>
              </div>
              <div className="versus_battle">
                <h4>VS</h4>
              </div>
              <div className="second_fighter">
                <img src={blaydes} alt="fighter image" className="img-fluid" />
                <h6>Blaydes</h6>
              </div>
            </div>

            {/*fighter four wrestler and cards starts here  */}
            <div className="cards_fighter">
              <div className="card_wrapper_for_kings fight_1 col-lg-5 col-md-6 col-sm-12">
                <h2>fighter # 1</h2>
                <div className="flip_card">
                  <div className="card_front_side">
                    <div className="text-center pink_button">
                      <div className="star card">
                        <img
                          src={pinkstar}
                          alt="icon"
                          className="img-fluid card__infoicon"
                        />
                        <div className="flip_card_back one_right">
                          <h1>sergei pavlovich</h1>
                          <p>Middleweight divison</p>
                          <div className="winning_strike_rate">
                            <div className="win">
                              <h6>5</h6>
                              <p>Fight win streak</p>
                            </div>
                            <div className="knockout">
                              <h6>14</h6>
                              <p>wins by knockout</p>
                            </div>
                            <div className="finished">
                              <h6>14</h6>
                              <p>first round finishes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button>Select</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_wrapper_for_kings fight_2 col-lg-5 col-md-6 col-sm-12">
                <h2>FIGHTER # 2</h2>
                <div className="flip_card">
                  <div className="card_front_side">
                    <div className="text-center green_button">
                      <div className="star card">
                        <img
                          src={greenstar}
                          alt="icon"
                          className="img-fluid card__infoicon"
                        />
                        <div className="flip_card_back">
                          <h1>Curtis blaydes</h1>
                          <p>Middleweight divison</p>
                          <div className="winning_strike_rate">
                            <div className="win">
                              <h6></h6>
                              <p></p>
                            </div>
                            <div className="knockout">
                              <h6>3</h6>
                              <p>wins by knockout</p>
                            </div>
                            <div className="finished">
                              <h6>12</h6>
                              <p>first round finishes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button>Select</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*fighter four wrestler and cards ends here  */}
          </div>

          <div className="main_fighting_5">
            <div className="main_fighting">
              <div className="first_fighter">
                <img src={song} alt="fighter image" className="img-fluid" />
                <h6>Song</h6>
              </div>
              <div className="versus_battle">
                <h4>VS</h4>
              </div>
              <div className="second_fighter">
                <img src={simon} alt="fighter image" className="img-fluid" />
                <h6>Simon</h6>
              </div>
            </div>

            {/* cards 5 wrestler and cards start here */}
            <div className="cards_fighter">
              <div className="card_wrapper_for_kings fight_1 col-lg-5 col-md-6 col-sm-12">
                <h2>fighter # 1</h2>
                <div className="flip_card">
                  <div className="card_front_side">
                    <div className="text-center pink_button">
                      <div className="star card">
                        <img
                          src={pinkstar}
                          alt="icon"
                          className="img-fluid card__infoicon"
                        />
                        <div className="flip_card_back one_right">
                          <h1>yadong song</h1>
                          <p>Middleweight divison</p>
                          <div className="winning_strike_rate">
                            <div className="win">
                              <h6>8</h6>
                              <p>Fight win streak</p>
                            </div>
                            <div className="knockout">
                              <h6>3</h6>
                              <p>wins by knockout</p>
                            </div>
                            <div className="finished">
                              <h6>7</h6>
                              <p>first round finishes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button>Select</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_wrapper_for_kings fight_2 col-lg-5 col-md-6 col-sm-12">
                <h2>FIGHTER # 2</h2>
                <div className="flip_card">
                  <div className="card_front_side">
                    <div className="text-center green_button">
                      <div className="star card">
                        <img
                          src={greenstar}
                          alt="icon"
                          className="img-fluid card__infoicon"
                        />
                        <div className="flip_card_back">
                          <h1>Ricky simon</h1>
                          <p>Middleweight divison</p>
                          <div className="winning_strike_rate">
                            <div className="win">
                              <h6>5</h6>
                              <p>win by streak</p>
                            </div>
                            <div className="knockout">
                              <h6>6</h6>
                              <p>wins by knockout</p>
                            </div>
                            <div className="finished">
                              <h6>4</h6>
                              <p>first round finishes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button>Select</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* cards 5 wrestler and cards start here */}
          </div>
        </Slider>
      </div>
    </>
  )
}

export default MainEventSlider
