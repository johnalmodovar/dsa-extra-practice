const { sortLinkedList, LinkedList, Node } = require("./sortLinkedList");

describe("testing sortLinkedList", function () {
  it("correctly sorts two linked lists", function () {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let list3 = new LinkedList();

    list1.push(1);
    list1.push(3);
    list1.push(5);

    list2.push(2);
    list2.push(4);
    list2.push(6);

    list3.push(1);
    list3.push(2);
    list3.push(3);
    list3.push(4);
    list3.push(5);
    list3.push(6);

    expect(sortLinkedList(list1, list2)).toEqual(list3);
  });
});