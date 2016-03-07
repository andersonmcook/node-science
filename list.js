'use strict'

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}
//singly-linked list
class List {
  constructor () {
    this.head = null
    this.tail = null
  }
// just a reference, not nested

  addHead (node) {
    this.tail = this.tail || node
    node.next = this.head
    this.head = node
  }

  addTail (node) {
    if (this.head) {
      this.tail.next = node
    } else {
      this.head = node
    }
    this.tail = node
  }

  removeTail () {
    let current = this.head
    while (current.next !== this.tail) {
      current = current.next
    }
    current.next = null
    this.tail = current
  }

  removeHead () {
    this.head = this.head.next
  }
}

const list = new List
list.addHead(new Node('A'))
list.addHead(new Node('B'))
list.addHead(new Node('C'))
list.addHead(new Node('D'))
list.addHead(new Node('E'))
list.addHead(new Node('F'))
console.log('first item in the list', list);
