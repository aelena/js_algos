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
        }

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