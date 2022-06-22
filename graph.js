////making a graph

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
// console.log(airports);
const routes = [
	["PHX", "LAX"],
	["PHX", "JFK"],
	["JFK", "OKC"],
	["JFK", "HEL"],
	["JFK", "LOS"],
	["MEX", "LAX"],
	["MEX", "BKK"],
	["MEX", "LIM"],
	["MEX", "EZE"],
	["LIM", "BKK"],
];

const adjecencyList = new Map();

const addNode = (airport) => {
	adjecencyList.set(airport, []);
};

const addEdge = (origin, destination) => {
	adjecencyList.get(origin).push(destination);
	adjecencyList.get(destination).push(origin);
};

airports.map((airport) => addNode(airport));
routes.map((route) => addEdge(...route));

console.log(adjecencyList);

const bfs = (start) => {
	const visited = new Set();
	const queue = [start];

	while (queue.length > 0) {
		const airport = queue.shift();
		const destinations = adjecencyList.get(airport);
		for (const destination of destinations) {
			// queue.push(destination);
			if (destination === "BKK") {
				console.log("found it");
			}
			if (!visited.has(destination)) {
				visited.add(destination);
				queue.push(destination);
				console.log(destination);
			}
		}
	}
};

// bfs("PHX");

const dfs = (start, visited = new Set()) => {
	console.log(start);
	visited.add(start);
	const destinations = adjecencyList.get(start);
	for (const destination of destinations) {
		if (destination === "BKK") {
			console.log(`DFS found bangkok`);
			return;
		}
		if (!visited.has(destination)) {
			dfs(destination, visited);
		}
	}
};

dfs("PHX");
