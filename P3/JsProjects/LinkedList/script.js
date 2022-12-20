
class Node{

	constructor(data,next = null){
		this.head = data;
		this.next = next;
	}
}

class LinkedList{

	constructor(){
		this.head = null;
		this.size = 0;
	}

	insertFirst(data){

		this.head = new Node(data, this.head);
		this.size++;
	}

	insertLast(data){

		let node = new Node(data);

		let current;

		if(!this.head){
			this.head = node;
		}else{
			current = this.head;
			while(current.next){

				current = current.next;
			}

			current.next = node;
			this.size++;
		}

		
	}

	insertAtIndex(data,index){

		if(index<0 || index>this.size){
			console.log("List out of bound");
			return;
		}else if(index===0){

			this.head = new Node(data,this.head);
		}else{

			let current,previous;
			current = this.head;
			let node = new Node(data);

			let count = 0;
			while(count<index){

				previous = current;
				count++;
				current = current.next;
			}

			node.next = current;
			previous.next = node;
			this.size++;
		}
	}

	fetchData(index){

		if(index<0 || index>this.size){
			console.log("List out of bounds");
			return;
		}else{

			let current = this.head;
			let count = 0;
			while(current){

				if(count == index){
					console.log(`The value at ${index} is ${current.head}`);
					return;
				}
				count++;
				current = current.next;
			}

		}
	}

	deleteNode(index){

		if(index<0 || index>this.size){

			console.log("Index is out of bounds");
			return;
		}

		let current,previous;
		let count = 0;
		current = this.head;


		if(index==0){

			this.head = current.next;
		}else{

			while(count<index){
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}

		this.size--;
		console.log(`Node deleted at index ${index}`);

	}

	search(value){

		let current = this.head;
		let count = 0;
		while(current){

			if(current.head == value){
				return count;
			}
				count++;
				current = current.next;
		}

		alert(`The node with value ${value} does not exist in the list`);


	}

	printData(){

		let current = this.head;
		console.log(`Elements in the linked list are : `);
		while(current){
			console.log(current.head);
			current = current.next;
		}

	}

	printHead(){
		let current = this.head;
		console.log(`Head element is ${current.head}`);
	}

	getNoOfNodes(){

		return this.size;
	}
	
}


const ll = new LinkedList();


function getValues(){

	let values = {

		li : document.createElement('li'),
		arrowIcon : document.createElement('i'),
		link : document.createElement('li'),
		ul : document.querySelector('.ulList'),
		input : parseInt(document.getElementById('getValue').value),


	}

	return values;
}



class LlFunctions{

	docInsertLast(){

			
			let u = getValues();
			
			
			u.li.setAttribute('class','liList');
			u.arrowIcon.setAttribute('class','fas fa-arrow-right');
			u.link.setAttribute('class','liLink');

			u.ul.append(u.li);
			u.link.append(u.arrowIcon);
			u.ul.append(u.link);
			

			u.li.innerText = u.input;

			ll.insertLast(u.input);
			ll.printData();


	}

	docInsertFirst(){

			let u = getValues();
			
			
			u.li.setAttribute('class','liList');
			u.arrowIcon.setAttribute('class','fas fa-arrow-right');
			u.link.setAttribute('class','liLink');


			
			u.link.append(u.arrowIcon);
			u.ul.prepend(u.link);
			u.ul.prepend(u.li);
		
		

			u.li.innerText = u.input;

			ll.insertFirst(u.input);
			ll.printData();
			
	}

	// docInsertRandom(){

	// 	let u = getValues();

	// 	u.li.setAttribute('class','liList');
	// 	u.arrowIcon.setAttribute('class','fas fa-arrow-right');
	// 	u.link.setAttribute('class','liLink');

	// 	ll.insertAtIndex(u.input,1);

	// 	u.li.innerText = u.input;
	// 	let after = u.ul.children[2];

	// 	before.insertBefore(after,before);





	// }

	docRemoveElement(){

		let u = getValues();
		let remove = ll.search(u.input);
		let size = ll.getNoOfNodes();



		if(remove==0){

			let nodeValue = u.ul.children[remove];
			let arrowPosition = remove+1;
			let arrow = u.ul.children[arrowPosition];

			u.ul.removeChild(arrow);
			u.ul.removeChild(nodeValue);

			


		}else{

			let nodeValue = u.ul.children[++remove];
			let arrowPosition = remove+1;
			let arrow = u.ul.children[arrowPosition];

			u.ul.removeChild(arrow);
			u.ul.removeChild(nodeValue);
		}

	}




}

const docLL = new LlFunctions();
let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click',() => {
	let option = document.getElementById('operation');
	let valu = option.value;

	if(valu==0){
		alert("Please Select one of the operation");
	}else if(valu==1){
		docLL.docInsertFirst();
	}else if(valu==2){
		docLL.docInsertLast();
	}else if(valu==3){
		docLL.docRemoveElement();

	}
});




