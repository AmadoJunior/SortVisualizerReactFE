import React, {useState, useEffect} from "react";
import VisualizerP5 from "./../Visualizer/VisualizerP5";
import randomArrGenerator from "./../../Tools/randomArrGenerator";

function InsertionSort(){
    //State
    const [data, setData] = useState([]);

    //Effects
    useEffect(() => {
        let tempArr = randomArrGenerator(120, 250);
        setData(tempArr);
    }, [])

    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

    const sortHandler = async() => {
        let tempArr = [...data];
    
        for(let i = 1; i < tempArr.length; i++){
            let curVal = tempArr[i];
            for(var j = i-1; j >= 0 && tempArr[j] > curVal; j--){
                tempArr[j+1] = tempArr[j];
                await sleep(3);
                setData(tempArr);
            }
            tempArr[j+1] = curVal;
            await sleep(3);
            setData(tempArr);
        }
    }

    return (
        <VisualizerP5
            title="Insertion Sort"
            data={data}
            sortHandler={sortHandler}
        />
    )
}

export default InsertionSort;