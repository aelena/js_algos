function doTheInsertionSort(array, printFn){

    // We need two loops here
    // Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time

    for(let i = 1; i < array.length; i++){

        for(let j = 0; j < i; j++){

            if(array[i] < array[j]){
                // splice and delete
                array.splice(j, 0, array.splice(i, 1));
            }
        }

        printFn(i, array.join());

    }

};

doTheInsertionSort([10,5,3,9,6,7,2,1,4,0,8], (i, array) => {
    console.log(`Pass: ${i} => ${array}`);
});


doTheInsertionSort([120,52,13,92,6,87,43,101,27,2,21,4,60,55,22,321,8], (i, array) => {
    console.log(`Pass: ${i} => ${array}`);
});