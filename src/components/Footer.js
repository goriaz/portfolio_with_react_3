import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                


              


                               {/* start of contact section */}


      <div className="unslate_co--section" id="contact-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">Get In Touch</span></h2>
            <span className="gsap-reveal"><img src="../../../assets/images/divider.png" alt="divider" width="76"/></span>
          </div>


          <div className="row justify-content-between">
            
            <div className="col-md-6">
              <form method="post" className="form-outline-style-v1" id="contactForm">
                <div className="form-group row mb-0">

                  <div className="col-lg-6 form-group gsap-reveal">
                    <label for="name">Name</label>
                    <input name="name" type="text" className="form-control" id="name"/>
                  </div>
                  <div className="col-lg-6 form-group gsap-reveal">
                    <label for="email">Email</label>
                    <input name="email" type="email" className="form-control" id="email"/>
                  </div>
                  <div className="col-lg-12 form-group gsap-reveal">
                    <label for="message">Write your message...</label>
                    <textarea name="message" id="message" cols="30" rows="7" className="form-control"></textarea>
                  </div>
                </div>
                <div className="form-group row gsap-reveal">
                    <div className="col-md-12 d-flex align-items-center">
                      <input type="submit" className="btn btn-outline-pill btn-custom-light mr-3" value="Send Message"/>
                      <span className="submitting"></span>
                    </div>
                  </div>
              </form>
              <div id="form-message-warning" className="mt-4"></div> 
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>

            </div>

            <div className="col-md-4">
              <div className="contact-info-v1">
                <div className="gsap-reveal d-block">
                  <span className="d-block contact-info-label">Email</span>
                  <a href="#" className="contact-info-val">info@yourdomain.com</a>
                </div>
                <div className="gsap-reveal d-block">
                  <span className="d-block contact-info-label">Phone</span>
                  <a href="#" className="contact-info-val">+12 345 6789 012</a>
                </div>
                <div className="gsap-reveal d-block">
                  <span className="d-block contact-info-label">Address</span>
                  <address className="contact-info-val">273 South Riverview Rd. <br/> New York, NY 10011</address>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      
      {/* End of contact section */}












            </div>
        )
    }
}
