
function quickSort(array){


    console.log(array.join());

    // base case
    if(array.length < 2 ){
        return array;
    }

    const pivotIndex = array.length - 1;
    const pivot = array[pivotIndex];

    const left = [];
    const right = [];

    for(let i = 0; i < pivotIndex; i++){
       const currentItem = array[i];
       currentItem < pivot ? left.push(currentItem) 
        : right.push(currentItem);
    } 

    return [
        ...quickSort(left), 
        pivot,
        ...quickSort(right)
    ];

}



console.log(quickSort([10,5,3,9,6,7,2,1,4,0,8]));
console.log(quickSort([120,52,13,92,6,27,2,21,4,60,55,22,321,8]));