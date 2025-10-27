const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getUnderlyingList() {
    let current = this.head;
    if (!current) return null;
    const clone = { value: current.value, next: null };
    let node = clone;
    while (current.next) {
      current = current.next;
      node.next = { value: current.value, next: null };
      node = node.next;
    }
    return clone;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) return undefined;

    const removed = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return removed;
  }
}

module.exports = {
  Queue,
};
