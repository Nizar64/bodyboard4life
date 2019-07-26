import React, { Component } from "react";
import TheVersus from "../Image/TheVersus.png";
import Reeflex from "../Image/Reeflex.jpg";
import HP from "../Image/HP.png";

class Footer extends Component {
    render() {
      return (
        <div>
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
          <h5 className="p-5">
              
              Bodyboard4Life  By Slama Nizar 25/07/2019
          </h5>
          
        </div>
      );
    }
  }
  
  export default Footer;