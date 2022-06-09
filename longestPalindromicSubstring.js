// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

const pointerFunc = (s, l, r) => {
	if ((s.length = 0 || l > r)) return null;
	let curr = "";
	// const index = [];
	while (s[l] === s[r] && l >= 0 && r < s.length) {
		// index["left"] = l;
		// index["right"] = r;
		curr = s.substring(l, r + 1);
		l -= 1;
		r += 1;
	}
	return curr;
};

const longestPalindrome = (s) => {
	let max = "";
	let oddString = "";
	let evenString = "";
	for (let i = 0; i < s.length; i++) {
		let odd = pointerFunc(s, i, i);
		let even = pointerFunc(s, i, i + 1);
		let curMax = odd.length > even.length ? odd : even;
		max = curMax.length > max.length ? curMax : max;
	}
	console.log(max);
};

longestPalindrome("babad");
