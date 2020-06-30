import React, {useState, useEffect} from "react";
import styles from "./bubbleSort.module.css";

function BubbleSort(){

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    const createRandomArr = () => {
        let tempArr = [];
        for(let i = 0; i < 80; i++){
            let randInt = getRandomInt(25);
            tempArr.push(randInt);
        }
        return tempArr;
    }

    const [data, setData] = useState(createRandomArr());

    //Tools
    const swap = (arr, index1, index2) => {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

    const sortHandler = async() => {
        let tempArr = [...data];
        let noSwaps;
        for(let i = 0; i < tempArr.length; i++){
            noSwaps = true;
            for(let j = 0; j < tempArr.length-i; j++){
                if(tempArr[j] > tempArr[j+1]){
                    swap(tempArr, j, j+1);
                    noSwaps = false;  
                    await sleep(1);
                    setData(tempArr);
                }
            }
            if(noSwaps){
                break;
            }
        }

    }

    return (
        <div className={styles.container}>
            <h1>Bubble Sort</h1>
            <div className={styles.visualizerContainer}>
            {
                data.map((item, i) => {
                    return(
                        <div 
                        key={i} 
                        className={styles.item}
                        style={{height: item*15 + "px"}}/>
                    )
                })
            }
            </div>
            <div onClick={sortHandler}>
            <button className={styles.btn} onClick={sortHandler}>Sort</button>
            </div>
        </div>
    )
}

export default BubbleSort;