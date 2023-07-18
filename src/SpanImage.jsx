import  React, { Component } from "react"; 
export class SpanImage extends Component {
    constructor (props){
        super(props);
    }
    render() {
        return <span className={"images-pro i" + this.props.index} style={{backgroundImage: "url("+ this.props.img+ ")"}}></span>;
    }
}
