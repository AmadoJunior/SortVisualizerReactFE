import React from "react";
import styles from "./MainContainer.module.css";

function MainContainer(props){
    return (
    <div className={styles.outer}>
        <div className={styles.container}>
        <h2 className={styles.title}>{props.title}</h2>
            <div>
            {
                props.children
            }
            <img className={styles.implementation} src={props.implementation}></img>
            </div>
        </div>
        <div>
            <ul className={styles.list}>
                <h3>Time Complexity</h3>
                <li>Best: {props.complexity.best}</li>
                <li>Average: {props.complexity.average}</li>
                <li>Worst: {props.complexity.worst}</li>
                <h3>Space Complexity</h3>
                <li>{props.complexity.space}</li>
            </ul>
            <button className={styles.btn} onClick={props.sortHandler}>Sort</button>
        </div>
    </div>
    )
}

export default MainContainer;