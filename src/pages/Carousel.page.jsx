import React, { Component } from "react";
import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import Footer  from "../components/Footer";
class CarouselPage extends Component {
  render() {
    return (
      <>
        <Menu />
        <Carousel />
        <Footer />
      </>
    );
  }
}

export default CarouselPage;