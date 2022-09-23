const nemo =['nemo'];
const moreArray = ['monday','tuesday','wednesday','thursday','friday','nemo'];

//Javascript function to fill an array with values based on size mentioned 
const largeArray = new Array(1000).fill('nemo');

function findNemo (arrayVal){

    //Javascript Inbuit function to calculate performance
    let t0=performance.now();

    for(value of arrayVal){
        if(value === 'nemo')
            console.log('Nemo Found');
    }

    let t1=performance.now();
    return `Call to findNemo took : ${t1-t0} milliseconds`;
}

console.log(findNemo(largeArray)); // O(n) -> Linear