import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/Header.scss';
import ScrollIntoView from 'react-scroll-into-view'

const Header = () => {
    
  return (
    <header className="home">
      <div className="home__top-bar">
        <p className="home__logo"><span><img className="avatar" src={logo} width="40" alt="avatar"/></span></p>
          <nav>
            <ul>
              <li className="nav__item">
                <ScrollIntoView selector="#home"> 
                <button className="nav__item" ><span>Home</span></button>
                </ScrollIntoView>
              </li>
              <li className="nav__item">
                <ScrollIntoView selector="#about"> 
                <button className="nav__item" ><span>About</span></button>
                </ScrollIntoView>
              </li>
              <li className="nav__item">
                <ScrollIntoView selector="#skills"> 
                <button className="nav__item" ><span>Skills</span></button>
                </ScrollIntoView>
              </li>
              <li className="nav__item">
                <ScrollIntoView selector="#contact"> 
                <button className="nav__item" ><span>Contact</span></button>
                </ScrollIntoView>
              </li>
            </ul>
          </nav>
      </div>
      <div className="home__header-wrapper">
        <h1 className="home__header">
          NAME SURNAME
        </h1>
        <h2 className="home__sub-header">
          FRONT-END DEVELOPER
        </h2>
      </div>
    </header>       
  )
}

export default Header