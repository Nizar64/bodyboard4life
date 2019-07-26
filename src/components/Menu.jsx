import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" style={{ color: "#22a6b3", fontSize: "60px" }} tag={Link}
                  to="/">
            BODYBOARD 4 LIFE
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                
                <NavLink
                  href="#t2"
                  style={{ color: "black", fontSize: "20px" }}
                  tag={Link}
                  to="/Carousel/"
                >
                  Images
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href=" #t3"
                  style={{ color: "black", fontSize: "20px" }}
                  tag={Link}
                  to="/Videos/"
                >
                  Videos
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  style={{ color: "black", fontSize: "20px" }}
                >
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    href="#t5"
                    target="new"
                    style={{ color: "#22a6b3", fontSize: "20px" }}
                    tag={Link}
                  to="/About/"
                  >
                    About
                  </DropdownItem>
                  
                  <DropdownItem
                    href="#t6"
                    target="new"
                    style={{ color: "#22a6b3", fontSize: "20px" }}
                    tag={Link}
                    to="/Contact/"
                  >
                   Contact
                  </DropdownItem>
                  <DropdownItem
                    href="http://maree.info/140"
                    target="new"
                    style={{ color: "#22a6b3", fontSize: "20px" }}
                  >
                    Tide Infos
                  </DropdownItem>
                  <DropdownItem
                    href="https://www.viewsurf.com/univers/surf/vue/5892-france-aquitaine-ondres-la-plage"
                    target="new"
                    style={{ color: "#22a6b3", fontSize: "20px" }}
                  >
                    Webcam Life
                  </DropdownItem>
                  
                  
                  <DropdownItem
                    href="https://apbtour.com/"
                    target="new"
                    style={{ color: "#22a6b3", fontSize: "20px" }}
                  >
                    Bodyboard World Tour [APB]
                  </DropdownItem> 

                  <DropdownItem
                    href="#t6"
                    target="new"
                    style={{ color: "#22a6b3", fontSize: "20px" }}
                    tag={Link}
                    to="/Boards/"
                  >
                   Some New Boards
                  </DropdownItem>
                

                  <DropdownItem divider />
                  <DropdownItem
                    href="https://www.bodyboardshop.com.au/ "
                    style={{ color: "#22a6b3", fontSize: "20px" }}
                    target="new"
                  >
                    Bodyboard Shop
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
