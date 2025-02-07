import  React, { Component } from "react";
import { SpanImage } from "./SpanImage";
export class ProjetPro extends Component {
    constructor (props){
        super(props);
        this.listImgsprops = props.imgsLink.split(',');
        this.spanImager = [];
    }
    render(){
        for(let i = 1; i < this.listImgsprops.length; i++){
            console.log(i)
            this.spanImager.push(<SpanImage img={this.listImgsprops[i]} index={i-1} key={i-1}></SpanImage>)
        }
        console.log(this.spanImager)
        return <div className="projet-pro" style={{backgroundImage: "url("+ this.listImgsprops[0] + ")"}}>
            <div className="images-container">{this.spanImager}</div>
            <div className="text" >
                <div><h4>{this.props.name}</h4></div>
                <div>
                    <p>
                    {this.props.children}
                    </p>
                </div>
            </div>
            
        </div>;
    }
}