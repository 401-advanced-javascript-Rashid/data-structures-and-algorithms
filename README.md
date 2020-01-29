## Author: Rashid-Alsawalqa

# Code Challenge // Shift an Array
Write a function that shifts the order of any array with numbers and inserts a number into the middle

## Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-Rashid/data-structures-and-algorithms/pull/2)
- [ci/cd](https://github.com/401-advanced-javascript-Rashid/data-structures-and-algorithms/runs/407909219)

## Setup

npm i jest

## How to initialize/run your application (where applicable)

- 'npm test'

## Challenge

Problem domain above. The main challenge was not being allowed to use any built in array methods such as array.reverse, .push, .pop ect. ect. moving integers with out these methods proved to be very difficult.

## Approach & Efficiency

Immediately I knew that a loop was going to be necessary but I did not realize that two loops would be necessary. Moving or shifting the first two numbers out and adding a number proved to be very difficult. I decided that I needed to create to variables, one set to an empty array and one set to the length of the array cut in half. I also needed to set a variable to zero that could be re-assigned. I filled the new array with half of the original array with the first loop. Then I was able to insert the new element, and use the second loop to fill the rest of the array with the let over numbers.

# UML
![White-Board](challenges/assest/20200129_220721.jpg) (GitHub Actions)
