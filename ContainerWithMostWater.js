// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

const maxArea = (height) => {
	let max = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			const shortestHeight = height[i] < height[j] ? height[i] : height[j];
			const distance = j - i;
			const currArea = shortestHeight * distance;
			max = currArea > max ? currArea : max;
		}
	}
	console.log(max);
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// maxArea(height);

const betterMaxArea = (height) => {
	let i = 0;
	let j = height.length - 1;
	let max = 0;
	while (i < j) {
		// const shortestHeight = height[i] < height[j] ? height[i] : height[j];
		const currArea = (j - i) * Math.min(height[i], height[j]);
		max = currArea > max ? currArea : max;
		if (height[i] < height[j]) {
			i++;
		} else j--;
	}
	console.log(max);
};

betterMaxArea(height);
