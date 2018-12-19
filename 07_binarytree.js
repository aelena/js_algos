function createNewNode(key){

    return {

        key,
        left: null,
        right: null,

        addLeft(leftKey){
            const _left = createNewNode(leftKey);
            this.left = _left;
            return this.left;
        },

        addRight(rightKey){
            const _right = createNewNode(rightKey);
            this.right = _right;
            return this.right;
        },

    };

};

const TRAVERSALS = {
    IN_ORDER: (node, visitFn) => {
        if(node !== null){
            TRAVERSALS.IN_ORDER(node.left, visitFn);
            visitFn(node);
            TRAVERSALS.IN_ORDER(node.right, visitFn);
        }
    },
    PRE_ORDER: (node, visitFn) => {
        if(node !== null){
            visitFn(node);
            TRAVERSALS.PRE_ORDER(node.left, visitFn);
            TRAVERSALS.PRE_ORDER(node.right, visitFn);
        }
    },
    POST_ORDER: (node, visitFn) => {
        if(node !== null){
            TRAVERSALS.POST_ORDER(node.left, visitFn);
            TRAVERSALS.POST_ORDER(node.right, visitFn);
            visitFn(node);
        }
    },



}

function createBinaryTree(rootKey){

    const root = createNewNode(rootKey);

    return {
        root,
        print(traversalType = 'IN_ORDER'){

            let result = '';

            const visit = node => {
                result += result.length === 0 ? node.key : ` => ${node.key}`;
            }

            TRAVERSALS[traversalType](this.root, visit);

            return result;

        }
    };
};


const tree = createBinaryTree('a');
const b = tree.root.addLeft('b');
const c = tree.root.addRight('c');
const d = b.addLeft('d');
const e = b.addRight('e');
const f = c.addLeft('f');
const g = c.addRight('g');
const h = d.addLeft('h');
const i = d.addRight('i');


console.log(tree.print());
console.log(tree.print('PRE_ORDER'));
console.log(tree.print('POST_ORDER'));