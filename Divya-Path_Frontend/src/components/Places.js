import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import { Tab, Tabs, Button, tabKey, initTabKey } from "react-bootstrap";
import { AddPlaces } from "./AddPlaces";
import { Link } from "react-router-dom";
export function Places() {
  const [tabKey, initTabKey] = useState("one");

  const synth = window.speechSynthesis;
  const contentRef = useRef(null);
  const utteranceRef = useRef(null);

  const handleSpeak = () => {
    const text = contentRef.current.textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const handleStop = () => {
    synth.cancel();
    utteranceRef.current = null;
  };

  // -------- add place btn
  const [goToAddPlaces, setgoToAddPlaces] = useState(false);

  const handleShowClick = () => {
    setgoToAddPlaces(true);
  };

  // ----------- fetching places from db------------
  const [data, setData] = useState([]);
  const [selectedPid, setSelectedPid] = useState([]);

  useEffect(() => {
    // fetch data from database
    fetch("http://localhost:8585/place")
      .then((response) => response.json())
      .then((result) => setData(result));
    console.log(data);
  }, []);
  return (
    <>
      <>
        <Navigation></Navigation>
        <div className="container-fluid p-0">
          <div className="bg-light">
            {/*-------------- Navigation section ---------------*/}
            <div className="container">
              <div className="row pt-5 pb-5">
                <div className="col">
                  <div className="card navCards" style={{ width: "auto" }}>
                    <div className="card-body">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1">
                          English
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2">
                          Hindi
                        </label>
                      </div>
                      <h5 className="card-title pt-3 fw-bold">
                        Select language
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <a href="places" className="custom-card">
                    <div
                      className="card navCards text-center pt-3 activeNavCard"
                      style={{ width: "13rem", display: "inline-block" }}>
                      <img
                        src="../Images/Places.png"
                        className="card-img-top navCardsImg"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5
                          className="card-title pt-2 fw-bold"
                          style={{ textDecoration: "initial", color: "black" }}>
                          Accesible places
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="jobs" className="custom-card">
                    <div
                      className="card navCards text-center pt-3"
                      style={{ width: "12rem", display: "inline-block" }}>
                      <img
                        src="../Images/Jobs.png"
                        className="card-img-top navCardsImg"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5
                          className="card-title pt-2 fw-bold"
                          style={{ textDecoration: "initial", color: "black" }}>
                          Jobs
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="courses" className="custom-card">
                    <div
                      className="card navCards text-center pt-3"
                      style={{ width: "12rem", display: "inline-block" }}>
                      <img
                        src="../Images/Courses.png"
                        className="card-img-top navCardsImg"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5
                          className="card-title pt-2 fw-bold"
                          style={{ textDecoration: "initial", color: "black" }}>
                          Courses
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="mentalHealth" className="custom-card">
                    <div
                      className="card navCards text-center pt-3"
                      style={{ width: "12rem", display: "inline-block" }}>
                      <img
                        src="../Images/MentalHealth1.jpg"
                        className="card-img-top navCardsImg"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5
                          className="card-title pt-2 fw-bold"
                          style={{ textDecoration: "initial", color: "black" }}>
                          Mental Health
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="govtSchemes" className="custom-card">
                    <div
                      className="card navCards text-center pt-3"
                      style={{ width: "12rem", display: "inline-block" }}>
                      <img
                        src="../Images/GovtSchemes.png"
                        className="card-img-top navCardsImg"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5
                          className="card-title pt-2 fw-bold"
                          style={{ textDecoration: "initial", color: "black" }}>
                          Govt Schemes
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/*--------------- search in your city   ----------------*/}
            <div className="container">
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="submit"
                  className="btn loginbtn me-md-2"
                  onClick={handleSpeak}>
                  Read aloud
                  <img style={{ height: 20 }} src="../Images/Speaker2.png" />
                </button>
                <button
                  type="submit"
                  className="btn loginbtn me-md-2"
                  onClick={handleStop}>
                  Stop reading
                </button>
                <div>
                  {" "}
                  <Link to="/addplaces">
                    <button className="btn loginbtn me-md-2">
                      Add new place
                    </button>
                  </Link>
                  {/* <button
                    className="btn loginbtn me-md-2"
                    // onClick={handleShowClick}
                  >
                    Add new place
                  </button> */}
                  {/* {goToAddPlaces && <AddPlaces />} */}
                </div>
              </div>

              <div ref={contentRef}>
                <div className="pb-5">
                  <form action="action_page.php">
                    Enter your city to see the accessile places :
                    <input
                      className="w-25"
                      type="text"
                      placeholder="Search the places in your city"
                      name="search"
                    />
                    <button className="w-20" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                <div className="card">
                  <div>
                    <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
                      <Tab eventKey="one" title="See the list of places">
                        <div className="p-3">
                          <div className="row">
                            {data.map((row) => (
                              <div className="col-md-6">
                                <div className="card mb-3 shadow">
                                  <div className="row g-0">
                                    <div className="col-md-4">
                                      <img
                                        src="../Images/place1.jpg"
                                        className="img-fluid rounded-start"
                                        alt="..."
                                        style={{ height: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-8">
                                      <div className="card-body">
                                        <h5 className="card-title">
                                          {row.nameOfPlace}
                                        </h5>
                                        <p className="card-text">
                                          {row.description}
                                        </p>
                                        <p>{row.location}</p>
                                        <p>
                                          <a
                                            href={row.linkOnMap}
                                            target="_blank">
                                            View this place on map
                                          </a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Tab>
                      <Tab
                        eventKey="two"
                        title="See on Map"
                        className="p-3 navtabsplaces">
                        <div className="  navtabsplaces">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30695877.226850357!2d64.44971223914894!3d20.08997399421576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1677579451317!5m2!1sen!2sin"
                            width="100%"
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
