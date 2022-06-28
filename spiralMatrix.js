// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function (m) {
	let l = 0; //left
	let r = m[0].length - 1; //right
	let t = 0; //top
	let b = m.length - 1; //btooom
	let s = m.length * m[0].length; //size
	const res = []; //result
	while (res.length < s) {
		for (let i = l; i <= r && res.length < s; i++) {
			res.push(m[t][i]);
		}
		t++;
		for (let i = t; i <= b && res.length < s; i++) {
			res.push(m[i][r]);
		}
		r--;
		for (let i = r; i >= l && res.length < s; i--) {
			res.push(m[b][i]);
		}
		b--;
		for (let i = b; i >= t && res.length < s; i--) {
			res.push(m[i][l]);
		}
		l--;
	}
	// return res;
	console.log(res);
};

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

spiralOrder(matrix);
