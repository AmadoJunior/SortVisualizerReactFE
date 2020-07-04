import React, {useState, useEffect} from "react";
import VisualizerP5 from "./../Visualizer/VisualizerP5";
import MainContainer from "./../MainContainer/MainContainer";
import randomArrGenerator from "./../../Tools/randomArrGenerator";
import implementation from "./../../Assets/bubble.png";

function BubbleSort(){
    //State
    const [data, setData] = useState([]);
    const [complexity, setComplexity] = useState({
        best: "O(N)",
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
        setActive(false);
    }

    return (
        <MainContainer
        title="Bubble Sort"
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

export default BubbleSort;