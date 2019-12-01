import React, { Component } from 'react';

import '../styles/Skills.scss';

class Skills extends Component {
    constructor() {
        super();       
    }
    
    
    makeRate(props){
       return props.map((data,index) => {
        data.dots = [];
        for(let i = 0; i<10; i++) {
            let rateColor = 'is-active';
            if(i >= data.level) {
                rateColor = 'non-active'
            }
            data.dots.push(<label className={rateColor} key={i} id="dot">•</label>)

        } 
        return  [data.name,data.dots]

       }) 
    }
  

  
    render() {
        const { skills } = this.props;
        let d = this.makeRate(this.props.skills);
      return( 
        <section className="skills" id="skills">
            <div className="skills__wrapper">
                <h2 className="skills__header">
                    SKILLS
                </h2>
                
                <div className="skills__content">
                    <ul className="skills__section">
                        {skills.map((d, index) => 
                            <li className="skills__item" key={d.name}>
                                <p className="skills__name">{d.name}</p><span className="skills__dot">{d.dots}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section> 
      )
    }
  }

export default Skills