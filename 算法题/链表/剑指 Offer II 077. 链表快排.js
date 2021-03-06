function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  return quickSortList(head, null)
}

const swap = function (p1, p2) {
  const tmp = p1.val
  p1.val = p2.val
  p2.val = tmp
}

const partition = function (head, tail) {
  const pivot = head
  let index = pivot
  let cur = head.next
  while (cur !== tail) {
    if (cur.val < pivot.val) {
      index = index.next
      swap(cur, index)
    }
    cur = cur.next
  }
  swap(index, pivot)
  return index
}

const quickSortList = function (head, tail) {
console.log('quickSortList ~ head', head)
console.log('quickSortList ~ tail', tail)
  if (head !== tail) {
    const middleNode = partition(head, tail)
    quickSortList(head, middleNode)
    quickSortList(middleNode.next, tail)
  }
  return head
}

const h0 = new ListNode(4)
// const h1 = new ListNode(2)
// const h2 = new ListNode(1)
// const h3 = new ListNode(3)
// h0.next = h1
// h1.next = h2
// h2.next = h3
console.log(quickSortList(h0, null))
