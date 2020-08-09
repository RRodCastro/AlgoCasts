// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }

    next() {
        return this.next
    }

}

class LinkedList {
    constructor() {
        this.head = null

    }

    insertFirst(data) {
        // Equivalnet to:  this.head = new Node(data, this.head)
        // head is null when instancing linkedList
        if (!this.head) {
            this.head = new Node(data, null)
        }
        else {
            this.head = new Node(data, this.head)
        }

    }

    size() {
        // First node
        let node = this.head
        let size = 0
        while(node){
          size ++
          node = node.next
        }
        return size
    }

    getFirst() {
        return this.head
    }

    getLast(){
        let node = this.head
        if (!node) {
            return null 
        }
        while(node){
          if (!node.next){
            return node
          }
          node = node.next
        }
      }

      clear() {
          this.head = null
      }

      removeFirst() {
        let node = this.head
        if (node.next) {
            this.head = node.next
        }
        else {
            this.head = null
        }
      }

      removeLast() {
          let node = this.head
          if (!node){
              return;
          }
          if (!node.next){
              this.head = null
              return
          }
          let prev = node
          while (node.next) {
              prev = node
              node = node.next
          }
          return prev.next = null

      }

      insertLast(data) {
        const last = this.getLast();
    
        if (last) {
          last.next = new Node(data);
        } else {
          this.head = new Node(data);
        }
      }

      getAt(index) {
        let node = this.head
        if (!node){
            return null
        }
        let size = 0
        while(node){
          if (size === index ){
              return node
          }
          size ++
          node = node.next
        }
        return null
      }

      removeAt(index) {
          const removeNode = this.getAt(index)
          if (!removeNode) {
              // Remove doesnt exists
              return 
          }
          let nextNode = removeNode.next
          let prevNode = this.getAt(index - 1)
          if (!prevNode){
              // Prev node should be head
              return this.head = nextNode
          } else {
              if (nextNode){
                  // Link prev node with the next node
                  return prevNode.next = nextNode
              }
              else {
                  // removeNode is a tail
                  return prevNode.next = null
              }
          }
      }

      insertAt(data, index){
        if ( index > this.size() -1  ){
          return this.insertLast(data)
        }
        let nextNode = this.getAt(index)
        let prevNode = this.getAt(index - 1)
        if (!prevNode){
             // Prev node should be head
            return this.head = new Node(data, nextNode)
        } else {
          prevNode.next = new Node(data, nextNode)
        }
      }

      forEach( fn ){
          let node = this.head
          let index = 0
          while(node) {
              fn(node, index)
              node = node.next
              index ++
          }
      }

      *[Symbol.iterator]() {
          let node = this.head

          while(node){
              yield node
              node = node.next
          }
      }
}

module.exports = { Node, LinkedList };
