const pivotAroundValue = require("./pivotAroundValue");
const { Node, LinkedList } = require("./sortLinkedList");

describe("testing pivotAroundValue", function(){
  test("correctly pivots a linked list", function(){
    let list1 = new LinkedList();

    list1.push(7);
    list1.push(6);
    list1.push(2);
    list1.push(3);
    list1.push(9);
    list1.push(1);
    list1.push(1);

    let list2 = new LinkedList();

    list2.push(2);
    list2.push(3);
    list2.push(1);
    list2.push(1);
    list2.push(7);
    list2.push(6);
    list2.push(9);

    expect(pivotAroundValue(list1, 5)).toEqual(list2);
  });
});