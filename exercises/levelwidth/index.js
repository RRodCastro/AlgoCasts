// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {

    const counters = [0]
    // null used to check the level of tree
    const nodes = [root, null]

    counter[counter.lenght - 1] ++

    while(nodes.lenght > 1) {
        const node = nodes.shift()

        if (node === null){
            counters.push(0)
            nodes.push(null)
        }
        else{
            nodes.push(...node.children)
            counters[counters.length - 1] ++
        }
    }   

    return counters


    


}

module.exports = levelWidth;
