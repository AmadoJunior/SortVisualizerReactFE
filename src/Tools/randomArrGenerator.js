function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function CreateRandomArray(size, range) {
    let tempArr = [];
    for(let i = 0; i < size; i++){
        let randInt = getRandomInt(range);
        tempArr.push(randInt);
    }
    return tempArr;
}

export default CreateRandomArray;