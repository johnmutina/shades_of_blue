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
        let colorArr = ["#0000ff",
        "#0000e5",
        "#0000cc",
        "#0000b2",
        "#000099",
        "#00007f",
        "#000066",
        "#00004c",
        "#000033",
        "#000019",
        "#1919ff",
        "#3232ff",
        "#4c4cff",
        "#6666ff",
        "#7f7fff",
        "#9999ff",
        "#b2b2ff",
        "#ccccff",
        "#e5e5ff",
        "#ffffff"] 
        // ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC'];
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