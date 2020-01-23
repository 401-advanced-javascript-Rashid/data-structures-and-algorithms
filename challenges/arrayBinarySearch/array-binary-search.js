'use strict';


function binarySearch(array, number) {

    let start = 0;
    let end = array.length;

    while ((end - start) > 0) {
        const center = Math.floor((start + end + 1) / 2);
        if (array[center - 1] === number) return center - 1;
        if (array[center] === number) return center;
        if (number > array[center]) {
            start = center + 1;
        } else {
            end = center - 2;
        }
    }
    return -1;
}

module.exports = binarySearch;