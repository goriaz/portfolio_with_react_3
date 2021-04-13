import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>



                       {/* skills-section started */}

      <div className="unslate_co--section section-counter" id="skills-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">My Skills</span></h2>
            <span className="gsap-reveal"><img src="../../../assets/images/divider.png" alt="divider" width="76"/></span>
          </div>


          <div className="row pt-5">
            <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3 aos-init aos-animate " data-aos="fade-up" data-aos-delay="0">
              <div className="counter-v1 text-center">
                <span className="number-wrap">
                  <span className="number number-counter" data-number="90">0</span>
                  <span className="append-text">%</span>
                </span>
                <span className="counter-label">WordPress</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="counter-v1 text-center">
                <span className="number-wrap">
                  <span className="number number-counter" data-number="99">0</span>
                  <span className="append-text">%</span>
                </span>
                <span className="counter-label">HTML/CSS</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="counter-v1 text-center">
                <span className="number-wrap">
                  <span className="number number-counter" data-number="95">0</span>
                  <span className="append-text">%</span>
                </span>
                <span className="counter-label">jQuery</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="counter-v1 text-center">
                <span className="number-wrap">
                  <span className="number number-counter" data-number="100">0</span>
                  <span className="append-text">%</span>
                </span>
                <span className="counter-label">Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills-section ended */}








                
            </div>
        )
    }
}
