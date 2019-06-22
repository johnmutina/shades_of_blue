import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: this.props.color
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        let newColors = this.props.allColors.filter(val => val !== this.props.color)
        let idx = Math.floor(Math.random() * newColors.length);
        this.setState({ color: newColors[idx] });
    }

    handleClick() {
        this.changeColor();
    }

    render(){
        return (
            <div className="ColorBox" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
        )
    }
}

export default ColorBox;