"use strict";

const { LinkedList, Node } = require("./sortLinkedList");

function pivotAroundValue(list, pivot) {
  let counter = list.length;
  let current = list.head;

  while( counter > 0 && current !== null){
    if (current.val > pivot){
      list.head = list.head.next;
      list.tail.next = current;
      list.tail = current;
      list.tail.next = null;
      counter--;
      current = list.head;
    } else {
      counter--;
      current = current.next;
    }

  }

  console.log('list is: ', list);
  console.log("printing list values:");
  let printIdx = list.head;
  while(printIdx){
    console.log(printIdx.val);
    printIdx = printIdx.next;
  }

  return list;
}

module.exports = pivotAroundValue;
/*
psuedo:

*/