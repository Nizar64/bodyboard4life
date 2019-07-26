
import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div>
      

        <Form className="p-5">
          <FormGroup>
            <Label for="exampleEmail">*Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="your Email here"
              style={{ height: "40px", width: "280px" }}
            />
            <br />

            <Label for="Phone">*Phone</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="your Phone here"
              style={{ height: "40px", width: "280px" }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">*Text Area</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              style={{ height: "240px", width: "280px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Check me out
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
       
      </div>
    );
  }
}