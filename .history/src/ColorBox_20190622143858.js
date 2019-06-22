import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.color);
    }

    render(){
        

        return (
            <div className="ColorBox" style={{backgroundColor: this.props.color}} onClick={this.handleClick}>{this.props.color}</div>
        )
    }
}

export default ColorBox;