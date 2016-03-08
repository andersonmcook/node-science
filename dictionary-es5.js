'use strict'

function Dictionary () {
  const data = []

  this.add = (index, value) => {
    data[index] = value
  }

  this.find = (index) => {
    return data[index]
  }

  this.remove = (index) => {
    delete data[index]
  }

  this.showAll = () => {
    Object
      .keys(data)
      .sort()
      .forEach(key => console.log(key, data[key]))
  }
}
