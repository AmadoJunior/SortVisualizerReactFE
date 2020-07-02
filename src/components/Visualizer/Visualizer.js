import React from "react";
import styles from "./Visualizer.module.css";

function Visualizer(props){
    return (
        <div className={styles.container}>
            <h1>{props.title}</h1>
            <div className={styles.visualizerContainer}>
                {
                    props.data.map((item, i) => {
                        return(
                            <div
                                key={i}
                                className={styles.item}
                                style={{height: item*2 + "px"}}
                            ></div>
                        )
                    })
                }
            </div>
            <div onClick={props.sortHandler}>
            <button className={styles.btn} onClick={props.sortHandler}>Sort</button>
            </div>
        </div>
    )
}

export default Visualizer;