'use strict'

const chalk = require('chalk')
const util = require('util') // built into node

// const arr = [6,5,3,1,8,7,2,4]
const arr = [7,0,4,1,8,6,9,3,2,5]
// const arr = [14, 0, 8,2,16,12,18,6,4,10]

console.log(arr)

function swap (array, index1, index2) {
  const temp = array[index1]

  array[index1] = array[index2]
  array[index2] = temp
}

function bubbleSort (array) {
  for (let j = 1; j < array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        console.log(chalk.red(util.inspect(array)))
      }
      console.log(chalk.grey(util.inspect(array)))
    }
  }

  return array
}

function insertionSort (array) {
  for(let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1)
      console.log(chalk.yellow(util.inspect(array)))
      while (array[i] < array[i - 1]) {
        swap(array, i, i - 1)
        i--
        console.log(chalk.red(util.inspect(array)))
      }
    }
  }
  return array
}

// didn't work
// function selectionSort (array) {
//   let minimum
//     for (let i = 0; i < array.length; i++) {
//       minimum = array[i]
//       if (array[i] < minimum) {
//         // minimum = array[i]
//         swap(array, i, minimum)
//         console.log(chalk.red(util.inspect(array)))
//       }
//       console.log(chalk.grey(util.inspect(array)))
//     }
//   return array
// }

function selectionSort (array) {
  let i,j;
  for (j = 0; j < array.length - 1; j++) {
    console.log(chalk.red(util.inspect(array)))
    let minimum = j;
    for ( i = j+1; i < array.length; i++) {
      if (array[i] < array[minimum]) {
        minimum = i;
      }
    }

    if(minimum != j) {
      swap(array, j, minimum);
    }
  }
  return array
}

// console.log('bubbled', bubbleSort(arr))
// console.log(insertionSort(arr))
console.log(selectionSort(arr))

