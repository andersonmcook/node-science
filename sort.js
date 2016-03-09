'use strict'

const chalk = require('chalk')
const util = require('util') // built into node

// const arr = [6,5,3,1,8,7,2,4]
const arr = [7,0,4,1,8,6,9,3,2,5]

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
  for (let j = 1; j < array.length; j++) {
    for(let i = 0; i < array.length - j; i++) {
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
  }
  return array
}

// console.log('bubbled', bubbleSort(arr))
console.log(insertionSort(arr))

