import React, { Component } from "react";
import Menu from "../components/Menu";
import About from "../components/About";
import Footer  from "../components/Footer";
class AboutPage extends Component {
  render() {
    return (
      <>
        <Menu />
        <About />
        <Footer />
      </>
    );
  }
}

export default AboutPage;
