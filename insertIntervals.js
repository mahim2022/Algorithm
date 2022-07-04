// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

var insert = function (intervals, newInterval) {
	const res = [];
	let i = 0;
	const len = intervals.length - 1;
	if (len < 1) {
		res.push(newInterval);
		return res;
	}
	///printing the non OverLapping first
	if (i < len && intervals[i][1] < newInterval[0]) {
		res.push(intervals[i]);
		i++;
	}
	if (i === len) {
		res.push(intervals[i]);
		return res;
	}
	let first = intervals[i];
	let second = newInterval;
	//overlapping
	if (i < len && first[0] < second[1]) {
		second = [Math.min(first[0], second[0]), Math.max(first[1], second[1])];
		i++;
		first = intervals[i]; ///next intervals
	}
	res.push(second);
	while (i < len) {
		res.push(intervals[i]);
		i++;
	}

	console.log(res);
};

insert(
	[
		[1, 2],
		[3, 5],
		[6, 7],
		[8, 10],
		[12, 16],
	],
	[4, 8]
);
