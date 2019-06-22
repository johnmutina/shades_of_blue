import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render(){
        return (
            <div className="ColorBox" style={{backgroundColor: this.props.color}}>Box</div>
        )
    }
}

export default ColorBox;