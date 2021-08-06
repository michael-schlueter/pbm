// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

/*
const createEmptyDrumArray = () => newArray(16).fill(false);
--> creates an array with 16 elements of false
let kicks = createEmptyDrumAray();
*/

// function to convert string input into the array name
const getDrumArrayByName = function(name) {
    if (name === 'kicks') {
        return kicks;
    } else if (name === 'snares') {
        return snares;
    } else if (name === 'hiHats') {
        return hiHats;
    } else if (name === 'rideCymbals') {
        return rideCymbals;
    } else {
        return;
    }
}

// function to flip the boolean value in the correct array at the specified index
const toggleDrum = function (drumArrayName, index) {
    const drums = getDrumArrayByName(drumArrayName);
    // making sure that all arguments are valid
    if (!drums || index > 15 || index < 0) {
        return;
    }
    drums[index] = !drums[index];
};

// function to clear an array (turning all elements to false)
function clear (drumArrayName) {
    // turning string input to arrayname 
    const drums = getDrumArrayByName(drumArrayName);
    // making sure argument is valid
    if (drums) {
        for (let i = 0; i < drums.length; i++) {
            drums[i] = false;
        }
    }
}

// function to invert boolean values in drumsarray
function invert (drumArrayName) {
    // turning string input to arrayname
    const drums = getDrumArrayByName(drumArrayName);
    // making sure argument is valid
    if (!drums) {
        return;
    }
    for (let i = 0; i < drums.length; i++) {
        drums[i] = !drums[i];
    }
}

// bonus function
function getNeighborPads (x, y, size) {
    const neighborPads = [];
    // return empty array if input is invalid
    if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
        return neighborPads;
    }
    // return an array of 4 neighbors
    neighborPads.push([x-1, y]);
    neighborPads.push([x, y - 1]);
    neighborPads.push([x + 1, y]);
    neighborPads.push([x, y + 1]);
    // return less neighbors in case of edge / corner position
    return neighborPads.filter((neighbor) => {
        return neighbor.every((val) => {
            return val >= 0 && val < size;
        });
    });
}






/* LEARNINGS
- alternative for 'for loop' or filling an array with the same element multiple times: drums.fill(false);
- converting string names into array names!
*/


