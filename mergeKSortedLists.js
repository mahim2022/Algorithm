// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

const mergeTwoSortedList = (l1, l2) => {
	const dummyNode = new ListNode(-Infinity);
	let tail = dummy;
	while (l1 && l2) {
		if (l1.value <= l2.value) {
			tail.next = l1;
			tail = l1;
			l1 = l1.next;
		} else {
			tail.next = l2;
			tail = l2;
			l2 = l2.next;
		}
		if (!l1) {
			tail.next = l2;
		}
		if (!l2) {
			tail.next = l1;
		}
	}
	return dummy.next;
};

const mergeList = (l) => {
	while (l.length > 1) {
		let a = l.shift();
		let b = l.shift();
		let mergedAB = mergeTwoSortedList(a, b);
		l.push(mergedAB);
	}
	return l[0];
};
