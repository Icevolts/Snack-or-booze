function unroll(squareArray) {
    let newArr = [];
    while(squareArray.length > 0){
        if(squareArray.length === 0) return newArr.flat(1)
        newArr = [...newArr,squareArray.shift()];
        if(squareArray.length === 0) return newArr.flat(1)
        newArr = [...newArr,squareArray.map(arr => arr.pop())];
        if(squareArray.length === 0) return newArr.flat(1)
        newArr = [...newArr,squareArray.pop().reverse()];
        if(squareArray.length === 0) return newArr.flat(1)
        newArr = [...newArr,squareArray.map(arr => arr.shift()).reverse()];
    }
    return newArr.flat(1);
}

module.exports = unroll;
