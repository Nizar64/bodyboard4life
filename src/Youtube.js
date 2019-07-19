import React, { Component } from "react";
import { CardDeck, Card, CardBody, CardHeader } from "reactstrap";
class Youtube extends Component {
  render() {
    return (
      <div className="Youtube">
        <div
          className="Ligne1"
          style={{ marginLeft: "20px", marginRight: "20px" }}
        >
          <CardDeck>
            <Card>
              <CardHeader style={{ color: "#22a6b3" }}>
                {" "}
                Jamie O'Brien BODYBOARDING{" "}
              </CardHeader>
              <CardBody>
                <iframe
                  width="245"
                  height="141"
                  title="video_Youtube"
                  src="https://www.youtube.com/embed/k6jNU9qVYAI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; 
        encrypted-media; gyroscope; 
        picture-in-picture"
                  allowFullScreen
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader style={{ color: "#22a6b3" }}>
                
                JEFF HUBBARD MAUI
              </CardHeader>
              <CardBody>
                <iframe
                  width="245"
                  height="141"
                  title="video_Youtube"
                  src="https://www.youtube.com/embed/Shrcq2kGy4o"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader style={{ color: "#22a6b3" }}>
                {" "}
                BRAHIM IDDOUCH{" "}
              </CardHeader>
              <CardBody>
                <iframe
                  width="245"
                  height="141"
                  title="video_Youtube"
                  src="https://www.youtube.com/embed/XhLUxWdMM3E"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader style={{ color: "#22a6b3" }}> ANAS ADLI</CardHeader>
              <CardBody>
                <iframe
                  width="245"
                  height="141"
                  title="video_Youtube"
                  src="https://www.youtube.com/embed/nWJmNj9vQ-U"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </CardBody>
            </Card>
          </CardDeck>
        </div>
        <div
          className="Ligne2"
          style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}
        >
          <CardDeck>
            <Card>
              <CardHeader style={{ color: "#22a6b3" }}>
                LEWY FiNNEGAN
              </CardHeader>
              <CardBody>
                <iframe
                 width="245"
                  height="141"
                  title="video_Youtube"
                  src="https://www.youtube.com/embed/A6pJyrkSq50"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader style={{ color: "#22a6b3" }}>
                IAIN CAMPBELL
              </CardHeader>
              <CardBody>
                <iframe
                  width="245"
                  height="141"
                  title="video_Youtube"
                  src="https://www.youtube.com/embed/3N06tjVv6cM"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader style={{ color: "#22a6b3" }}>
                {" "}
                DALLAS SINGER
              </CardHeader>
              <CardBody>
                <iframe
                  width="245"
                  height="141"
                  title="video_Youtube"
                  src="https://www.youtube.com/embed/HvgFT8QbUAU"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader style={{ color: "#22a6b3" }}>JACK STONNE</CardHeader>
              <CardBody>
                <iframe
                  width="245"
                  height="141"
                  title="video_Youtube"
                  src="https://www.youtube.com/embed/p2QVlLTecjg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default Youtube;
