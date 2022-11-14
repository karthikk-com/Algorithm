class MyArray {
    constructor() {
        this.length = 0;
        this.data ={};
    }

    get(index) { //O(1)
        return this.data[index] ? this.data[index] : `No Data Available at index : ${index}`;
    }

    push(value) { //O(1)
        this.data[this.length] = value;
        this.length++;
        return this.data;
    }

    pop() { //O(1)
        delete this.data[this.length-1];
        this.length--;
    }

    insertAt(index,value) { //O(n)
        if(index >= this.length)
            return this.push(value);

        this.shiftIndexToLeft(index);
        this.data[index]=value;
        this.length++;
        
    }

    deleteAt(index) { //O(n)
        if(index == this.length-1)
            return this.pop();

        if(index <= this.length-1){
            this.shiftIndexToRight(index);
            delete this.data[this.length-1];
            this.length--;
        }
    }

    shiftIndexToRight(index) {
        for(let i = index; i<=this.length - 1; i++){
            this.data[index] = this.data[index+1];
        }
    }

    shiftIndexToLeft(index) {
        for(let i = this.length; i >= index; i--){
            this.data[i] = this.data[i-1];
        }
    }
}

const array = new MyArray();
console.log(array); //{ length: 0, data: {} }

array.push(10); //{ length: 1, data: { '0': 10 } }
array.push(20); //{ length: 2, data: { '0': 10, '1': 20 } }
array.pop(); //{ length: 1, data: { '0': 10 } }

array.push(30); //{ length: 2, data: { '0': 10, '1': 30 } }
array.push(40); //{ length: 3, data: { '0': 10, '1': 30, '2': 40 } }
console.log(array); //{ length: 3, data: { '0': 10, '1': 30, '2': 40 } }

array.insertAt(4,1); //{ length: 4, data: { '0': 10, '1': 30, '2': 40, '3': 1 } }
console.log(array); //{ length: 4, data: { '0': 10, '1': 30, '2': 40, '3': 1 } }

console.log(array.get(2)); //40

array.deleteAt(2); //{ length: 3, data: { '0': 10, '1': 40, '2': 1 } }
array.deleteAt(1); //{ length: 2, data: { '0': 10, '1': 1 } }
console.log(array); //{ length: 2, data: { '0': 10, '1': 1 } }