// 20. Valid Parentheses
// Easy

// 13436

// 603

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const ValidParenthesis = (s) => {
	const hashMap = { "(": " )", "{": "}", "[": "]" };
	const stack = [];
	let result = null;
	for (i = 0; i < s.length; i++) {
		if (hashMap[s[i]]) {
			stack.push(hashMap[s[i]]);
		} else if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
			stack.pop();
		} else {
			// console.log(false);
			result = false;
		}
	}
	console.log(stack);
	// console.log(stack.length === 0);
	if (stack.length === 0) {
		result = true;
	}
	console.log(result);
};

ValidParenthesis("()[]{}");
