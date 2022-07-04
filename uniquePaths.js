// https://www.youtube.com/watch?v=W9iVpPuvJ3Q

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

var uniquePaths = function (m, n) {
	const table = Array(m).fill(Array(n));
	// console.log(table[0].length);

	for (let i = 0; i < table.length; i++) {
		table[i][0] = 1;
	}
	for (let i = 0; i < table[0].length; i++) {
		table[0][i] = 1;
	}

	for (let i = 1; i < table.length; i++) {
		for (let j = 1; j < table[i].length; j++) {
			table[i][j] = table[i - 1][j] + table[i][j - 1];
		}
	}
	// return table[m - 1][n - 1];
	console.log(table[m - 1][n - 1]);
};

const m = 3;
const n = 7;

uniquePaths(m, n);
