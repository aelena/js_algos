// divides array in 2 halves until we get down to arrays
// less than 2 elements in length

function mergeSort(array) {

    return array.length < 2 ?  array : 
             _merge(mergeSort(array.slice(0, Math.floor(array.length / 2))),
                    mergeSort(array.slice(Math.floor(array.length / 2))));

}

function _merge (firstHalf, secondHalf){

    const sorted = [];

    while(firstHalf.length && secondHalf.length){

        firstHalf[0] <= secondHalf[0] ? 
            sorted.push(firstHalf.shift())
            : sorted.push(secondHalf.shift())

    }

    const result = [...sorted, ...firstHalf, ...secondHalf];
    console.log(result);
    return result;

}


mergeSort([10,5,3,9,6,7,2,1,4,0,8]);
mergeSort([120,52,13,92,6,27,2,21,4,60,55,22,321,8]);