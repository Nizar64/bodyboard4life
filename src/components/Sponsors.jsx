import React, { Component } from "react";
import TheVersus from "../Image/TheVersus.png";
import Reeflex from "../Image/Reeflex.jpg";
import HP from "../Image/HP.png";

class Sponsors extends Component {
  render() {
    return (
      <div>
        <img
          style={{
            marginLeft: "90px",
            marginBottom: "20px",
            marginTop: "2px",
            width: "7%",
            height: "7%"
          }}
          src={TheVersus}
          alt="logo"
        />

        <img
          style={{
            marginLeft: "380px",
            marginBottom: "20px",
            marginTop: "1px",
            width: "12%",
            height: "12%"
          }}
          src={Reeflex}
          alt="logo"
        />

        <img
          style={{
            marginLeft: "340px",
            marginBottom: "20px",
            marginTop: "2px",
            width: "12%",
            height: "12%"
          }}
          src={HP}
          alt="logo"
        />
      </div>
    );
  }
}

export default Sponsors;
