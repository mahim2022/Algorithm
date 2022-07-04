// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	let currentInterval = intervals[0];
	const res = [currentInterval];
	for (let interval of intervals) {
		let e1 = currentInterval[1];
		let s2 = interval[0];
		let e2 = interval[1];
		if (e1 >= s2) {
			currentInterval[1] = Math.max(e1, e2);
			// break;
		} else {
			res.push(interval);
			currentInterval = interval;
		}
	}
	console.log(res);
	return res;
};

merge([
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
]);
