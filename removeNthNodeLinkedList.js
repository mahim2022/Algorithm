// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

const removeNthNodefromEnd = (head, n) => {
	////considering a dummy node to get the prev element of the removeNode///

	let dummyNode = new ListNode(-Infinity);
	dummyNode.next = head;
	let resultNode = dummyNode;
	let prevNode = dummyNode;
	let rmvNode = head;
	let tailNode = head;
	count = 0;
	while (count < n) {
		count++;
		tail = tail.next;
	}
	while (tail) {
		tailNode = tailNode.next;
		rmvNode = rmvNode.next;
		prevNode = prevNode.next;
	}

	prevNode.next = rmvNode.next;
	return resultNode.next;
};

// const head = new ListNode();
// const n = 2;
// removeNthNodefromEnd(head, n);
