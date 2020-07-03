import React, {useState, useEffect} from "react";
import VisualizerP5 from "./../Visualizer/VisualizerP5";
import randomArrGenerator from "../../Tools/randomArrGenerator";

function MergeSort(){
    //State
    const [data, setData] = useState([]);
    let tempArr = [...data];

    //Effects
    useEffect(() => {
        let tempArr = randomArrGenerator(120, 250);
        setData(tempArr);
    }, [])

    //Tools
    //const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

    const sortArr = (arr1, arr2) => {
        let i = 0;
        let j = 0;
        let result = [];
        while(i < arr1.length && j < arr2.length){
            if(arr1[i] > arr2[j]){
                result.push(arr2[j]);
                j++;
            } else if(arr2[j] > arr1[i]) {
                result.push(arr1[i]);
                i++;
            }
        }
        while(i < arr1.length){
            result.push(arr1[i]);
            i++;
        }
        while(j < arr2.length){
            result.push(arr2[j]);
            j++;
        }
        return result;
    }

    const sortHandler = async (arr) => {
        if(arr.length <= 1){
            return arr;
        }
        let middle = Math.floor(arr.length/2);
        let left = sortHandler(arr.slice(0, middle));
        let right = sortHandler(arr.slice(middle));
        let data = sortArr(left, right);
        return data;
    }

    return (
        <VisualizerP5
            title="Merge Sort"
            data={data}
            sortHandler={() => sortHandler(tempArr)}
        />
    )
}

export default MergeSort;