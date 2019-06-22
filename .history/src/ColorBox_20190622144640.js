import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        let newColors = this.props.allColors.filter(val => val !== this.props.color)
        let idx = Math.floor(Math.random() * newColors.length);
        this.color = newColors[idx];
    }

    handleClick() {
        this.changeColor();
    }

    render(){
        return (
            <div className="ColorBox" style={{backgroundColor: this.props.color}} onClick={this.handleClick}>{this.props.color}</div>
        )
    }
}

export default ColorBox;