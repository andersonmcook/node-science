'use strict'

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

class List {
  constructor () {
    this.head = null
  }
// just a reference, not nested
  add (node) {
    node.next = this.head
    this.head = node
  }
}

const list = new List
list.add(new Node('A'))
list.add(new Node('B'))
list.add(new Node('C'))
console.log('first item in the list', list);
