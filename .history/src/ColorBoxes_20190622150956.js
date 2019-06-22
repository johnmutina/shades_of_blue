import React, { Component } from 'react';
import ColorBox from './ColorBox';

class ColorBoxes extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("test");
    }

    render(){
        let colorArr = ["#0000ff", "#0000e5", "#0000cc", "#0000b2", "#000099", "#00007f", "#000066", "#00004c", "#000033", "#000019", "#1919ff", "#3232ff", "#4c4cff", "#6666ff", "#7f7fff", "#9999ff", "#b2b2ff", "#ccccff", "#e5e5ff", "#ffffff"];
        Array.shuffle(colorArr);
        // let idx = Math.floor(Math.random() * colorArr.length);
        return (
            <div>
                <h1>Color Game</h1>
                {colorArr.map(el => <ColorBox color={el} allColors={colorArr}/>)}
            </div>
        )
    }
}

export default ColorBoxes;