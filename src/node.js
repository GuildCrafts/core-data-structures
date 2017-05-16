// Node -- A very basic data structure that can contain some value and a reference to another node.
function Node(data, next){
    this.data = data;
    this.next = next;
};

// returns the data of the node
Node.prototype.getData = function(){
    console.log(this.data);
};

// returns the next node, or null if no next node
Node.prototype.getNext = function(){
    if (this.next === null){
        return null;
    } else {
        console.log(this.next);
    };
};

// changes the reference to the next node and returns the original node
Node.prototype.setNext = function(element){
    this.next = element;
    return this;
};

// const head = new Node(0, null);
const nodeA = new Node("apple", null);
const nodeB = new Node("banana", null);

nodeA.getData();
nodeA.setNext(nodeB);
nodeA.next = nodeB;
nodeA.getNext();
// nodeB.next.getData();
// NodeA.data.getData();
