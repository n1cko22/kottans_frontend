
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import sendForm from '../actions'
import reducer from '../reducer'
require('../styles/Contacts.scss');



const store = createStore(reducer)

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:''
        }
    }

  
  render() {
    
    return (
    <div className="s-touch__contact" id="contact">
        <h2 className="s-touch__header">
            CONTACT
        </h2>
        <div className="s-touch__items-wrapper">
            <address className="s-touch__item s-touch__address">
                <h2 className="address__heading">Phone number:</h2>
                <p className="address__paragraph">
                <a className="address__link" href="tel:+38066-66-66-666">+38066-66-66-666</a>
				</p>           
				<h4 className="address__heading">Email:</h4>	
                <p className="address__paragraph">
					<a className="address__link" href="mailto:contactus@email.com">contactus@email.com</a>
				</p>
                <h4 className="address__heading">Skype:</h4>	
                <p className="address__paragraph">
					<a className="address__link" href="skype:mySkypeAcc">mySkypeAcc</a>
				</p>
            </address>
			<form className="s-touch__item s-touch__form" action="">
                <input className="form__input" type="text" placeholder="Name" name="name" pattern="^[a-zA-Z ,.'-]+$" required value={this.state.phone} onChange={this.handleChange} />
				<input className="form__input" type="email" placeholder="Email" name="email" required  value={this.state.email} onChange={this.handleChange}/>
				<textarea className="form__input form__message" placeholder="Message" name="message" required value={this.state.message} onChange={this.handleChange}></textarea>
				<button className="button button--accent form__button" type="submit" name="submit" id="submit" onClick={this.handleSave}><span className="button--text__color">SEND</span></button>
			</form>    
		</div>
    </div>
      
    
    )
  }
  handleChange = (event) => {

   const name = event.target.name
   const value = event.target.value
    this.setState({[name]: value})
  }
  
  handleSave = (event) => {
    event.preventDefault()
    store.dispatch(sendForm(this.state))
  }
}

const mapStateToProps = (state) => {
  return { name: state.name , email:state.email}
}



export default connect(mapStateToProps)(Form)



