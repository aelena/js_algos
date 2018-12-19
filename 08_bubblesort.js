function doTheBubble(_array, printFn){


    let swapped = false;
    let pass = 0;
    do{
        printFn(++pass, _array);

        swapped = false;
        _array.forEach((item,index) => {
            if(item > _array[index+1]){
                var temp = item;
                _array[index] = _array[index+1];
                _array[index+1] = temp;
                swapped = true;
            }
        });
    }
    while (swapped);

};


doTheBubble([10,5,3,9,6,7,2,1,4,0,8], (pass,joinedArray) => {console.log(
    `Pass ${pass}: ${joinedArray.join()}`)}
);

doTheBubble([120,52,13,92,6,27,2,21,4,60,55,22,321,8], (pass,joinedArray) => {console.log(
    `Pass ${pass}: ${joinedArray.join()}`)}
);