/* For example : 
const array1 = ['a','b','c','d'];
const array2 = ['x','b','z'];
Should return true 

const array1 = ['f','f','g','h'];
const array2 = ['x','b','z'];
should return false;

*/

//2 Param - Arrays - No size limit;
//return true or false

/* 
**** FOREACH Do not Break the iteration, if the respective condition is met ****
**** Use FOREACH only for iterative task and not for condition exist.

const array1 = ['a','b','c','d'];
const array2 = ['x','b','z'];

let IsArrayElementFound = (firstArray, secondArray) =>{
    firstArray.forEach(firstArrayElement => {
        console.log(`FirstArrayElement : ${firstArrayElement}`)
        secondArray.forEach(secondArrayElement => {
            
            if (firstArrayElement === secondArrayElement) return true;
            console.log(`${firstArrayElement === secondArrayElement},${firstArrayElement},${secondArrayElement}`);
            
        });
    });
    
}*/


// BIG O Notation :  
// Time Complexity : O(a*b) > O(n^2)
// Space Complexity : O(1)
//Brute Force Approach :

/* 

const array1 = ['a','b','c','d'];
const array2 = ['x','b','z'];

let IsArrayElementFound = (firstArray, secondArray) =>{
     for (let firstArrayElement of firstArray) 
        for (let secondArrayElement of secondArray)
            if (firstArrayElement === secondArrayElement) return true;
        
     return false;
};

console.log(IsArrayElementFound(array1,array2)); 

---------------------------------------------------------------------
*/

// BIG O Notation :  
//Time Complexity O(a + b) > O(2n)
//Space Complexity O(a)

/* 
1. loop through the first array and create an object where properties === items in the array.
2. loop through the second array and check if the element in the second array exist in the object.
*/

const array1 = ['a','b','c','d'];
const array2 = ['x','b','z'];

let IsArrayElementFound = (firstArray, secondArray) =>{
    let map={};

    /* 1. loop through the first array and create an object where properties === items in the array. */
    firstArray.forEach( element => {
        if(!map[element]) 
            map[element]=true;
    });


    /* 2. loop through the second array and check if the element in the second array exist in the object. */
    for( let value of secondArray)
        if(map[value]) return true;

    return false;
}


console.log(IsArrayElementFound(array1,array2)); 

