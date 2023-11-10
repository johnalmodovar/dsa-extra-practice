"use strict";

function sortLinkedList(listA, listB) {
  let sortedLinkedList = new LinkedList();
  let a = listA.head;
  let b = listB.head;

  while (a !== null && b !== null) {
    if (a.val <= b.val) {
      sortedLinkedList.push(a.val);
      a = a.next;
    } else {
      sortedLinkedList.push(b.val);
      b = b.next;
    }
  }

  if (a === null) {
    while (b !== null) {
      sortedLinkedList.push(b.val);
      b = b.next;
    }
  }

  if (b === null) {
    while (a !== null) {
      sortedLinkedList.push(a.val);
      a = a.next;
    }
  }

  return sortedLinkedList;
}

/*
psuedo: -> merge
create a new linkedList for the new sorted linked list
create pointers for linked-list a && linked-list b -> set it to head.

while loop -> pointer a is not null && pointer b is not null
  if pointer a value is less than or equal to pointer b value
    push a value into new linkedList
    make pointer a to next node
  else
    push b value into new linkedList
    make pointer b to next node

if pointer a is null
  push all pointer b nodes into new linked list
  if pointer b is not null
    push b value into new linkedList
    make pointer b to next node

if pointer b is null
  push all pointer a nodes into new linked list
  if pointer a is not null
    push a value into new linkedList
    make pointer a to next node

return new linkedList
*/

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head !== null) newNode.next = this.head;
    if (this.tail === null) this.tail = newNode;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    // Handle empty list
    if (this.tail === null) throw new Error("List is empty");

    // Handle list length 1
    if (this.length === 1) {
      const popped = this.tail.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return popped;
    }

    // Handle length > 1
    let current = this.head;
    while (current.next !== null) {
      if (current.next === this.tail) {
        const popped = this.tail.val;
        this.tail = current;
        this.length -= 1;
        return popped;
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    // Handle empty list
    if (this.head === null) throw new Error("List is empty");

    // Handle list length = 1
    if (this.length === 1) {
      const popped = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return popped;
    }

    // Handle length > 1
    const popped = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    return popped;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) throw new Error("Index is invalid");

    let i = 0;
    let current = this.head;

    while (i < this.length) {
      if (i === idx) return current.val;

      current = current.next;
      i++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) throw new Error("Invalid index");

    let current = this.head;
    let i = 0;

    while (i !== idx) {
      i++;
      current = current.next;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) throw new Error("invalid index");

    if (this.length === 0) {
      this.push(val);
      return;
    }

    if (idx === 0) {
      this.unshift(val);
      return;
    }

    if (idx === this.length) {
      this.push(val);
      return;
    }

    const newNode = new Node(val);

    let current = this.head;
    let i = 0;

    while (i < this.length) {
      if (i === idx - 1) {
        let temp = current.next;
        current.next = newNode;
        current = temp;
        i++;
      } else if (i === idx) {
        newNode.next = current;
        break;
      } else {
        i++;
        current = current.next;
      }
    }
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) throw new Error("invalid index");

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length) {
      return this.pop();
    }

    let current = this.head;
    let i = 0;
    while (i < this.length) {
      if (i === idx - 1) {
        let temp = current.next.val;
        current.next = current.next.next;
        this.length -= 1;
        return temp;
      }
      i++;
      current = current.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let count = 0;

    let i = 0;
    let current = this.head;
    while (i < this.length) {
      count += current.val;
      current = current.next;
      i++;
    }

    return count / this.length;
  }
}

module.exports = {
  sortLinkedList,
  LinkedList,
  Node
};