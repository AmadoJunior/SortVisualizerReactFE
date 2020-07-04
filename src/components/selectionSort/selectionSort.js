import React, {useState, useEffect} from "react";
import VisualizerP5 from "./../Visualizer/VisualizerP5";
import MainContainer from "./../MainContainer/MainContainer";
import implementation from "./../../Assets/selection.png";
import randomArrGenerator from "./../../Tools/randomArrGenerator";

function SelectionSort(){
    //State
    const [data, setData] = useState([]);
    const [complexity, setComplexity] = useState({
        best: "O(N^2)",
        average: "O(N^2)",
        worst: "O(N^2)",
        space: "O(1)"
    });
    const [active, setActive] = useState(false);

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
        setActive(true);
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
        setActive(false);
    }

    return (
        <MainContainer
        title="Selection Sort"
        implementation={implementation}
        complexity={complexity}
        sortHandler={sortHandler}
        active={active}>
            <VisualizerP5
                data={data}
            />
       </MainContainer>
    )
}

export default SelectionSort;