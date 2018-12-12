const { createQueue } = require('./01_queue');


// a priority queue actually has two queues, 
// one for high prio items and other for low prio stuff
// but the api is the same

function createPriorityQueue(){

    const loPrioQ = createQueue();
    const hiPrioQ = createQueue();

    return {

        enqueue(item, isHiPrio = false){
            isHiPrio ?
                hiPrioQ.enqueue(item) :
                loPrioQ.enqueue(item);
        },

        dequeue(){
            // we consider we should dequeue first from the hi prio q
            // unless it is empty
            return !hiPrioQ.isEmpty() ?
                    hiPrioQ.dequeue() : 
                     loPrioQ.dequeue();
        },

        peek(){
            // similarly we peek from the hi prio q first
            // so the code is very similar
            return !hiPrioQ.isEmpty() ?
                    hiPrioQ.peek() : 
                     loPrioQ.peek();
        },

        get length(){
            return hiPrioQ.length + loPrioQ.length;
        },

        isEmpty(){
            return hiPrioQ.isEmpty() &&  loPrioQ.isEmpty();
        }


    };

};


const prioQ = createPriorityQueue();

prioQ.enqueue('item 1');
prioQ.enqueue('item 2');
prioQ.enqueue('item 3');

console.log(prioQ.peek());
console.log(prioQ.dequeue());
console.log(prioQ.peek());

prioQ.enqueue('hi prio item 1', true );
console.log(prioQ.peek());
console.log(prioQ.dequeue());
console.log(prioQ.length);
console.log(prioQ.isEmpty());
console.log(prioQ.dequeue());
console.log(prioQ.length);
console.log(prioQ.isEmpty());

console.log(prioQ.dequeue());
console.log(prioQ.length);
console.log(prioQ.isEmpty());