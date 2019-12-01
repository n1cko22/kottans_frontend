import React, { Component } from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import Header from '../components/Header'
import About from '../components/About';
import Skills from '../components/Skills'
import SkillsData from './constants';
import Form from '../components/Contacts'
import Footer from '../components/Footer'
import reducer from '../reducer'

import '../styles/appStyles.scss';

const store = createStore(reducer)

class App extends Component {
    
    render() {
       

        return (
            <div>
                <Header />
                <About />
                <Skills skills = { SkillsData }/>
                <Provider store={store} >
                    <Form />
                </Provider >
                <Footer />

            </div>
        );
    }
}

export default App;
