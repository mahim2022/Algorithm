// 49. Group Anagrams
// Medium

// 9946

// 336

// Add to List

// Share
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function (strs) {
	const sortedString = strs.map((word) => word.split("").sort().join(""));
	const hashMap = {};
	let res = [];

	for (let i = 0; i < strs.length; i++) {
		if (!hashMap[sortedString[i]]) {
			hashMap[sortedString[i]] = [strs[i]];
		} else {
			hashMap[sortedString[i]].push(strs[i]);
		}
	}
	res = Object.values(hashMap);

	console.log(res);
	// console.log(Object.values(hashMap));
	// return Object.values(hashMap);
};

groupAnagrams(strs);
