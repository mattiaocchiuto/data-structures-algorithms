function Node (key, prev, next){
  this.key = key;
  this.prev = prev || null;
  this.next = next || null;
}

Node.prototype = {
  isTail: function(){
    return this.next===null;
  },
  isHead: function(){
    return this.head===null;
  }
}

function LinkedList () {
  this.list = [];
  this.head = null;
  this.tail = null;
}

LinkedList.prototype = {
  getHead: function (){
    return this.head;
  },
  getTail: function (){
    return this.tail;
  },
  insert: function(key){
    var node = new Node(key);

    if (!this.head){
      this.head = node;
    }
    else {
      var tail = this.getTail();
      tail.next = key;
      node.prev = tail.key;
    }
    this.list.push(node);
    this.tail=node;
  },
  delete: function(key){
    var node = this.getHead();
    while(node) {
      if(node.key==key){
        var myPrev = this.getPrev(node.key),
            myNext = this.getNext(node.key);

        if(node.prev === null && node.next === null){
          this.list = [];
          this.head = null;
          this.tail = null;
        }
        else if (node.prev === null){ //head
          myNext.prev = null;
          this.head = myNext;
        }
        else if(node.next === null){ //tail
          myPrev.next = null;
          this.tail=myPrev;
        }
        else{ // generic node
          myPrev.next = node.next;
          myNext.prev = node.prev
        }
        node.prev = null;
        node.next = null;
      }
      node = this.getNext(node.key);
    }
  },
  search: function(key){ // this function has to search through the array data
    for (i in this.list){
      if(this.list[i].key==key){
        return this.list[i];
      }
    }
  },
  getNext: function(key){
    var node = this.search(key);
    if(node && node.isTail()){
      return null;
    }
    return this.search(node.next);
  },
  getPrev: function(key){
    var node = this.search(key);
    if(node && node.isHead()){
      return null;
    }
    return this.search(node.prev);
  },
  minimum: function(){},
  maximum: function(){}
}
