import React, { Component } from "react";
import Menu from "../components/Menu";
import Boards from "../components/Boards";
import Footer  from "../components/Footer";
class BoardPage extends Component {
  render() {
    return (
      <>
       <Menu />
        <Boards />
        <Footer />
      </>
    );
  }
}

export default BoardPage;