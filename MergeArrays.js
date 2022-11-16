/*  
    Question 1 : Merge two sorted arrays
    Input      : [0,3,4,31] [4,6,30]
    Output     : [0,3,4,4,6,30,31]  
*/

function mergeArrays(array1, array2){
    const mergedArrays = [];

    if(array1.length === 0) return array2;
    if(array2.length === 0) return array1;

    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = j = 1;


    while (array1Item || array2Item ){
        if(!array2Item || array1Item < array2Item ){
            mergedArrays.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArrays.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    return mergedArrays;
}

console.log(mergeArrays([0,3,4,31], [4,6,30]));