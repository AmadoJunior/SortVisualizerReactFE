import React, {useState, useEffect} from "react";
import VisualizerP5 from "./../Visualizer/VisualizerP5";
import randomArrGenerator from "../../Tools/randomArrGenerator";

function QuickSort(){
    //State
    const [data, setData] = useState([]);
    let tempArr = [...data];

    //Effects
    useEffect(() => {
        let tempArr = randomArrGenerator(120, 250);
        setData(tempArr);
    }, [])

    //Tools
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

    const swap = async (arr, index1, index2) => {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    const pivot = async(arr, start=0, end=arr.length-1) => {
        let swapIndex = start;
        let pivot = arr[start];
        for(let i = start+1; i <= end; i++){
            if(arr[i] < pivot){
                swapIndex++;
                swap(arr, swapIndex, i);
                await sleep(50);
                setData(arr);
            }
        }
        swap(arr, start, swapIndex);
        await sleep(50);
        setData(arr);
        return swapIndex;
    }

    const sortHandler = async (arr, left=0, right=arr.length-1) => {
        if(left < right){
            let pivotIndex = await pivot(arr, left, right);
            sortHandler(arr, left, pivotIndex-1);
            sortHandler(arr, pivotIndex+1, right);
        }
        return arr;
    }

    return (
        <VisualizerP5
            title="Quick Sort"
            data={data}
            sortHandler={() => sortHandler(tempArr)}
        />
    )
}

export default QuickSort;