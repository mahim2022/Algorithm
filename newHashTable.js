const hash = (key, table) => {
	let hashVariable = 17; //prime number scales better
	for (let i = 0; i < table.length; i++) {
		hashVariable = (13 * hashVariable * key.charCodeAt(i)) % table.length; ///13 prime number scales better % by table length to make the hashes smaller
	}
	return hashVariable;
};

class HashTable {
	table = new Array(3);
	numItems = 0;

	resizeTable = () => {
		const newTable = new Array(this.table.length * 2);
		this.table.forEach((item) => {
			if (item) {
				item.forEach(([key, value]) => {
					const index = hash(key, newTable);
					if (newTable[index]) {
						newTable[index].push([key, value]);
					} else newTable[index] = [[key, value]];
				});
			}
		});
		this.table = newTable;
	};

	setItem = (key, value) => {
		this.numItems++;
		const loadFactor = this.numItems / this.table.length;
		if (loadFactor > 0.8) {
			console.log(`Reszing`);
			this.resizeTable();
		}

		const index = hash(key, this.table);
		if (this.table[index]) {
			this.table[index].push([key, value]);
		} else this.table[index] = [[key, value]];
	};
	getItem = (key) => {
		const index = hash(key, this.table);
		console.log(this.table[index].find((cur) => cur[0] === key)[1]);
	};
}

const myTable = new HashTable();
myTable.setItem("firstName", "Naimul");
myTable.setItem("lastName", "Naimul");
myTable.setItem("surName", "Naimul");
myTable.setItem("Address", "Naimul");
myTable.setItem("Phone Number", "Naimul");
myTable.setItem("Religion", "Naimul");
myTable.getItem("firstName");
myTable.getItem("lastName");
myTable.getItem("surName");
console.log(myTable.table.length);
