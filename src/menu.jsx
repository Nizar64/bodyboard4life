import React from 'react';
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
  DropdownItem } from 'reactstrap';

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
        <Navbar color="light" light expand="md" fixed="top" >
          <NavbarBrand href="/" style={{color: " black",fontSize:"60px"}}>BODYBOARD 4 LIFE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#t2"style= {{color: "#535c68",fontSize:"20px" }}>Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://fr.surf-forecast.com/breaks/I-Ibarritz/forecasts/latest/six_day"style= {{color: "aqua",fontSize:"20px" }}>Bodyboard FORECAST</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style= {{color: "dark-blue",fontSize:"20px" }}>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="https://www.viewsurf.com/univers/surf/vue/5892-france-aquitaine-ondres-la-plage" target="new" style= {{color: "#30336b",fontSize:"20px" }}>
                    Spot Live Webcam 
                  </DropdownItem>
                  <DropdownItem href="http://maree.info/140" target="new"style= {{color:"#f9ca24"}}>
                    Tide Infos
                  </DropdownItem>
                  <DropdownItem href="https://apbtour.com/" target="new"style={{color:"#badc58"}} >
                    Bodyboard World Tour [APB]
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href= "https://www.bodyboardshop.com.au/ " style= {{color: "#f0932b",fontSize:"20px" }} target= "new">
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