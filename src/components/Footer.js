
import React, { Component } from 'react'

export default class Footer extends Component {
   render() {
     return (
		  <footer className="site-footer d-flex justify-content-center">

		    <section className="layout-social py-5">

		      <a className=" py-2" href="https://twitter.com/">
		        <i className="layout-icon fab fa-twitter"></i>
		      </a>
		      <a className=" px-2" href="https://facebook.com/">
		        <i className="layout-icon fab fa-facebook"></i>
		      </a>
		      <a className=" px-2" href="https://linkedin.com/">
		        <i className="layout-icon fab fa-linkedin"></i>
		      </a>
		      <a className=" px-2" href="https://github.com/">
		        <i className="layout-icon fab fa-github"></i>
		      </a>
		      <a className=" px-2" href="https://plus.google.com/">
		        <i className="layout-icon fab fa-google-plus"></i>
		      </a>
		      <a className=" px-2" href="https://dribbble.com/">
		        <i className="layout-icon fab fa-dribbble"></i>
		      </a>
		      <a className=" px-2" href="https://www.flickr.com">
		        <i className="layout-icon fab fa-flickr"></i>
		      </a>
		      <a className=" px-2" href="https://www.youtube.com">
		        <i className="layout-icon fab fa-youtube"></i>
		      </a>

		    </section>

		  </footer>

     ) 
   }

}
