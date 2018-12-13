// basic node in the graph
function createNode(key){

    const neighbors = []

    return {
        key,
        neighbors,
        addNeighbor(node){
            neighbors.push(node)
        }
    }
};


function createQueue() {

	// internal store as closure
	const queue = [];
    
    return {
    
    	enqueue(item) {
        	// we want to store in order so we add only from one side
            queue.unshift(item);
        },
        
        dequeue(){
        	// now remove from the other side
            return queue.pop();
        },
        
        peek() {
        	return queue[queue.length - 1];
        },
        
        // use a getter or else, if a method, then it will always
        // be 0 which was the length when the object was created
        get length() {
        	return queue.length;
        },
        
        isEmpty() {
        	return queue.length === 0;
        }       
    }
};

function createGraph(directed = false){

    const nodes = []
    const edges = []

    return {

        directed,
        nodes,
        edges,

        addNode(key){
            nodes.push(createNode(key));
        },

        getNode(key){
            return nodes.find(node => node.key === key);
        },

        addEdge(node1Key, node2Key){
            const node1 = this.getNode(node1Key)
            const node2 = this.getNode(node2Key)

            node1.addNeighbor(node2);
            edges.push(`${node1Key}-${node2Key}`);

            if(!directed){
                node2.addNeighbor(node1);
            }
        },

        print(){
            return nodes.map(({key, neighbors}) => {
                let result = key;

                if(neighbors.length){
                    result += `=> ${neighbors
                        .map(n => n.key)
                        .join(' ')}`
                }

                return result;

            })
            .join('\n');
        },



        // breadth first search
        breadthFirstSearch(startingNodeKey, visitFn){

            const startingNode = this.getNode(startingNodeKey);
            // need to keep track of which nodes we have visited
            // and which we have not visited yet
            const visited = nodes.reduce((acc, node) => {
                // by default not visited
                acc[node.key] = false;
                return acc;
            }, {});
            // need to keep track of nodes in order 
            const queue = createQueue();
            // starting with our first node
            queue.enqueue(startingNode);

            while(!queue.isEmpty()){

                const current = queue.dequeue();

                if(!visited[current.key]){
                    visitFn(current);
                    visited[current.key] = true
                }

                current.neighbors.forEach(element => {
                    if(!visited[element.key]){
                        queue.enqueue(element);
                    }
                });
            }
        }   // close of breadthFirstSearch
    }
};


const graph = createGraph(true);

graph.addNode("John");
graph.addNode("Jane");
graph.addNode("Cat");
graph.addNode("Dog");
graph.addNode("Child 1");
graph.addNode("Child 2");

graph.addEdge("John", "Jane")
graph.addEdge("John", "Child 1")
graph.addEdge("John", "Child 2")
graph.addEdge("Jane", "John")
graph.addEdge("Jane", "Child 1")
graph.addEdge("Jane", "Child 2")

console.log(graph.print());

console.log("==================================");

// for the breadth first search part
console.log("Breadth Search First")
const graph2 = createGraph(true)
const nodes = ['a', 'b', 'c', 'd', 'e', 'f']
const edges = [
  ['a', 'b'],
  ['a', 'e'],
  ['a', 'f'],
  ['b', 'd'],
  ['b', 'e'],
  ['c', 'b'],
  ['d', 'c'],
  ['d', 'e']
]

nodes.forEach(node => {
    graph2.addNode(node)
});
  
  edges.forEach(nodes => {
    graph2.addEdge(...nodes)
});
  
  graph2.breadthFirstSearch('a', node => {
    console.log(node.key)
});

console.log("==================================");