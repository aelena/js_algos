function createStack() {

	// internal store as closure
	const stack = [];
    
    return {
    
    	enqueue(item) {
        	// we want to store in order so we add only from one side
            stack.push(item);
        },
        
        dequeue(){
        	// now remove from the other side
            return stack.pop();
        },
        
        peek() {
        	return stack[stack.length - 1];
        },
        
        // use a getter or else if a method, then it will always
        // be 0 which was the length when the object was created
        get length() {
        	return stack.length;
        },
        
        isEmpty() {
        	return stack.length === 0;
        }       
    }
}

// test the queue using, well, the queue
const sut = createStack();
console.log(sut.isEmpty()); // should be true
sut.enqueue("Item 1");
sut.enqueue("Item 2");
sut.enqueue("Item 3");

console.log(sut.peek());
console.log(sut.dequeue());
console.log(sut.dequeue());
console.log(sut.peek());
console.log(sut.length);
console.log(sut.dequeue());

console.log(sut.isEmpty()); // should be true