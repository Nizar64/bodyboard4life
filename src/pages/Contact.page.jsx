
import React from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import Footer  from "../components/Footer";
export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Contact/>
        <Footer />
      </div>
    );
  }
}
