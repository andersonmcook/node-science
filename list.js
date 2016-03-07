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
    this.tail = null
  }
// just a reference, not nested
  add (node) {
    if (this.head) {
      this.tail.next = node
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
    // if (this.head) {
    //   let current = this.head
    //   while (current.next) {
    //     current = current.next
    //   }
    //   current.next = node
    // } else {
    //   this.head = node
    // }
    // // node.next = this.head
  }
}

const list = new List
list.add(new Node('A'))
list.add(new Node('B'))
list.add(new Node('C'))
console.log('first item in the list', list);
