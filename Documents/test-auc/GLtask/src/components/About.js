import React, { Component } from 'react';
import'../styles/About.scss'

import avatar from '../images/avatar.png';
const About = () => {
        return (
            <section className="about" id="about">
              <div className="about__wrapper">
                <h2 className="about__header">
                  ABOUT
                </h2>
                <div className="about__content">
                  <div className="about__goals">
                    <h4 className="about__sub-header">
                      Goals
                    </h4>
                    <p className="about__description">
                      Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo,
                      pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec
                      vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra.
                      Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores,
                      porttitor tempus nascetur id ut, integer ut dignissim harum.
                    </p>
                  </div>
                  <img className="about__avatar-logo" src={avatar} alt="avatar-icon" />
                  <div className="about__dreams">
                    <h4 className="about__sub-header">
                      Dreams
                    </h4>
                    <p className="about__description">
                      Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo,
                      pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec
                      vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra.
                      Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores,
                      porttitor tempus nascetur id ut, integer ut dignissim harum.
                    </p>
                  </div>
                </div>
              </div>
            </section>
        )

}

export default About