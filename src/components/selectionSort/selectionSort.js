import React, {useState, useEffect} from "react";
import VisualizerP5 from "./../Visualizer/VisualizerP5";
import randomArrGenerator from "./../../Tools/randomArrGenerator";

function SelectionSort(){
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
        let min = 0;
        for(let i = 0; i < tempArr.length; i++){
            for(let j = i+1; j < tempArr.length; j++){
                if(tempArr[j] <= tempArr[min]){
                    min = j;
                }
            }
            swap(tempArr, min, i);
            await sleep(180);
            setData(tempArr);
        }
        setData(tempArr);
    }

    return (
        <VisualizerP5
            title="Selection Sort"
            data={data}
            sortHandler={sortHandler}
        />
    )
}

export default SelectionSort;