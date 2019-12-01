import React, { Component } from 'react';
import logoFooter from '../images/logo_footer.png';
import '../styles/Footer.scss'

const Footer = () => {
    return(
        <footer className="footer" id="footer">
        <div className="footer__wrapper">
          <div>
            <p className="footer__contacts"><span>Mobile: </span>+38066-66-66-666</p>
            <p className="footer__contacts"><span>Email: </span>mail&#64;gmail.com</p>
            <p className="footer__contacts"><span>Skype: </span>mySkypeAcc</p>
          </div>
          <p className="footer__logo"><a href="#"><img className="avatar" src={logoFooter} width="80" alt="avatar"/></a></p>
        </div>
      </footer>
    )
}
export default Footer