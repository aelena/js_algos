function createNode(value){
    return{
        value,
        next: null 
    }
}


function createLinkedList(){
    return{
        head: null,

        tail: null,

        length: 0,

        push(value){
            const node = createNode(value);

            // special case when list is empty, and therefore
            // does not have head or tail
            if(this.head === null){
                this.head = node;
                this.tail = node;
            }
            else{
                // else "append" the new node to the tail...
                this.tail.next = node;
                 // and now update the tail itself
                this.tail = node;
            }
           
            this.length++;
            return node;
        },

        pop(){
            // 3 scenarios, empty list, list of 1, list of many
            // empty is easy
            if(this.isEmpty()){
                return null;
            }

            // store a copy of current last node
            const node = this.tail;

            // if list of 1
            if(this.head === this.tail){
                // in this case we basically reset the list
                this.head = this.tail = null;
                this.length--;
                return node;
            }
            
            // we need to detect the node whose next is the tail, 
            // that is, the penultimate node
            // and we need to iterate the whole list
            let current = this.head;
            let nextToLast;

            while(current){
                if(current.next === this.tail){
                    nextToLast = current;
                    break;
                }

                current = current.next;
            }

            // adjust tail of list as we are removing the last node
            nextToLast.next = null;
            this.tail = nextToLast;
            this.length--;

            return current;
            
        },

        get(index){
            // outside bounds
            if(index === 0 || index > this.length - 1 ){
                return null;
            }

            if(index === 0){
                return this.head;
            }

            // we need to loop in all other cases
            let current = this.head;
            let i = 0;
            while(i < index){
                i++;
                current = current.next;
            }

            return current;
        },

        delete(index){

             // outside bounds
             if(index === 0 || index > this.length - 1 ){
                return null;
            }

            const deleted = this.head;

            if(index === 0){
                // update the head to the next element
                this.head = this.head.next;
                this.length--;
                return deleted;
            }

            // we need to loop in all other cases
            let current = this.head;
            // we also need to store the previous node so as to 
            // seamlessly slice on element from the middle and be
            // able to join back the previous and next element
            let previous;
            let i = 0;
            while( i++ < index){
                previous = current;
                current = current.next;
            }

            previous.next = current.next;

            if(previous.next === null){
                this.tail = previous;
            }
            
            this.length--;
            return deleted;

        },

        isEmpty(){
            return this.length === 0;
        },

        // also a print method to be able to quickly shoot
        // some instructions to our lists and be able to see
        // contents on the console log
        print(){
            const values = [];
            let current = this.head;
            while(current){
                values.push(current.value);
                current = current.next;
            }

            return values.join(' => ');
        }
    }
}

let ll = createLinkedList();
const values = [1,2,3,4,'a'];
const nodes = values.map(val => ll.push(val));

console.log("Is Empty? => " + ll.isEmpty());
console.log(ll.print());

// now pop one and verify what is our tail now
console.log(ll.pop());
console.log(ll.print());
console.log(ll.tail.value);

console.log("Delete 2nd node with value => " + ll.delete(1).value);
console.log(ll.print());

console.log("Getting 2nd node with value => " + ll.get(1).value);
console.log(ll.get(1));
console.log(ll.print());
