'use strict'

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

class Stack {
  constructor (size) {
    this.head = null
    this.maxSize = size
    this.length = 0
  }

  push (item) {
    if (this.isFull()) {
      throw new Error('Stack full')
    }

    let node

    if (item instanceof Node) {
      node = item
    } else {
      node = new Node(item)
    }

    node.next = this.head
    this.head = node

    this.length++
  }

  pop () {
    const toRemove = this.head

    this.head = toRemove.next
    this.length--

    return toRemove
  }

  isEmpty () {
    return !this.length
  }

  isFull () {
    return this.length >= this.maxSize
  }

  getSize () {
    return this.length
  }
}
