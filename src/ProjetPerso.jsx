import  React, { Component } from "react";
export class ProjetPerso extends Component {
    constructor(props){
        super(props);
        this.listImgs = props.imgsLink.split(',');
        console.log(this.listImgs)
    }
    render(){
        
        return <div className="projet-pers">
            <div className="card">
                <div className="front-card face-card" style={{backgroundImage: "url("+ this.listImgs[0]+")"}}>
                    <h4>{this.props.name}</h4>
                </div>
                <div className="back-card face-card" style={this.listImgs.length >= 1?{backgroundImage: "url("+ this.listImgs[1]+")"}:{backgroundImage: "url("+ this.listImgs[0]+")"}}>
                    <p>{this.props.children}</p>
                </div>
            </div>
        </div>
    }
}