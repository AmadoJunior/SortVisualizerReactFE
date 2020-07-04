import React from "react";
import Sketch from "react-p5";
import styles from "./Visualizer.module.css";

function VisualizerP5(props){

    const height = 300;
    const width = 500;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
    }   

    const draw = (p5) => {
        let tempArr = props.data;
        const stroke = 2;
        const color = "white";
        const spacingMultiplier = 4;
        let startingPoint = (width - (tempArr.length*stroke*(spacingMultiplier/2)))/2;
        p5.background(0);
        p5.stroke(color);
        p5.strokeWeight(stroke);

        for(let i = 0; i < tempArr.length; i++){
            p5.line(startingPoint+(i*spacingMultiplier), 
            height - tempArr[i], 
            startingPoint+(i*spacingMultiplier), 
            height-2);
        }
        
    }

    return (
        <div className={styles.container}>
            <Sketch setup={setup} draw={draw}></Sketch>
        </div>
    )
}

export default VisualizerP5;