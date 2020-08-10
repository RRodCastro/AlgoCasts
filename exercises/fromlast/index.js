// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b'); 
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    const lastNode = list.getLast()

    let slowPointer = list.head
    let fastPointer = list.head
    let counter = 0
    while(counter < n ) {
        fastPointer = fastPointer.next
        counter ++ 
    }

    while (fastPointer !== lastNode){
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next
    }
    return slowPointer

}

module.exports = fromLast;
