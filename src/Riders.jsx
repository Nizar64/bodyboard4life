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
import RiderInfo from "./components/RiderInfo";
import dataRiders from "./bodyBoarderProfessionnel.json";

class Riders extends Component {
  render() {
    return (
      <div>
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
        {/* <CardDeck
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "100px"
          }}
        >
          <Card style={{ width: "4OOpx", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}>Michael Novy</CardHeader>
            <CardBody>
              <CardImg
                width="245"
                height="141"
                src={Novy}
                alt="Card image cap"
              />
              <CardTitle>Michael Novy</CardTitle>
              <CardSubtitle>DOB: 16/03/1985</CardSubtitle>
              <CardText>
                
              </CardText>
              <RiderInfo
                buttonLabel="Infos"
                textBody=" My Current Board: Nomad NOVY (PP) 41 inches
                           Local Wave: Crackneck
                           instagram: @michaelnovy "
                textTitle="Aww yeah I'm Michael Novy"
              />
            </CardBody>
          </Card>

          <Card style={{ width: "400px", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}>Cade Sharp</CardHeader>
            <CardBody>
              <CardImg
                width="245"
                height="141"
                src={Cade}
                alt="Card image cap"
              />
              <CardTitle>Cade Sharp</CardTitle>
              <CardSubtitle>DOB: 30/07/1988</CardSubtitle>
              <CardText>
                
                
              </CardText>
              <RiderInfo
                buttonLabel="Infos"
                textBody=" My Current Board: VS Dave Winchester (pp) 42 inches
                           Local Wave: Dickies
                           instagram: @cadesharp "
                textTitle="Aww yeah I'm Cade sharp"
              />
            </CardBody>
          </Card>

          <Card style={{ width: "400px", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}>Calen Jordan</CardHeader>
            <CardBody>
              <CardImg
                width="245"
                height="141"
                src={Calen}
                alt="Card image cap"
              />
              <CardTitle> Calen Jordan</CardTitle>
              <CardSubtitle>DOB: 02/08/1997</CardSubtitle>
              <CardText>
               
                
              </CardText>
              <RiderInfo
                buttonLabel="Infos"
                board=" My Current Board: Nomad NOVY (PP) 41" 
                wave="Local Wave: palm Beach" 
                insta="instagram: @mcalenjordan"
                textTitle="Aww yeah I'm Calen Jordan  "
              />
            </CardBody>
          </Card>
          <Card style={{ width: "400px", height: "340px" }}>
            <CardHeader style={{ color: "#22a6b3" }}>Shane Ackerman</CardHeader>
            <CardBody>
              <CardImg
                width="245"
                height="141"
                src={Shane}
                alt="Card image cap"
              />
              <CardTitle>Shane Ackerman</CardTitle>
              <CardSubtitle> DOB:12/12/1992</CardSubtitle>
              <CardText>
                
                
              </CardText>
              <RiderInfo
                buttonLabel="Infos"
                textBody=" My Current Board: Nomad NOVY (PP) 41 
                 instagram: @michaelnovy "
                textTitle="Aww yeah I'm Michael Novy"
              />
            </CardBody>
          </Card>
        </CardDeck> */}
      </div>
    );
  }
}

export default Riders;
