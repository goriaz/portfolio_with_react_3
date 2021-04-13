import React, { Component } from 'react'

export default class Bannar extends Component {
    render() {
        return (
            <div>

                   {/* <!-- start of .cover-v1 --> */}

                   <div className="cover-v1 jarallax home-section" style={{backgroundImage:`url("../../../assets/images/cover_bg_2.jpg")`}}  id="home-section">
                            <div className="container">
                              <div className="row align-items-center">
                                  
                                <div className="col-md-7 mx-auto text-center">
                                  <h1 className="heading gsap-reveal-hero">Unfold</h1>
                                  <h2 className="subheading gsap-reveal-hero">I’m Glenn Chapman Hoyer A Product Designer Based In San Francisco</h2>
                                </div>

                              </div>
                            </div>


                            <a href="#portfolio-section" className="mouse-wrap smoothscroll">
                              <span className="mouse">
                                <span className="scroll"></span>
                              </span>
                              <span className="mouse-label">Scroll</span>
                            </a>

                    </div>
      {/* <!-- END .cover-v1 --> */}
                
            </div>
        )
    }
}
