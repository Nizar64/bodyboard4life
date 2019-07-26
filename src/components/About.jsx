import React, { Component } from "react";
import Wave from '../Image/Wave.png';
import { Link } from "react-router-dom";
class About extends Component {
  render() {
    return (
        
        
        <div className="About">
        <h1
          style={{
            marginLeft: "30px",
            marginTop: "20px",
            height: "100%",
            fontSize: "60px",
            color: "white"
          }}
          tag={Link}
          to="/About/"
        >
          About
        </h1>
        <hr
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            width: "97%",
            color: "white",
            backgroundColor: "white",
            height: "1px"
          }}
        />

        <br />
        <img
          style={{
            marginLeft: "90px",
            marginBottom: "40px",
            marginTop: "20px"
          }}
          src={Wave}
          alt="logo"
        />
        <h4
          style={{
            marginLeft: "90px",
            marginRight: "90px",
            // marginBottom: "60px",
            color: "white"
          }}
        >
          Bodyboard4Life, if not the oldest and most recognized bodyboarding
          company, is undoubtedly the most informative and supportive. <br />{" "}
          World owned and operated, Bodyboard4life staff stand devoted in
          delivering not only the best products available, but also the best
          information available on anything and everything both bodyboard and
          ocean related.
        </h4>
  

    
      </div>
    );
  }
}

export default About;
