// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor () {
        this.stackOne = new Stack()
        this.stackTwo = new Stack()
    }

    add(ele) {
        this.stackOne.push(ele)
    }

    remove() {

        // reverse order of stackOne into stackTwo
        while(this.stackOne.peek()){
            this.stackTwo.push( this.stackOne.pop())
        }

        // Get the first element from stack 1
        const popElement =  this.stackTwo.pop()

        // reverse order of stackTwo into stackOne
        while(this.stackTwo.peek()){
            this.stackOne.push(this.stackTwo.pop())
        }

        return popElement
    }

    peek() {
        while(this.stackOne.peek()){
            this.stackTwo.push( this.stackOne.pop())
        }

        const peekElement =  this.stackTwo.peek()

        while(this.stackTwo.peek()){
            this.stackOne.push(this.stackTwo.pop())
        }

        return peekElement
    }
}

module.exports = Queue;
