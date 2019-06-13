class Node {
	constructor(data){
		this.info = data;
		this.link = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	append(data){
		let node = new Node(data);
		if(this.head === null){
			this.head=node;
			this.length++;
		} else {
			let start = this.head;
			while(start.link != null){
				start=start.link;
			}
			start.link=node;
			this.length++;
		}
		return this;
	}
	
	prepend(data) {
		let node = new Node(data);
		if(this.head === null){
			this.head=node;
			this.length++;
		} else {
			let start = this.head;
			this.head=node;
			node.link=start;
			this.length++;
	   }
	 return this;
   }
   
   traverseToIndex(index) {
   	let start = this.head, i=0;
   	while(start != null && index != i) {
   		start = start.link;
   		i++;
   	}
   	return start;
   }
	
	insert(data, index) {
		if(index==0) {
			this.prepend(data);
		} else if(index >=this.length) {
			this.append(data);
		} else {
			let node, leader;
			node = new Node(data);
			leader = this.traverseToIndex(index - 1);
			node.link = leader.link;
			leader.link = node;
			this.length++;
		}
		
		return this;
	}
	
	remove(index) {
		if(index == 0) {
			if(this.head.link == null) {
				this.head=null;
			} else {
				this.head = this.head.link;
			}
			
			this.length--;
			return this;
		} else {
			let leader = this.traverseToIndex(index-1);
			leader.link = leader.link.link;
			this.length--;
		}
	}
	
	reverse() {
		let current = this.head;
		if(current == null) {
			return current;
		} else {
			let prev = null;
			while(current !=null){
				let next = current.link;
				current.link = prev;
				prev = current;
				current = next;
			}
			this.head = prev;
			return this;
		}
	}
	
	printList() {
		let start= this.head;
		const arr =[];
		while(start!=null) {
			arr.push(start.info);
			start = start.link;
		}
		return arr;
	}
}

const list= new LinkedList();
list.append(3);
list.append(4);
list.prepend(2);
list.prepend(1);
list.insert(5, 2);
console.log(list.printList());
list.remove(1);
console.log(list.printList());
list.reverse();
console.log(list.printList());
