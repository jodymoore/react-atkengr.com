import React, { Component } from 'react'
import  { Link } from 'react-router-dom'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonContainer } from './Button'


export default class Navbar extends Component {
   render() {
     return (

       <NavWrapper className="navbar family-sans text-uppercase navbar navbar-expand-md navbar-light fixed-top">

         <div className="container-fluid">
        
           <a href="/"> <h4 id="titleHeader"><span>A</span>TKINS <span>E</span>NGINEERING, <span>I</span>NC</h4> </a> 

           <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myTogglerNav" aria-controls="#myTogglerNav"
            aria-label="Toggle Navigation">
           <span className="navbar-toggler-icon"></span>
           </button>

           <section className="collapse navbar-collapse" id="myTogglerNav">
	           <div className="navbar-nav ml-auto">
		            <a className="nav-item nav-link" href="/">Home</a>
		            <a className="nav-item nav-link" href="#Info">Info</a>
		            <a className="nav-item nav-link" href="/products">Products</a>
		            <a className="nav-item nav-link" href="#Contact">Contact</a>
		            <a className="nav-item nav-link" href="#About">About</a>
	           </div>
           </section>

         </div>

         <Link to="/cart" id="cartLink" className="ml-auto">
           <ButtonContainer>
           <span className="mr-2">
              <i className="fas fa-cart-plus" />
           </span>
             My Cart
           </ButtonContainer>
 
         </Link>
       </NavWrapper>
     ) 
   }

}

const NavWrapper = styled.nav `

  background: white;

 `;

