(
    function ()  {
        if (!Array.prototype.last){
            Array.prototype.last = function(){
                return this[this.length - 1];
            }
        }
    }
)();


function createNode(key){

    const children = [];

    return {

        key,
        children,
        addChild(childKey){
            children.push(createNode(childKey))
            return children.last();
        }
    };
};

function createTree(rootNodeKey){

    const rootNode = createNode(rootNodeKey);

    return {
        rootNode,

        print(){
            let result = '';

            function traverse(node, visitFn, depth){
                visitFn(node, depth);
                if(node.children.length){
                    node.children.forEach(node => {
                        traverse(node, visitFn, depth + 1)
                    });
                }
            };
            

            // print with nested layout, which is what we use depth here for
            function addKeyToResult(node, depth){
                result +=
                    result.length === 0 ? node.key
                    : `\n${' '.repeat(depth * 2)}${node.key}`;
            };

            traverse(rootNode, addKeyToResult, 1);

            return result;
        }

    };

};

// simulate a classic tree structure by faking a DOM tree
const dom = createTree('html');
const head = dom.rootNode.addChild('head');
const body = dom.rootNode.addChild('body');
const title = head.addChild('title - a title');
const header = body.addChild('header');
const main = body.addChild('main');
const footer = body.addChild('footer');
const h1 = header.addChild('h1 - Tree exercise');
const p = main.addChild('p - Learn about trees!');
const copyright = footer.addChild(`Copyright ${new Date().getFullYear()}`);

console.log(dom.print());