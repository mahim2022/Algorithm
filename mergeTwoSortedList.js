// 21. Merge Two Sorted Lists

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

const mergeTwoSortedList = (l1, l2) => {
	const dummy = new ListNode(-Infinity);
	let prev = dummy;
	while (l1 && l2) {
		if (l1.val < l2.val) {
			prev.next = l1;

			l1 = l1.next;
		} else {
			prev.next = l2;

			l2 = l2.next;
		}
		prev = prev.next;
		if (!l1) prev.next = l2;
		if (!l2) prev.next = l1;
	}
	return dummy.next;
};
