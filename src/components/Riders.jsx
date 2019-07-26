import React, { Component } from "react";
import {
  CardDeck,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText
  //Button
} from "reactstrap";
//import About from "./Image/about.png";
//import Novy from "./Image/Novy.jpg";
//import Calen from "./Image/Calen.jpg";
//import Cade from "./Image/Cade.jpg";
//import Shane from "./Image/Shane.jpg";
import RiderInfo from "./RiderInfo";
import dataRiders from "../bodyBoarderProfessionnel.json";

class Riders extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            marginLeft: "30px",
            marginTop: "120px",
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

        {
          <CardDeck
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              marginBottom: "100px"
            }}
          >
            {dataRiders.data.map((element, index, array) => {
              return (
                <Card
                  style={{ width: "4OOpx", height: "340px" }}
                  key={element.name}
                >
                  <CardHeader style={{ color: "#22a6b3" }}>
                    {element.name}
                  </CardHeader>
                  <CardBody>
                    <CardImg
                      width="245"
                      height="141"
                      src={element.image}
                      alt="Card image cap"
                    />
                    <CardTitle>{element.name}</CardTitle>
                    <CardSubtitle>{element.dateOfBirth}</CardSubtitle>
                    <CardText />
                    <RiderInfo
                      buttonLabel="Infos"
                      board={`Board: ${element.currentBoard}`}
                      wave={`Wave: ${element.localWave}`}
                      insta={`Intagram: ${element.instagram}`}
                      textTitle={`Aww Yeah I'm ${element.name}`}
                    />
                  </CardBody>
                </Card>
              );
            })}
          </CardDeck>
        }
        
      </div>
    );
  }
}

export default Riders;
