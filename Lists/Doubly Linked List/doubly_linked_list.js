class Node{

    constructor (val){
        this.val = val;
        this.node = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Push
     * return the doubly linked list
     */
    push(val){

        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //remove a node from the end of a list
    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.tail = null;
            this.head = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    //remove a node from a beggining of a list
    shift(){
        if(!this.length) return undefined;
        let shiftNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftNode.next;
            this.head.prev = null;
            shiftNode.next = null;
        }
        this.length--;
        return shiftNode;
    }

    //adding a node to the beggining of a list
    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        
    }

    //accessing a node in a doubly linked list by it's position
    get(index){
        if(index < 0 || index >= this.length) return null;
       
        if(index <=this.length/2){
            console.log("Working from start");
            var count = 0;
            var current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            console.log("Working from end");
            var count = this.length - 1;
            var current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    //replacing the value of a node to be in a doubly linked list
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;

    }

    //adding a node in a doubly linked list by a certain position
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;

        return true;

    }

    //removing a node in a doubly linked list by a certain position
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop(); 
        var removedNode = this.get(index);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;

        //very strange for me!
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;

        // other way to write line 145 and 146
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;

    }
}

let list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("Hermione");