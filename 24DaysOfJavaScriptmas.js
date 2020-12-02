// day 1
// n children have got m pieces of candy. They want to eat as much candy as they can, 
// but each child must eat exactly the same amount of candy as any other child.
// Determine how many pieces of candy will be eaten by all the children together. 
// Individual pieces of candy cannot be split.

// Pseudocode
    // divide the total of candies to the number of children 
    // Round down for any floaters

function candies(children, candy){
    console.log(Math.floor(candy/children) * children)
}


candies(5,12)