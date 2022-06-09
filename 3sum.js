// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

const brute3Sum = (nums) => {
	if (!nums) return [];
	nums.sort((a, b) => a - b);
	console.log(nums);
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		for (let j = i + 1; j < nums.length; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) continue;
			for (let k = j + 1; k < nums.length; k++) {
				if (k > j + 1 && nums[k] === nums[k - 1]) continue;
				if (nums[i] + nums[j] + nums[k] === 0) {
					result.push([nums[i], nums[j], nums[k]]);
				}
			}
		}
	}
	console.log(result);
};
const nums = [1, 2, -2, -1];
// brute3Sum(nums);

//o(n2)
const threeSum = (nums) => {
	if (!nums) return [];
	nums.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		const target = 0 - nums[i]; ////nums[i]+nums[j]+nums[k]=0/////nums[i]+nums[j]=target
		let j = i + 1;
		let k = nums.length - 1;
		while (j < k) {
			const sum = nums[j] + nums[k]; /////target=sums;
			if (sum > target) {
				k--;
			}
			if (sum < target) {
				j++;
			} else {
				if (nums[i] + nums[j] + nums[k] === 0) {
					result.push([nums[i], nums[j], nums[k]]);
				}

				///if same///
				while (nums[j] === nums[j + 1]) j++;
				while (nums[k] === nums[k - 1]) k--;
				/////

				///incrementing and looking for next triplet
				j++;
				k--;
			}
		}
	}
	console.log(result);
};

threeSum(nums);
