import React, { useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth0 } from '@auth0/auth0-react'
import { inject, observer } from 'mobx-react'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBBtn,
} from 'mdbreact'
import './Navbar.css'

const NavbarPage = inject("generalStore")(observer(props => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const toggle = () => setIsOpen(!isOpen)

  const currentUserRole = props.generalStore.currentUser.userRole ? props.generalStore.currentUser.userRole.toLowerCase() : null;
  console.log(props.generalStore.currentUser);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    })

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MDBNavbar color='primary' dark expand='md'>
      <MDBNavbarBrand>
        <img
          src='/screenters-logo.png'
          className='scr-logo float-left'
          alt='aligment'
        />
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggle} />
      <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to='/' exact>
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/about' exact>
              About
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/creators' exact>
              Creators
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          {!isAuthenticated && (
            <MDBNavItem>
              <MDBBtn
                id='qsLoginBtn'
                color='primary'
                className='btn-margin'
                onClick={() => loginWithRedirect()}
              >
                Log in
              </MDBBtn>
            </MDBNavItem>
          )}
          {isAuthenticated && (
            <MDBDropdown nav inNavbar>
              <MDBDropdownToggle nav caret id='profileDropDown'>
                <img
                  src={user.picture}
                  alt='Profile'
                  className='nav-user-profile rounded-circle'
                  width='50'
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem header>{user.name}</MDBDropdownItem>
                <MDBDropdownItem href={`/${currentUserRole}/${user.sub}`}>
                  <FontAwesomeIcon icon='user' className='mr-3' /> Profile
                </MDBDropdownItem>
                <MDBDropdownItem
                  id='qsLogoutBtn'
                  onClick={() => logoutWithRedirect()}
                >
                  <FontAwesomeIcon icon='power-off' className='mr-3' /> Log out
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          )}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}))

export default NavbarPage
