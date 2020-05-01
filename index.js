class Node{
  constructor(value){
    this.value=value;
    this.next=null
  }
}

class Stack{
  constructor(value){
    this.head={
      value:value,
      next:null
    },
    this.tail=this.head,
    this.length=1;
  }
  peek(){
    return this.head;
  }
  push(value){
    const node=new Node();
    node.next=this.head;
    this.head=node;
    this.length++;
    return this;

  }
  pop(){
   if(!this.head){
   return null;
   }
   if(this.head === this.tail){
     this.tail=null
   }
   this.head=this.head.next;
    this.length--;
    return this;
  }
  printElements(){
    const array=[];
    let currentNode=this.head;
    while(currentNode!==null){
      array.push(currentNode.value)
      currentNode=currentNode.next;
    }
    return array;
  }
}
const stack=new Stack(10);
stack.printElements();
stack.push(5)
stack.pop()
stack.pop()
stack.peek()