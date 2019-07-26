import React, { Component } from "react";
import Menu from "../components/Menu";
import Videos from "../components/Videos";
import Footer  from "../components/Footer";
class VideosPage extends Component {
  render() {
    return (
      <>
        <Menu />
        <Videos />
        <Footer />
      </>
    );
  }
}

export default VideosPage;