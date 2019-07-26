import React, { Component } from "react";
import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import Sponsors from "../components/Sponsors";
import About from "../components/About";
import Videos from "../components/Videos";
import Riders from "../components/Riders";
import Boards from "../components/Boards";
import Footer from "../components/Footer";
class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Carousel id="car" />
        <Sponsors />
        <About />
        <Videos />
        <Riders />
        <Boards />
        <Footer />
      </div>
    );
  }
}

export default Home;
