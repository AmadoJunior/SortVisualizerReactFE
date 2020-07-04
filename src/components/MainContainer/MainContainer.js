import React from "react";
import styles from "./MainContainer.module.css";

function MainContainer(props){
    let btn = null;
    if(!props.active){
        btn = (
        <button className={styles.btn} onClick={props.sortHandler}>Play</button>
        )
    } else {
        btn = (
            <button className={styles.btnOff}>Sorting...</button>
        )
    }

    return (
    <div className={styles.outer}>
        <div className={styles.container}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.content}>
            {
                props.children
            }
            <img className={styles.implementation} src={props.implementation}></img>
            </div>
        </div>
        <div className={styles.content2}>
            <ul className={styles.list}>
                <h3>Time Complexity</h3>
                <li>Best: {props.complexity.best}</li>
                <li>Average: {props.complexity.average}</li>
                <li>Worst: {props.complexity.worst}</li>
                <h3>Space Complexity</h3>
                <li>{props.complexity.space}</li>
            </ul>
            {
                btn
            }     
        </div>
    </div>
    )
}

export default MainContainer;