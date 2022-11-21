/**
 * Pseudocode:
 * 1. This function should accept a value
 * 2. Create a new node using the value passed to the function
 * 3. If there is no head property on the list, set the head and tail to be the newly created node
 * 4. Othwerwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
 * 5. Incremenet the length by one
 * 6. Return the linked list
 */

class Node{

    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        // check edge case - if it's empty
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        // check if there are no nodes
        if(!this.head) return undefined;
        //this will point in the begining (head)
        var currentHead = this.head; 
        //move the head property to be the current head's next property (node)
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        // edge case
        if(index < 0 && index >= this.length) return null;
        let counter = 0;
        let current = this.head
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        
        if(index < 0 || index > this.length) return false;
        // !! will return boolean 
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);


        //create new node
        let newNode = new Node(val);
        // get the item right before it
        let prev = this.get(index - 1);
        // we need to connect previous with the new node, and new node with the next one
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
        
    }
    remove(index){
        if(index < 0|| index >=this.length) return undefined;
        //sterge un nod nou de la inceputul listei
        if(index === 0) return this.shift();
        //remove the last item from the list
        if(index === this.length -1) return this.pop();

        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length --;
        return removed;
    }

    reverse(){
        //change the head with the tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        let next;
        let prev = null;
        for(var i; i > this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
console.log(list.push("Hello"))
console.log(list.push("You"))
console.log(list.push("!"))
// console.log(list.get(2))
// console.log(list.set(2, "!!!!!!"))
// console.log(list.get(2))
// console.log(list.insert(0, 'FIRST!!!'))
// console.log(list.get(2))
console.log("renoved",list.remove(1));