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
 
} from "reactstrap";
import Dave from "../Image/Dave.jpg";
import nmd from "../Image/nmd.jpg";
import triny from "../Image/triny.jpg";
import science from "../Image/science.jpg";
import VS2020 from "../Image/VS2020.jpg";


class Board extends Component {
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

        <CardDeck
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "20px"
          }}
        >
          <Card style={{ width: "4OOpx", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}>
              VS Dave Winchester
            </CardHeader>
            <CardBody>
              <CardImg
                width="200"
                height="220"
                src={Dave}
                alt="Card image cap"
              />
              <CardTitle> Core Polypro</CardTitle>
              <CardSubtitle> SIZE: 41 Inches</CardSubtitle>
              <CardText />
            </CardBody>
          </Card>

          <Card style={{ width: "400px", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}>NMD Ben Player</CardHeader>
            <CardBody>
              <CardImg
                width="200"
                height="220"
                src={nmd}
                alt="Card image cap"
              />
              <CardTitle>Core Polypro</CardTitle>
              <CardSubtitle>Size: 42 Inches</CardSubtitle>
              <CardText />
            </CardBody>
          </Card>

          <Card style={{ width: "400px", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}>
              {" "}
              NMD BP TRINITY
            </CardHeader>
            <CardBody>
              <CardImg
                width="200"
                height="220"
                src={triny}
                alt="Card image cap"
              />
              <CardTitle> Core PARABOLIC (PFS3)</CardTitle>
              <CardSubtitle>Size: 41.5 Inches</CardSubtitle>
              <CardText />
            </CardBody>
          </Card>
          <Card style={{ width: "400px", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}>
              Science Mike Stewart
            </CardHeader>
            <CardBody>
              <CardImg
                width="200"
                height="220"
                src={science}
                alt="Card image cap"
              />
              <CardTitle>Core Polypro</CardTitle>
              <CardSubtitle> Size: 42 Inches</CardSubtitle>
              <CardText />
            </CardBody>
          </Card>
        </CardDeck>

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

        
      </div>
    );
  }
}


export default Board;
