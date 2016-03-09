'use strict'

const chalk = require('chalk')
const util = require('util') // built into node
const now = require('performance-now')


const arr = [7,0,4,1,8,6,9,3,2,5]
// const arr = [14, 0, 8,2,16,12,18,6,4,10]

const arr2 = [7,0,4,1,8,6,9,3,2,5]
// console.log(arr2)
// console.log(arr2.sort((a,b) => a > b))


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
        // console.log(chalk.red(util.inspect(array)))
      }
      // console.log(chalk.grey(util.inspect(array)))
    }
  }

  return array
}

function insertionSort (array) {
  for(let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1)
      // console.log(chalk.yellow(util.inspect(array)))
      while (array[i] < array[i - 1]) {
        swap(array, i, i - 1)
        i--
        // console.log(chalk.red(util.inspect(array)))
      }
    }
  }
  return array
}

function selectionSort (array) {
  for (let j = 0; j < array.length - 1; j++) {
    // console.log(chalk.yellow(util.inspect(array)))
    let minimum = j;
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < array[minimum]) {
        minimum = i;
      }
      // console.log(chalk.red(util.inspect(array)))
    }
    if(minimum != j) {
      swap(array, j, minimum);
    }
  }
  return array
}

function sortTimer (callback) {
  let x, y, i
  let counts = []
  for (i = 0; i < 100; i++) {
    const arr = [7,0,4,1,8,6,9,3,2,5]
    x = now()
    callback(arr)
    y = now()
    counts.push(parseFloat((y - x).toFixed(4)))
  }
  console.log(counts.reduce((a, b) => a + b))
}
console.log("selectionSort")
sortTimer(selectionSort)
console.log("bubbleSort")
sortTimer(bubbleSort)
console.log("insertionSort")
sortTimer(insertionSort)


