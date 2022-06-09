// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const longestSubString = (s) => {
	let i = 0;
	let begin = 0;
	let end = 0;
	let max = 0;
	let hashMap = {};
	while (i < s.length) {
		if (hashMap[s[end]] !== undefined) {
			delete hashMap[s[begin]];
			begin++;
		} else {
			hashMap[s[end]] = end;
			end++;
			max = Math.max(max, end - begin);
		}
		i++;
	}
	return max;
};

console.log(longestSubString("bpfbhmipx"));
console.log(longestSubString("abcabcbb"));
console.log(longestSubString("bbbbb"));
console.log(longestSubString("pwwkew"));
