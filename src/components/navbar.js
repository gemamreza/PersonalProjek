import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
  
class Header extends React.Component {

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
            <NavbarBrand href="/"><img src={require('./../support/img/icon.png')} width='50px' height='50px' alt='navbrand'/></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to='/login' style={{ textDecoration:'none'}}><NavLink className='btn border-secondary mr-1' style={{fontSize:"14px"}}>Login<i class="far fa-hand-point-left"></i></NavLink></Link>
                </NavItem>
                <NavItem>
                  <Link to='/register' style={{ textDecoration:'none'}}><NavLink className='btn border-secondary mr-1' style={{fontSize:"14px"}}>Register<i class="far fa-registered"></i></NavLink></Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                      Menu 
                 </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                     Logout
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
export default Header