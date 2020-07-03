import React, {useState, useEffect} from "react";
import VisualizerP5 from "./../Visualizer/VisualizerP5";
import randomArrGenerator from "./../../Tools/randomArrGenerator";

function BubbleSort(){
    //State
    const [data, setData] = useState([]);

    //Effects
    useEffect(() => {
        let tempArr = randomArrGenerator(120, 250);
        setData(tempArr);
    }, [])

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
        <VisualizerP5
            title="Bubble Sort"
            data={data}
            sortHandler={sortHandler}
        />
    )
}

export default BubbleSort;