import React, { Component } from "react";


export class Formation extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div className="wp-block-group formation">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="wp-svg svg-animate"> 
                    <path fill="none" d="M0,0 L0,100"/>
                    <path fill="none" d="M0,100 L100,100" />
                    <path fill="none" d="M100,100 L100,0" />
                    <path fill="none" d="M100,0 0,0" />
                </svg>
                <div className="wp-block-row text">
                    <h4>{this.props.name}</h4>
                    <p className="date">{this.props.date}</p>
                    <p className="desc">{this.props.children}</p>
                </div>
        </div>
    }
}