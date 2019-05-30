import React, { Component } from 'react'


export default class Home extends Component {
   render() {
     return (
<React.Fragment> 

       <div className="fixed-bg" ></div>
  <article id="Info" className="page-section">



      <div className="row justify-content-center">

        <section className="col-sm-12 col-md-10 col-lg-8 text-center">

<div id="indexPageDiv">

   <h2 className="mainFont" >DETAILED PROCEDURES</h2>
   <h2 className="mainFont" >USING AUTOCAD<span className="trademark">®</span>  CIVIL CD<span className="trademark">®</span> </h2>
    <h2 className="mainFont" >FOR  DESIGN AND PREPERATION</h2>
    <h2 className="mainFont" >OF CONSTRUCTION DRAWINGS</h2>
    <h3 className="SecondaryFont" >(ROAD, DRAINAGE, SEWER, &amp;WATER)</h3>




</div>
            </section>


      </div>

  </article>



       <div className="fixed-bg"></div>

       <article id="Support" className="page-section">

        <div className="d-flex justify-content-center " >
<a href="/products">    
        <div className= "productDiv mr-5" >
          
            <h4><strong>INSTRUCTION MANUALS</strong></h4>
            <br></br>
            <h5>DETAILED PROCEDURES</h5>
            <h5>USING AUTOCAD CIVIL 3D</h5>
            <h5>FOR DESIGN AND PREPERATION OF</h5>
            <h5>CONSTRUCTION DRAWINGS</h5>
<br></br>
              <h6>Gerald Atkins</h6>

<br></br>
<div id="footerIM" className="d-flex justify-content-around">
    
    <div id="left">
       <h6>Part 1</h6>
       <h6>Civil Design</h6>
       <h6>With Tuturial</h6>  
    </div>
    <div id="right">
       <h6>Part 2</h6>
       <h6>Civil Design</h6>
       <h6>Without Tuturial</h6>  
    </div>         
</div>
    
        </div>
</a> 
<a href="/products">
        <div className= "productDiv" >

        
        
            <h4><strong>TUTORIAL DRAWINGS</strong></h4>
            <br></br>

            <h5>KINKEAD AVENUE</h5>
            <h5>CONSTRUCTION DRAWINGS</h5>
            <h5>ROAD, DRAINAGE, SEWER AND WATER IMPROVEMENTS</h5>
         <br></br>
              <h6>Gerald Atkins</h6>
       <br></br>     
            <div id="footerIM" className="d-flex justify-content-around">
    
    <div id="left">
       <h6>Template</h6>
       <h6>Drawings</h6> 
    </div>
    <div id="right">
       <h6>Design</h6>
       <h6>Drawings</h6> 
    </div>  
    <div id="">
       <h6>Reference</h6>
       <h6>Drawings</h6> 
    </div>
    <div id="">
       <h6>Production</h6>
       <h6>Drawings</h6> 
    </div>  
</div>


        </div>
</a>
        </div>
       </article>
<div className="fixed-bg"></div>
<article id="Contact" className="page-section">

    <div className="layout-nested container py-5">

      <div className="row justify-content-center">



      <section className="sectionRight mt-2">
        <div id="form-messages"></div>
        <h2>Contact</h2>
<form id="contact-form" method="post">
      <h4>Name:</h4>
      <input type="text"  id="name-input" placeholder="Enter name here…" className="form-control"  /><br/>
      <h4>Email:</h4>
      <input type="email"  id="email-input" placeholder="Enter email here…" className="form-control" /><br/>
      <h4>How can we help you?</h4>
      <textarea id="description-input" rows="3" placeholder="Enter your message…" className="form-control" ></textarea><br/>
      <div className="g-recaptcha" data-sitekey="6Lc7cVMUAAAAAM1yxf64wrmO8gvi8A1oQ_ead1ys" className="form-control" ></div>
      <button type="button" onClick="submitToAPI(event)" className="btn btn-lg" >Submit</button>
</form>

      </section>
      </div>
    </div>
  </article>

<div className="fixed-bg"></div>
<article id="About" className="page-section">

    <div className="layout-nested container py-5">

      <div className="row justify-content-center">

        <section className="col-sm-10 col-md-10 col-lg-8 text-center">

          <div className="row align-items-center justify-content-center">

            <section className="col-lg-9">
              <h2 className="layout-title">About The Author</h2>
              <p>Gerald W. Atkins is a Registered Professional Civil Engineer in Arkansas and Oklahoma. Gerald is the owner of Atkins Engineering, Inc in Lavaca, Arkansas and has acquired over 55 years of experience in the design and preparation of drawings and reports for Road, Storm Drain, Sewer and Water Improvement Projects.</p>
<p>Gerald has been working with AutoCAD since 1992 and Civil 3D since 2008. Gerald
retired in 2015 and has spent the last 5 years writing the Instruction Manual and
preparing the Tutorial Drawing for ‘Detailed Procedures Using AutoCAD Civil 3D for Design and Preparation of Construction Drawings’</p>
            </section>
          </div>

        </section>


      </div>
    </div>
  </article>

</React.Fragment> 
     ) 
   }

}