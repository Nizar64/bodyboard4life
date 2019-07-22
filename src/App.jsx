import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./menu";
import Carousel from "./carousel";
import "../node_modules/video-react/dist/video-react.css"; 
import Sponsors from "./components/Sponsors.jsx"
//import { Player } from 'video-react';
import YouTube from "./Youtube";
import Riders from "./Riders";
import About from "./Image/about.png";
import Boards from "./components/Boards";
import Formulaire from "./formulaire.js";
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import VS2020 from "./Image/VS2020.jpg";
// import TheVersus from "./Image/TheVersus.png";
// import Reeflex from "./Image/Reeflex.jpg";
// import HP from "./Image/HP.png";
function App() {
  return (
    <div className="Body">
      <Menu />
      <Carousel id="car" />
      <Sponsors />
      

      <h1
        style={{
          marginLeft: "30px",
          marginTop: "20px",
          height: "100%",
          fontSize: "60px",
          color: "white"
        }}
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
        style={{ marginLeft: "90px", marginBottom: "20px", marginTop: "20px" }}
        src={About}
        alt="logo"
      />
      <h4
        style={{
          marginLeft: "90px",
          marginRight: "90px",
          marginBottom: "20px",
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

      <div>
        <h1
          id="t2"
          style={{
            marginLeft: "30px",
            marginTop: "20px",
            height: "100%",
            fontSize: "60px",
            color: "white"
          }}
        >
          Videos
        </h1>
        <hr
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "20px",
            width: "97%",
            color: "white",
            backgroundColor: "white",
            height: "1px"
          }}
        />
      </div>

      <br />
      <YouTube />
      <h1
        style={{
          marginLeft: "30px",
          marginTop: "20px",
          height: "100%",
          fontSize: "60px",
          color: "white"
        }}
      >
        Riders
      </h1>
      <hr
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "20px",
          width: "97%",
          color: "white",
          backgroundColor: "white",
          height: "1px"
        }}
      />
      <Riders />
      <h1
        style={{
          marginLeft: "30px",
          marginTop: "20px",
          height: "100%",
          fontSize: "60px",
          color: "white"
        }}
      >
        Boards
      </h1>
      <hr
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "20px",
          width: "97%",
          color: "white",
          backgroundColor: "white",
          height: "1px"
        }}
      />
      <Boards />

      <img
        style={{
          marginLeft: "25px",
          marginRight: "20px",
          height: "60% ",
          width: "96%",
          justifyContent: "center"
        }}
        src={VS2020}
        alt="logo"
      />

      <hr
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "20px",
          width: "97%",
          color: "white",
          backgroundColor: "white",
          height: "1px"
        }}
      />
      <Formulaire />
    </div>
  );
}

//Player
//playsInline
//poster="/assets/poster.png"
//src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
// />

//}

export default App;
