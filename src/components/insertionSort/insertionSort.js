import React, {useState, useEffect} from "react";
import VisualizerP5 from "./../Visualizer/VisualizerP5";
import MainContainer from "./../MainContainer/MainContainer";
import randomArrGenerator from "./../../Tools/randomArrGenerator";
import implementation from "./../../Assets/insertion.png";

function InsertionSort(){
    //State
    const [data, setData] = useState([]);
    const [complexity, setComplexity] = useState({
        best: "O(N)",
        average: "O(N^2)",
        worst: "O(N^2)",
        space: "O(1)"
    });

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
        <MainContainer
        title="Insertion Sort"
        implementation={implementation}
        complexity={complexity}
        sortHandler={sortHandler}>
            <VisualizerP5
                data={data}
            />
       </MainContainer>
    )
}

export default InsertionSort;