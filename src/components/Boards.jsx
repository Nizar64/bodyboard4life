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
import Dave from "../Image/Dave.jpg";
import nmd from "../Image/nmd.jpg";
import triny from "../Image/triny.jpg";
import science from "../Image/science.jpg";

//import Shane from "./Image/Shane.jpg";

//import Boards from "./components/Boards";
//import dataRiders from "./bodyBoarderProfessionnel.json";

class Board extends Component {
  render() {
    return (
      <div>
            
            
             <CardDeck
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "20px"
          }}
          >
          <Card style={{ width: "4OOpx", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}>VS Dave Winchester</CardHeader>
            <CardBody>
              <CardImg
                width="200"
                height="220"
                src={Dave}
                alt="Card image cap"
                />
              <CardTitle> Core Polypro</CardTitle>
              <CardSubtitle> SIZE: 41 Inches</CardSubtitle>
              <CardText>
                
              </CardText>
              
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
              <CardText>
                
                
              </CardText>
             
            </CardBody>
          </Card>

          <Card style={{ width: "400px", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}> NMD BP TRINITY</CardHeader>
            <CardBody>
              <CardImg
                width="200"
                height="220"
                src={triny}
                alt="Card image cap"
                />
              <CardTitle> Core PARABOLIC (PFS3)</CardTitle>
              <CardSubtitle>Size: 41.5 Inches</CardSubtitle>
              <CardText>
               
                
              </CardText>
              
            </CardBody>
          </Card>
          <Card style={{ width: "400px", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}>Science Mike Stewart</CardHeader>
            <CardBody>
              <CardImg
                width="200"
                height="220"
                src={science}
                alt="Card image cap"
                />
              <CardTitle>Core Polypro</CardTitle>
              <CardSubtitle> Size: 42 Inches</CardSubtitle>
              <CardText>
                
                
              </CardText>
              
            </CardBody>
          </Card>
        </CardDeck> 

      </div>
    );
  }
}


 /* <CardDeck
    style={{
      marginLeft: "20px",
      marginRight: "20px",
      marginBottom: "100px"
    }}
  >
    {dataRiders.data.map((element, index, array) => {
      return (
        <Card style={{ width: "4OOpx", height: "340px" }} key={element.name}>
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
{*/
export default Board;